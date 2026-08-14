from datetime import datetime

from sqlalchemy.orm import Session

from app.models.lead import Lead


def create_lead(
    db: Session,
    *,
    user_id: int,
    name: str,
    email: str,
    company: str,
    message: str,
) -> Lead:
    lead = Lead(
        user_id=user_id,
        name=name,
        email=email,
        company=company,
        message=message,
        status="queued",
    )

    db.add(lead)
    db.commit()
    db.refresh(lead)

    return lead


def update_lead_analysis(
    db: Session,
    lead_id: int,
    analysis: dict,
) -> Lead | None:
    lead = db.get(Lead, lead_id)

    if lead is None:
        return None

    lead.lead_score = analysis.get("lead_score")
    lead.priority = analysis.get("priority")
    lead.summary = analysis.get("summary")
    lead.intent = analysis.get("intent")
    lead.recommended_action = analysis.get("recommended_action")
    lead.status = "completed"
    lead.processed_at = datetime.utcnow()

    db.commit()
    db.refresh(lead)

    return lead