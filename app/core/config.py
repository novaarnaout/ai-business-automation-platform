from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    # Application
    app_name: str = "AI Business Automation Platform"
    app_version: str = "1.0.0"
    environment: str = "development"

    # Database
    database_url: str
    redis_url: str = "redis://localhost:6379/0"

    # AI
    openai_api_key: str

    # Security
    jwt_secret_key: str
    jwt_algorithm: str = "HS256"
    access_token_expire_minutes: int = 60

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )


settings = Settings()