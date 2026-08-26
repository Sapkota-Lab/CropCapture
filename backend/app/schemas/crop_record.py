from datetime import date, datetime

from pydantic import BaseModel


class CropRecordBase(BaseModel):
    crop_type: str
    variety: str
    plot_id: str
    observation_date: date
    height_cm: float | None = None
    notes: str | None = None


class CropRecordCreate(CropRecordBase):
    pass


class CropRecordRead(CropRecordBase):
    id: int
    created_at: datetime | None = None
