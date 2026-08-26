const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api/v1";

export async function createCropRecord(payload) {
  const response = await fetch(`${API_BASE_URL}/crops/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Failed to create crop record");
  }

  return response.json();
}

export async function fetchCropRecords() {
  const response = await fetch(`${API_BASE_URL}/crops/`);

  if (!response.ok) {
    throw new Error("Failed to fetch crop records");
  }

  return response.json();
}
