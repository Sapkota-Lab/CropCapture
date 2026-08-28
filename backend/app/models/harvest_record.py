from datetime import date, datetime

from sqlalchemy import Date, DateTime, ForeignKey, Integer, String, func
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class HarvestRecord(Base):
    __tablename__ = "harvest_records"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    harvest_event_id: Mapped[int] = mapped_column(ForeignKey("harvest_events.id"), index=True)
    field_name: Mapped[str] = mapped_column(String(128), index=True)
    year: Mapped[int] = mapped_column(Integer, index=True)
    record_date: Mapped[date] = mapped_column(Date, index=True)
    plot_number: Mapped[str] = mapped_column(String(64), index=True)
    dynamic_data: Mapped[dict] = mapped_column(JSONB, default=dict)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
