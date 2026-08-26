from fastapi import APIRouter

from app.schemas.harvest_record import HarvestRecordCreate, HarvestRecordRead

router = APIRouter()


@router.post("/", response_model=HarvestRecordRead)
def create_harvest_record(payload: HarvestRecordCreate, harvest_event_id: int) -> HarvestRecordRead:
    return HarvestRecordRead(id=1, harvest_event_id=harvest_event_id, **payload.model_dump())


@router.get("/", response_model=list[HarvestRecordRead])
def list_harvest_records(harvest_event_id: int | None = None) -> list[HarvestRecordRead]:
    return []
