import { NextResponse } from 'next/server'

// This is a mock implementation since Firebase Auth doesn't allow listing users from client-side
// In production, you'd use Firebase Admin SDK with proper server-side authentication
export async function GET() {
  try {
    // Mock user data - in production, this would fetch from Firebase Admin SDK
    const mockUsers = [
      {
        id: 1,
        name: "Caleb Asiedu",
        email: "caleb005@gmail.com",
        role: "buyer",
        status: "active",
        joinDate: "2024-01-15",
        properties: 3,
        emailVerified: true,
        lastSignIn: "2024-09-15"
      },
      {
        id: 2,
        name: "Boama David",
        email: "boamadavid7@gmail.com",
        role: "agent",
        status: "active",
        joinDate: "2024-01-10",
        properties: 12,
        emailVerified: true,
        lastSignIn: "2024-09-16"
      },
      {
        id: 3,
        name: "Mike Wilson",
        email: "mike23@yahoo.com",
        role: "buyer",
        status: "inactive",
        joinDate: "2024-01-20",
        properties: 0,
        emailVerified: false,
        lastSignIn: "2024-09-10"
      },
      {
        id: 4,
        name: "Sarah Johnson",
        email: "sarah.j@gmail.com",
        role: "agent",
        status: "active",
        joinDate: "2024-02-01",
        properties: 8,
        emailVerified: true,
        lastSignIn: "2024-09-14"
      },
      {
        id: 5,
        name: "John Smith",
        email: "john.smith@email.com",
        role: "buyer",
        status: "active",
        joinDate: "2024-03-15",
        properties: 1,
        emailVerified: true,
        lastSignIn: "2024-09-13"
      }
    ]

    return NextResponse.json({
      success: true,
      users: mockUsers,
      total: mockUsers.length
    })
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch users'
    }, { status: 500 })
  }
}