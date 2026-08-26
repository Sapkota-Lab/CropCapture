from datetime import date

from sqlalchemy import Date, ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class HarvestEvent(Base):
    __tablename__ = "harvest_events"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    field_id: Mapped[int] = mapped_column(ForeignKey("fields.id"), index=True)
    harvest_date: Mapped[date] = mapped_column(Date, index=True)
    harvest_number: Mapped[int | None] = mapped_column(Integer, nullable=True)
    notes: Mapped[str | None] = mapped_column(String(2048), nullable=True)
