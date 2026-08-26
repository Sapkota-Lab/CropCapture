from app.schemas.crop_record import CropRecordCreate, CropRecordRead


class CropService:
    def create(self, payload: CropRecordCreate) -> CropRecordRead:
        # Replace with repository/db-backed create.
        return CropRecordRead(id=1, **payload.model_dump())

    def list(self) -> list[CropRecordRead]:
        # Replace with repository/db-backed read.
        return []
