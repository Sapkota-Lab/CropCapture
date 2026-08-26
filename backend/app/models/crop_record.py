from datetime import date, datetime

from sqlalchemy import Date, DateTime, Float, String, func
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class CropRecord(Base):
    __tablename__ = "crop_records"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    crop_type: Mapped[str] = mapped_column(String(64), index=True)
    variety: Mapped[str] = mapped_column(String(128))
    plot_id: Mapped[str] = mapped_column(String(64), index=True)
    observation_date: Mapped[date] = mapped_column(Date)
    height_cm: Mapped[float | None] = mapped_column(Float, nullable=True)
    notes: Mapped[str | None] = mapped_column(String(2048), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
