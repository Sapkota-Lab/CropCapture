from fastapi import APIRouter

router = APIRouter()


@router.get("/crops.csv")
def export_crops_csv() -> dict[str, str]:
    # Placeholder for CSV streaming response.
    return {"message": "CSV export not implemented yet"}
