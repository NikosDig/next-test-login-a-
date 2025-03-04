import { NextRequest, NextResponse } from "next/server";

// In-memory store (temporary for this experiment)
let users: { email: string; password: string }[] = [];

export async function GET() {
    return NextResponse.json({ users });
  }

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log("Request body:", body);
    const { email, password } = body;
  
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password required" },
        { status: 400 }
      );
    }
  
    users.push({ email, password });
    console.log("Stored users:", users);
    return NextResponse.json({ message: "Credentials saved successfully" });
  }