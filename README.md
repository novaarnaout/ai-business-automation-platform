# AI Business Automation Platform

AI-powered backend platform for automating business workflows, qualifying leads, and processing tasks asynchronously.

## Overview

This project demonstrates a production-oriented backend architecture for AI business automation.

The platform receives incoming leads, stores them in PostgreSQL, queues background processing through Celery and Redis, and uses an AI agent to analyze and qualify leads.

## Architecture

```text
Client
  |
  v
FastAPI
  |
  +---- PostgreSQL
  |
  +---- Redis
          |
          v
       Celery Worker
          |
          v
       AI Agent
          |
          v
     Lead Qualification
Features
JWT-based authentication
User registration and login
Lead submission and management
AI-powered lead qualification
Lead scoring and prioritization
Asynchronous background processing
Celery task queue
Redis message broker
PostgreSQL database
Alembic database migrations
Dockerized development environment
REST API with OpenAPI / Swagger documentation
Health check endpoint
Service-based backend architecture
Tech Stack
Python
FastAPI
PostgreSQL
SQLAlchemy
Alembic
Redis
Celery
OpenAI API
JWT
Docker
Docker Compose
Git / GitHub
API

Swagger documentation is available when the application is running:

http://localhost:8000/docs

OpenAPI specification:

http://localhost:8000/openapi.json

Health check:

http://localhost:8000/health
Main Endpoints
Authentication
POST /api/v1/auth/register
POST /api/v1/auth/login
Leads
POST /api/v1/leads
GET  /api/v1/leads
GET  /api/v1/leads/{lead_id}
Automations
GET  /api/v1/automations
POST /api/v1/automations
POST /api/v1/automations/process-lead
Running Locally
Requirements
Docker Desktop
Docker Compose
Git
Start the platform
docker compose up -d --build
Check services
docker compose ps
View API logs
docker compose logs api --tail 50
View worker logs
docker compose logs worker --tail 50
Stop the platform
docker compose down
Database Migrations

Run migrations with:

docker compose exec api alembic upgrade head
Environment Variables

Create a .env file containing the required configuration:

DATABASE_URL=postgresql+psycopg://postgres:postgres@postgres:5432/ai_automation
REDIS_URL=redis://redis:6379/0
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET_KEY=your_secure_secret

Never commit real API keys or secrets to GitHub.

Project Structure
ai-business-automation-platform/
├── alembic/
│   └── versions/
├── app/
│   ├── agents/
│   ├── api/
│   ├── core/
│   ├── db/
│   ├── models/
│   ├── schemas/
│   ├── services/
│   └── workers/
├── celery_app.py
├── docker-compose.yml
├── Dockerfile
├── alembic.ini
├── requirements.txt
└── README.md
Workflow
A client submits a lead through the REST API.
The lead is persisted in PostgreSQL.
A background Celery task is queued through Redis.
The worker processes the lead.
The AI agent analyzes the lead.
The lead receives qualification data such as score, priority, intent, summary, and recommended action.
The processed data is stored for later retrieval.
Project Status

Core backend functionality is implemented and containerized.

The project is being extended toward a complete AI-powered business automation platform with additional integrations, workflows, monitoring, and deployment capabilities.

License

This project is currently provided without an explicit open-source license.