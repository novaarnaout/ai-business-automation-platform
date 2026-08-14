from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.automation import AutomationCreate, AutomationResponse
from app.services.automation_service import (
    create_automation,
    list_automations,
)
from app.workers.tasks import process_lead_task

router = APIRouter(
    prefix="/api/v1",
    tags=["Automations"],
)


@router.post(
    "/automations",
    response_model=AutomationResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_automation_endpoint(
    data: AutomationCreate,
    db: Session = Depends(get_db),
):
    return create_automation(db, data)


@router.get(
    "/automations",
    response_model=list[AutomationResponse],
)
def list_automation_endpoint(
    db: Session = Depends(get_db),
):
    return list_automations(db)


@router.post(
    "/automations/process-lead",
    status_code=status.HTTP_202_ACCEPTED,
)
def process_lead(
    name: str,
    email: str,
    company: str,
    message: str,
):
    task = process_lead_task.delay(
        name=name,
        email=email,
        company=company,
        message=message,
    )

    return {
        "task_id": task.id,
        "status": "queued",
    }