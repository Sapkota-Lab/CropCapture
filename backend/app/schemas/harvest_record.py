from datetime import datetime

from pydantic import BaseModel, Field


class HarvestRecordCreate(BaseModel):
    serial_number: str | None = None
    genotype: str
    location: str | None = None
    harvest: str | None = None
    grade_1_marketable_weight: float | None = Field(default=None, ge=0)
    grade_1_marketable_count: int | None = Field(default=None, ge=0)
    unmarketable_weight: float | None = Field(default=None, ge=0)
    unmarketable_count: int | None = Field(default=None, ge=0)
    sample_weight_marketable: float | None = Field(default=None, ge=0)
    sample_weight_unmarketable: float | None = Field(default=None, ge=0)


class HarvestRecordRead(HarvestRecordCreate):
    id: int
    harvest_event_id: int
    created_at: datetime | None = None
