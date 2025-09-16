import { NextResponse } from 'next/server'

// This endpoint helps create a demo admin account
// In production, you'd use Firebase Admin SDK to create users server-side
export async function POST() {
  try {
    // This is just for demonstration - in a real app, you'd use Firebase Admin SDK
    const demoCredentials = {
      email: 'admin@luxerealty.com',
      password: 'admin123',
      message: 'Demo admin account credentials',
      note: 'Create this account manually in Firebase Console for testing'
    }

    return NextResponse.json({
      success: true,
      message: 'Demo admin credentials provided',
      credentials: demoCredentials,
      instructions: [
        '1. Go to Firebase Console',
        '2. Navigate to Authentication > Users',
        '3. Click "Add User"',
        '4. Enter the demo credentials above',
        '5. Try signing in again'
      ]
    })
  } catch (error) {
    console.error('Error creating demo admin:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to create demo admin'
    }, { status: 500 })
  }
}