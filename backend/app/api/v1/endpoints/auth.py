from fastapi import APIRouter

router = APIRouter()


@router.post("/login")
def login() -> dict[str, str]:
    # Placeholder for token-based auth flow.
    return {"message": "Auth flow not implemented yet"}
