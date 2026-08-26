from fastapi import APIRouter

router = APIRouter()


@router.get("/harvest-records.csv")
def export_harvest_records_csv() -> dict[str, str]:
    # Placeholder for CSV streaming response.
    return {"message": "CSV export not implemented yet"}
