from datetime import datetime

from pydantic import BaseModel, ConfigDict


class AutomationCreate(BaseModel):
    name: str
    description: str | None = None


class AutomationResponse(BaseModel):
    id: int
    name: str
    description: str | None
    status: str
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)