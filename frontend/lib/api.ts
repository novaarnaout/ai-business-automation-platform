const API_URL = "http://localhost:8000";

export async function apiRequest(
  endpoint: string,
  options: RequestInit = {},
) {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("access_token")
      : null;

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {}),
      ...(options.headers || {}),
    },
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(
      data?.detail || `Request failed with status ${response.status}`,
    );
  }

  return data;
}

export async function login(email: string, password: string) {
  const data = await apiRequest("/api/v1/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });

  localStorage.setItem("access_token", data.access_token);

  return data;
}

export async function register(email: string, password: string) {
  const data = await apiRequest("/api/v1/auth/register", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });

  localStorage.setItem("access_token", data.access_token);

  return data;
}

export async function getLeads() {
  return apiRequest("/api/v1/leads");
}

export async function getAutomations() {
  return apiRequest("/api/v1/automations");
}