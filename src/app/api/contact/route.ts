import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      organisation,
      email,
      service,
      message,
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(String(name));

    const safeOrganisation = organisation
      ? escapeHtml(String(organisation))
      : "Not provided";

    const safeEmail = escapeHtml(String(email));

    const safeService = service
      ? escapeHtml(String(service))
      : "Not selected";

    const safeMessage = escapeHtml(String(message))
      .replaceAll("\n", "<br />");

    const { data, error } = await resend.emails.send({
      from: "Kawari Company <alex@kawaricompany.com>",
      to: "alex@kawaricompany.com",
      replyTo: email,
      subject: `New Kawari enquiry from ${safeName}`,
      html: `
        <h2>New website enquiry</h2>

        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Organisation:</strong> ${safeOrganisation}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Service:</strong> ${safeService}</p>

        <hr />

        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to send enquiry." },
        { status: 500 }
      );
    }

    console.log("Resend email sent:", data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Kawari contact form error:", error);

    return NextResponse.json(
      { error: "Unable to send enquiry." },
      { status: 500 }
    );
  }
}