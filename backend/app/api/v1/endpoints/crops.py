from fastapi import APIRouter

from app.schemas.crop_record import CropRecordCreate, CropRecordRead

router = APIRouter()


@router.post("/", response_model=CropRecordRead)
def create_crop_record(payload: CropRecordCreate) -> CropRecordRead:
    # Service/db wiring goes here when data model is finalized.
    return CropRecordRead(id=1, **payload.model_dump())


@router.get("/", response_model=list[CropRecordRead])
def list_crop_records() -> list[CropRecordRead]:
    return []
