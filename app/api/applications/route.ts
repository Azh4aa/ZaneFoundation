type Submission = {
  kind?: unknown;
  locale?: unknown;
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  city?: unknown;
  area?: unknown;
  availability?: unknown;
  website?: unknown;
  message?: unknown;
  consent?: unknown;
  company_website?: unknown;
};

const clean = (value: unknown, limit: number) => typeof value === "string" ? value.trim().slice(0, limit) : "";
const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character] || character));

export async function POST(request: Request) {
  if (request.headers.get("sec-fetch-site") && request.headers.get("sec-fetch-site") !== "same-origin") {
    return Response.json({ message: "Cross-site submissions are not accepted." }, { status: 403 });
  }

  let body: Submission;
  try {
    body = await request.json() as Submission;
  } catch {
    return Response.json({ message: "Invalid submission." }, { status: 400 });
  }

  if (clean(body.company_website, 200)) return Response.json({ ok: true });

  const kind = clean(body.kind, 20);
  const name = clean(body.name, 120);
  const email = clean(body.email, 180).toLowerCase();
  const phone = clean(body.phone, 40);
  const city = clean(body.city, 100);
  const area = clean(body.area, 80);
  const availability = clean(body.availability, 80);
  const website = clean(body.website, 300);
  const note = clean(body.message, 1600);
  const locale = clean(body.locale, 5);

  if (!(["volunteer", "career"] as const).includes(kind as "volunteer" | "career") || !name || !city || !area || note.length < 40 || body.consent !== true || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ message: "Please complete all required fields." }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.FORMS_TO_EMAIL;
  const from = process.env.FORMS_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return Response.json({ message: "The form delivery service is not configured yet." }, { status: 503 });
  }

  const rows = [
    ["Type", kind], ["Name", name], ["Email", email], ["Phone", phone || "—"], ["City / region", city], ["Area", area],
    ["Availability", availability || "—"], ["LinkedIn / portfolio", website || "—"], ["Language", locale || "—"], ["Message", note],
  ];
  const html = `<div style="font-family:Arial,sans-serif;max-width:680px;color:#0D1B3D"><div style="border-top:6px solid #D4A72C;background:#0D1B3D;color:#F6F3E7;padding:28px"><p style="margin:0 0 8px;color:#D4A72C;font-size:12px;letter-spacing:2px">ZANE FOUNDATION</p><h1 style="font-size:24px;margin:0">New ${escapeHtml(kind)} expression of interest</h1></div><div style="padding:4px 28px 28px;background:#F6F3E7">${rows.map(([label, value]) => `<p style="border-top:1px solid #C9D1DA;padding:12px 0;margin:0"><strong>${escapeHtml(label)}</strong><br>${escapeHtml(value).replace(/\n/g, "<br>")}</p>`).join("")}</div></div>`;
  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { authorization: `Bearer ${apiKey}`, "content-type": "application/json", "idempotency-key": crypto.randomUUID() },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject: `Zane ${kind} interest — ${name}`, html, text }),
    });
    if (!response.ok) throw new Error("Email delivery failed");
    return Response.json({ ok: true });
  } catch {
    return Response.json({ message: "Submission delivery failed." }, { status: 502 });
  }
}
