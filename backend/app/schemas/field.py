from pydantic import BaseModel


class FieldCreate(BaseModel):
    name: str
    location: str | None = None
    description: str | None = None


class FieldRead(FieldCreate):
    id: int
