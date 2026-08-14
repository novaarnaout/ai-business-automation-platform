from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel, EmailStr
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.core.dependencies import get_current_user
from app.db.session import get_db
from app.models.lead import Lead
from app.models.user import User
from app.services.lead_service import create_lead
from app.workers.tasks import process_lead_task


router = APIRouter(
    prefix="/api/v1/leads",
    tags=["Leads"],
)


class LeadCreate(BaseModel):
    name: str
    email: EmailStr
    company: str
    message: str


class LeadResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    company: str
    message: str
    lead_score: int | None
    priority: str | None
    summary: str | None
    intent: str | None
    recommended_action: str | None
    status: str

    class Config:
        from_attributes = True


class LeadQueuedResponse(BaseModel):
    lead_id: int
    task_id: str
    status: str


@router.post(
    "",
    response_model=LeadQueuedResponse,
    status_code=status.HTTP_202_ACCEPTED,
)
def submit_lead(
    data: LeadCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    lead = create_lead(
        db,
        user_id=current_user.id,
        name=data.name,
        email=data.email,
        company=data.company,
        message=data.message,
    )

    task = process_lead_task.delay(lead.id)

    return {
        "lead_id": lead.id,
        "task_id": task.id,
        "status": "queued",
    }


@router.get(
    "",
    response_model=list[LeadResponse],
)
def list_leads(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return list(
        db.scalars(
            select(Lead)
            .where(Lead.user_id == current_user.id)
            .order_by(Lead.created_at.desc())
        ).all()
    )


@router.get(
    "/{lead_id}",
    response_model=LeadResponse,
)
def get_lead(
    lead_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    lead = db.scalar(
        select(Lead).where(
            Lead.id == lead_id,
            Lead.user_id == current_user.id,
        )
    )

    if lead is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Lead not found",
        )

    return lead