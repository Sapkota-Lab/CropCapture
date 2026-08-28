from datetime import datetime
from datetime import date
from typing import Any

from pydantic import BaseModel, Field


class HarvestRecordCreate(BaseModel):
    field_name: str = Field(min_length=1, max_length=128)
    year: int = Field(ge=1)
    record_date: date
    plot_number: str = Field(min_length=1, max_length=64)
    dynamic_data: dict[str, Any] = Field(default_factory=dict)


class HarvestRecordRead(HarvestRecordCreate):
    id: int
    harvest_event_id: int
    created_at: datetime | None = None
