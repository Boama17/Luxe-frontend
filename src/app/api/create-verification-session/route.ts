/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { userId } = await req.json()

    // Validate userId
    if (!userId) {
      return NextResponse.json({
        error: "User ID is required",
        details: "Please ensure you are logged in before attempting verification"
      }, { status: 400 })
    }

    // Validate environment variables
    if (!process.env.API_KEY) {
      console.error("API_KEY environment variable is not set")
      return NextResponse.json({
        error: "Server configuration error",
        details: "API key is missing"
      }, { status: 500 })
    }

    if (!process.env.NEXT_PUBLIC_BASE_URL) {
      console.error("NEXT_PUBLIC_BASE_URL environment variable is not set")
      return NextResponse.json({
        error: "Server configuration error",
        details: "Base URL is missing"
      }, { status: 500 })
    }

    // Use the pre-configured session link from environment variables
    const sessionUrl = process.env.VERIFICATION_SESSION_LINK

    if (!sessionUrl) {
      console.error("VERIFICATION_SESSION_LINK environment variable is not set")
      return NextResponse.json({
        error: "Server configuration error",
        details: "Verification session link is missing"
      }, { status: 500 })
    }

    // Return the session URL for client-side redirect
    return NextResponse.json({
      url: sessionUrl,
      reference: userId
    })
  } catch (err: any) {
    console.error("Error in create-verification-session:", err)
    return NextResponse.json({
      error: "Internal server error",
      details: err.message || "An unexpected error occurred"
    }, { status: 500 })
  }
}
