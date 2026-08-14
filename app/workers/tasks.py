from celery_app import celery_app

from app.agents.lead_agent import analyze_lead
from app.db.session import SessionLocal
from app.services.lead_service import update_lead_analysis


@celery_app.task(
    bind=True,
    autoretry_for=(Exception,),
    retry_backoff=True,
    max_retries=3,
)
def process_lead_task(self, lead_id: int) -> dict:
    db = SessionLocal()

    try:
        lead = db.get(__import__("app.models.lead", fromlist=["Lead"]).Lead, lead_id)

        if lead is None:
            return {
                "status": "failed",
                "lead_id": lead_id,
                "error": "Lead not found",
            }

        analysis = analyze_lead(
            name=lead.name,
            email=lead.email,
            company=lead.company,
            message=lead.message,
        )

        updated_lead = update_lead_analysis(
            db,
            lead_id,
            analysis,
        )

        return {
            "status": "completed",
            "lead_id": updated_lead.id if updated_lead else lead_id,
            "analysis": analysis,
        }

    finally:
        db.close()