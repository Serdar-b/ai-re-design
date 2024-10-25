import { db } from "@/db/db";
import { usersTable } from "@/db/schema";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const { user } = await req.json();
  try {
    // Check if the user already exists
    const result = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, user?.primaryEmailAddress.emailAddresses));

    if (result.length === 0) {
      // Insert the new user if not found
      const userResult = await db
        .insert(usersTable)
        .values({
          name: user?.fullName,
          email: user?.primaryEmailAddress.emailAddresses,
          imageURL: user?.imageUrl,
        })
        .returning();

      return NextResponse.json({ result: userResult });
    } else {
      // Handle case when the user already exists
      return NextResponse.json({ message: "User already exists" });
    }
  } catch (error) {
    // Error handling
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
