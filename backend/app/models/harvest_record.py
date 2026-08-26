from datetime import datetime

from sqlalchemy import DateTime, Float, ForeignKey, Integer, String, func
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class HarvestRecord(Base):
    __tablename__ = "harvest_records"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    harvest_event_id: Mapped[int] = mapped_column(ForeignKey("harvest_events.id"), index=True)
    serial_number: Mapped[str | None] = mapped_column(String(64), nullable=True)
    genotype: Mapped[str] = mapped_column(String(128), index=True)
    location: Mapped[str | None] = mapped_column(String(128), nullable=True)
    harvest: Mapped[str | None] = mapped_column(String(64), nullable=True)
    grade_1_marketable_weight: Mapped[float | None] = mapped_column(Float, nullable=True)
    grade_1_marketable_count: Mapped[int | None] = mapped_column(Integer, nullable=True)
    unmarketable_weight: Mapped[float | None] = mapped_column(Float, nullable=True)
    unmarketable_count: Mapped[int | None] = mapped_column(Integer, nullable=True)
    sample_weight_marketable: Mapped[float | None] = mapped_column(Float, nullable=True)
    sample_weight_unmarketable: Mapped[float | None] = mapped_column(Float, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
