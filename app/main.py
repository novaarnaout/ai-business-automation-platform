from fastapi import FastAPI

from app.api.auth import router as auth_router
from app.api.leads import router as leads_router
from app.api.router import router as automation_router


app = FastAPI(
    title="AI Business Automation Platform",
    version="1.0.0",
    description=(
        "AI-powered business automation platform for "
        "lead qualification and workflow automation."
    ),
)


app.include_router(auth_router)
app.include_router(automation_router)
app.include_router(leads_router)


@app.get("/health", tags=["Health"])
def health_check():
    return {
        "status": "healthy",
        "service": "ai-business-automation-platform",
    }