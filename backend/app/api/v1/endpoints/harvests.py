from fastapi import APIRouter

from app.schemas.harvest_event import HarvestEventCreate, HarvestEventRead

router = APIRouter()


@router.post("/", response_model=HarvestEventRead)
def create_harvest(payload: HarvestEventCreate, field_id: int) -> HarvestEventRead:
    return HarvestEventRead(id=1, field_id=field_id, **payload.model_dump())


@router.get("/", response_model=list[HarvestEventRead])
def list_harvests(field_id: int | None = None) -> list[HarvestEventRead]:
    return []
