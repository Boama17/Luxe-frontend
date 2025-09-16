import { NextResponse } from "next/server"
import crypto from "crypto"

export async function POST(req: Request) {
  const signature = req.headers.get("x-didit-signature") as string
  const payload = await req.text()

  const expected = crypto
    .createHmac("sha256", process.env.WEBHOOK_SECRET as string)
    .update(payload)
    .digest("hex")

  if (signature !== expected) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  const event = JSON.parse(payload)

  if (event.type === "verification.completed") {
    const { reference, status } = event.data
    // reference = userId you passed earlier
    // status = "approved" | "rejected"

    console.log(`User ${reference} verification status: ${status}`)

    // ⚡ Save status in your database here
    // For now, just log it since you don't have backend DB
    // In production, you'd update the user's verification status in the database
  }

  return NextResponse.json({ received: true })
}
    