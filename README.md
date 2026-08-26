# CropCapture

CropCapture is a modular CRUD platform for agricultural field data collection and in-office querying.

## Proposed Project Structure

```text
CropCapture/
	backend/
		app/
			api/v1/endpoints/
			core/
			db/
			models/
			schemas/
			services/
			main.py
		tests/
		requirements.txt
		.env.example
	frontend/
		src/
			components/
			pages/
			services/
			App.jsx
			main.jsx
		package.json
		.env.example
	infra/
		docker-compose.yml
	docs/
		architecture.md
		decisions.md
		open-questions.md
```

## What Each Folder Does

### Top-level

- `backend/`: FastAPI application code, API contracts, business logic, and tests.
- `frontend/`: React user interface for field entry and in-office querying.

### Backend (`backend/app`)

- `api/`: HTTP layer. Defines routes and request/response wiring.
- `api/v1/endpoints/`: Versioned endpoint modules (health, auth, crops, exports).
- `core/`: Cross-cutting app concerns like config and security helpers.
- `db/`: SQLAlchemy base and database session lifecycle.
- `models/`: ORM table/entity definitions for persistence.
- `schemas/`: Pydantic request/response models for validation and serialization.
- `services/`: Business logic layer called by endpoints.
- `main.py`: FastAPI app factory and router registration.

### Other Backend Files

- `backend/tests/`: Backend test suite.
- `backend/requirements.txt`: Python dependency list.
- `backend/.env.example`: Example backend environment variables.

### Frontend (`frontend/src`)

- `components/`: Reusable UI pieces used across pages.
- `pages/`: Screen-level route/view composition.
- `services/`: API client functions and data fetching logic.
- `App.jsx`: App shell and high-level view orchestration.
- `main.jsx`: Frontend entry point and React bootstrap.

## Current Skeleton Endpoints

- `GET /api/v1/health`
- `POST /api/v1/auth/login` (placeholder)
- `POST /api/v1/crops/` (stub)
- `GET /api/v1/crops/` (stub)
- `GET /api/v1/exports/crops.csv` (placeholder)

## Architecture Notes

- Keep route handlers thin. Move business logic into `backend/app/services`.
- Keep persistence concerns in models/session and avoid DB calls in frontend.
- API versioning starts at `v1` for compatibility as requirements evolve.

## Next Implementation Steps

1. Finalize auth approach (OAuth vs local JWT user system).
2. Confirm ORM and migration workflow (SQLAlchemy + Alembic recommended).
3. Implement repository and service logic for real crop CRUD.
4. Add filtering/sorting/pagination for query workflows.
5. Implement CSV export with streaming response.
6. Add offline/low-connectivity strategy if required for field usage.
