const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api/v1";

export async function fetchFields() {
  const response = await fetch(`${API_BASE_URL}/fields/`);

  if (!response.ok) {
    throw new Error("Failed to fetch fields");
  }

  return response.json();
}

export async function createHarvestEvent(fieldId, payload) {
  const response = await fetch(`${API_BASE_URL}/harvests/?field_id=${fieldId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Failed to create harvest event");
  }

  return response.json();
}

export async function createHarvestRecord(harvestEventId, payload) {
  const response = await fetch(`${API_BASE_URL}/harvest-records/?harvest_event_id=${harvestEventId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Failed to create harvest record");
  }

  return response.json();
}

export async function fetchHarvestRecords(harvestEventId) {
  const query = harvestEventId ? `?harvest_event_id=${harvestEventId}` : "";
  const response = await fetch(`${API_BASE_URL}/harvest-records/${query}`);

  if (!response.ok) {
    throw new Error("Failed to fetch harvest records");
  }

  return response.json();
}
