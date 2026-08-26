from fastapi import APIRouter

from app.schemas.field import FieldCreate, FieldRead

router = APIRouter()


@router.post("/", response_model=FieldRead)
def create_field(payload: FieldCreate) -> FieldRead:
    return FieldRead(id=1, **payload.model_dump())


@router.get("/", response_model=list[FieldRead])
def list_fields() -> list[FieldRead]:
    return [FieldRead(id=1, name="Lexington", location=None, description=None)]
