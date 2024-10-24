import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { user } = await req.json();

  // If user already exists?

  // if not, add new user to the database

  return NextResponse.json({ result: user });
}
