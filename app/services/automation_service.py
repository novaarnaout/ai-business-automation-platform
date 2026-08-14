from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.automation import Automation
from app.schemas.automation import AutomationCreate


def create_automation(
    db: Session,
    data: AutomationCreate,
) -> Automation:
    automation = Automation(
        name=data.name,
        description=data.description,
    )

    db.add(automation)
    db.commit()
    db.refresh(automation)

    return automation


def list_automations(db: Session) -> list[Automation]:
    result = db.execute(
        select(Automation).order_by(Automation.id.desc())
    )

    return list(result.scalars().all())