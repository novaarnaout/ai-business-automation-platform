# AI Business Automation Platform

> AI-powered business automation platform for lead management, AI qualification, and asynchronous workflow processing.

## 🚀 Overview

AI Business Automation Platform is a production-oriented full-stack application designed to automate business workflows around incoming leads.

The platform combines a **FastAPI backend**, **PostgreSQL**, **Redis**, **Celery**, and **AI/LLM processing** with a modern **Next.js dashboard**.

It demonstrates how an AI-powered business workflow can receive leads, persist data, process tasks asynchronously, analyze leads with AI, and present business insights through a dashboard.

## ✨ Key Features

### AI & Automation
- AI-powered lead qualification
- Lead scoring and prioritization
- AI-generated summaries
- Intent analysis
- Recommended actions
- Asynchronous AI processing
- Celery background workers
- Redis task/message broker

### Backend
- FastAPI REST API
- JWT authentication
- User registration and login
- Lead management
- Automation endpoints
- PostgreSQL database
- SQLAlchemy ORM
- Alembic migrations
- OpenAPI / Swagger documentation
- Health check endpoint
- Service-oriented backend structure

### Frontend
- Next.js dashboard
- Business analytics overview
- Lead statistics
- Recent leads
- AI activity monitoring
- Lead source analytics
- Automation monitoring
- Responsive dashboard interface

## 🖥️ Dashboard Preview

![AI Business Automation Dashboard](docs/dashboard.png)

The dashboard provides a centralized interface for monitoring leads, AI processing activity, automation workflows, and business metrics.

## 🏗️ Architecture

```text
                         Client
                           |
                           v
                    Next.js Dashboard
                           |
                           v
                        FastAPI
                           |
             +-------------+-------------+
             |             |             |
             v             v             v
        PostgreSQL       Redis       OpenAI API
             |             |
             |             v
             |        Celery Worker
             |             |
             |             v
             |         AI Agent
             |             |
             +-------------+
                    |
                    v
             Lead Qualification
🔄 Workflow
Incoming Lead
     |
     v
FastAPI API
     |
     v
PostgreSQL
     |
     v
Redis Queue
     |
     v
Celery Worker
     |
     v
AI Processing
     |
     v
Lead Qualification
     |
     +---- Score
     +---- Priority
     +---- Intent
     +---- Summary
     +---- Recommended Action
     |
     v
Dashboard / API
| Layer             | Technologies               |
| ----------------- | -------------------------- |
| Backend           | Python, FastAPI            |
| Database          | PostgreSQL, SQLAlchemy     |
| Migrations        | Alembic                    |
| Background Jobs   | Celery                     |
| Message Broker    | Redis                      |
| AI                | OpenAI API                 |
| Authentication    | JWT                        |
| Frontend          | Next.js, React, TypeScript |
| Infrastructure    | Docker, Docker Compose     |
| API Documentation | OpenAPI / Swagger          |
| Version Control   | Git, GitHub                |



📡 API

When the backend is running, interactive API documentation is available through Swagger:

http://localhost:8000/docs

OpenAPI specification:

http://localhost:8000/openapi.json

Health check:

http://localhost:8000/health
Main API Areas
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

🗂️ Project Structure
ai-business-automation-platform/
│
├── app/
│   ├── agents/
│   ├── api/
│   ├── core/
│   ├── db/
│   ├── models/
│   ├── schemas/
│   ├── services/
│   └── workers/
│
├── alembic/
│   └── versions/
│
├── frontend/
│   ├── src/
│   ├── lib/
│   ├── public/
│   └── package.json
│
├── docs/
│   └── dashboard.png
│
├── celery_app.py
├── docker-compose.yml
├── Dockerfile
├── alembic.ini
├── requirements.txt
└── README.md

⚙️ Running Locally
Requirements
Python
Node.js
Docker Desktop
Docker Compose
Git

Backend
Create a .env file with the required configuration:
DATABASE_URL=postgresql+psycopg://postgres:postgres@postgres:5432/ai_automation
REDIS_URL=redis://redis:6379/0
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET_KEY=your_secure_secret

Never commit real API keys, passwords, or secrets to GitHub.

Start the backend services:

docker compose up -d --build

Check running services:

docker compose ps

View API logs:

docker compose logs api --tail 50

View worker logs:

docker compose logs worker --tail 50

Run database migrations:

docker compose exec api alembic upgrade head

Stop the services:

docker compose down
Frontend

From the frontend directory:

npm install
npm run dev

The dashboard will be available at:

http://localhost:3000
🧪 Build Verification

The frontend has been verified with a production build using:

npm run build

The Next.js production build completes successfully with TypeScript validation and static page generation.

🔐 Security

The project is designed with common backend security practices including:

JWT-based authentication
Environment-based secrets
Separation of configuration from source code
Database migrations
API-level validation
.env excluded from version control
📈 Project Status

The core AI business automation workflow is implemented and functional.

Current implementation includes:

FastAPI backend
PostgreSQL persistence
JWT authentication
Redis
Celery background processing
AI lead qualification
Next.js dashboard
REST API
Swagger/OpenAPI documentation
Docker-based development environment

The platform can be extended with additional integrations, business workflows, monitoring, deployment infrastructure, and production services.

🎯 What This Project Demonstrates

This project demonstrates practical experience building an AI-enabled backend system from architecture through implementation, including:

REST API design
Authentication and authorization
Database architecture
Asynchronous processing
AI/LLM integration
Background workers
Redis-based task processing
Full-stack integration
Dockerized development
API documentation
Production-oriented frontend architecture
📄 License

This project is currently provided without an explicit open-source license.
