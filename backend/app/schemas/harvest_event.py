from datetime import date

from pydantic import BaseModel, Field


class HarvestEventCreate(BaseModel):
    harvest_date: date
    harvest_number: int | None = Field(default=None, ge=1)
    notes: str | None = None


class HarvestEventRead(HarvestEventCreate):
    id: int
    field_id: int
