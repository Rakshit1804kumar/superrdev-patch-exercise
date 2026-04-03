const API_BASE = 'http://localhost:8081/api'; // direct backend (no proxy issues)

export async function fetchTasks({ query = '', status = '', page = 1, pageSize = 10 }) {
  const params = new URLSearchParams();

  if (query) params.set('q', query);
  if (status) params.set('status', status);
  params.set('page', page);
  params.set('pageSize', pageSize);

  const url = `${API_BASE}/tasks?${params.toString()}`;
  console.log('[api] fetching:', url);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}