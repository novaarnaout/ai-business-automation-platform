import json

from openai import OpenAI

from app.core.config import settings


client = OpenAI(api_key=settings.openai_api_key)


def analyze_lead(
    name: str,
    email: str,
    company: str,
    message: str,
) -> dict:
    response = client.responses.create(
        model="gpt-5-mini",
        input=[
            {
                "role": "system",
                "content": (
                    "You are a business lead qualification AI agent. "
                    "Analyze incoming leads and return ONLY valid JSON."
                ),
            },
            {
                "role": "user",
                "content": f"""
Analyze this lead:

Name: {name}
Email: {email}
Company: {company}
Message: {message}

Return exactly this JSON structure:

{{
  "lead_score": 0,
  "priority": "low",
  "summary": "",
  "intent": "",
  "recommended_action": ""
}}

Rules:
- lead_score must be an integer from 0 to 100.
- priority must be low, medium, or high.
- summary must be concise.
- recommended_action must be practical.
""",
            },
        ],
    )

    raw_output = response.output_text.strip()

    try:
        return json.loads(raw_output)
    except json.JSONDecodeError:
        return {
            "lead_score": 0,
            "priority": "low",
            "summary": raw_output,
            "intent": "Unable to parse structured response",
            "recommended_action": "Review lead manually",
        }