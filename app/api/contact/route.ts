import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, company, email, phone, product, volume, port, message } = body

    const emailBody = `
New Quote Request from nutriporti.com

Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone || "Not provided"}
Product: ${product}
Volume: ${volume}
Destination Port: ${port}
Additional Requirements: ${message || "None"}
    `.trim()

    const response = await fetch("https://api.zeptomail.com/v1.1/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.ZEPTOMAIL_API_KEY!,
      },
      body: JSON.stringify({
        from: { address: "info@nutriporti.com", name: "Nutriporti Website" },
        to: [{ email_address: { address: "info@nutriporti.com", name: "Nutriporti" } }],
        reply_to: [{ address: email, name: name }],
        subject: `New Quote Request from ${name} - ${company}`,
        textbody: emailBody,
        htmlbody: `
          <h2>New Quote Request from nutriporti.com</h2>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Company</td><td style="padding:8px;border:1px solid #ddd">${company}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${phone || "Not provided"}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Product</td><td style="padding:8px;border:1px solid #ddd">${product}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Volume</td><td style="padding:8px;border:1px solid #ddd">${volume}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Destination Port</td><td style="padding:8px;border:1px solid #ddd">${port}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Additional Requirements</td><td style="padding:8px;border:1px solid #ddd">${message || "None"}</td></tr>
          </table>
        `,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error("ZeptoMail error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
