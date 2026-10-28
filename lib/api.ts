const API_BASE = process.env.NEXT_PUBLIC_ADMIN_API_URL;

export async function getApplications() {
  const res = await fetch(`${API_BASE}/admin/applications`);
  return res.json();
}

export async function getAuditLogs() {
  const res = await fetch(`${API_BASE}/admin/audit/logs`);
  return res.json();
}

export async function getPipeline() {
  const res = await fetch(`${API_BASE}/admin/pipeline`);
  return res.json();
}

export async function getNotifications() {
  const res = await fetch(`${API_BASE}/admin/notifications`);
  return res.json();
}

export async function takeAction(id: string, action: string, notes?: string) {
  const res = await fetch(`${API_BASE}/admin/applications/${id}/action`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action, notes }),
  });
  return res.json();
}
