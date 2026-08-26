from app.schemas.harvest_record import HarvestRecordCreate, HarvestRecordRead


class CropService:
    def create(self, payload: HarvestRecordCreate, harvest_event_id: int) -> HarvestRecordRead:
        return HarvestRecordRead(id=1, harvest_event_id=harvest_event_id, **payload.model_dump())

    def list(self, harvest_event_id: int | None = None) -> list[HarvestRecordRead]:
        return []
