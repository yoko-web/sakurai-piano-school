export const CONTACT_SUBJECT = "お問い合わせ（櫻井ピアノスクール）";

export function buildMailtoUrl(
  to: string,
  subject: string,
  body?: string
): string {
  const params = [`subject=${encodeURIComponent(subject)}`];
  if (body) {
    params.push(`body=${encodeURIComponent(body)}`);
  }

  return `mailto:${to}?${params.join("&")}`;
}
