import { db } from "@/db/db";
import { usersTable } from "@/db/schema";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

/*
 * Add user to database if they do not exist
 */
export async function POST(req: Request) {
  const { user } = await req.json();
  try {
    const result = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, user?.primaryEmailAddress.emailAddress));

    if (result.length === 0) {
      // Insert the new user if not found
      const userResult = await db
        .insert(usersTable)
        .values({
          name: user?.fullName,
          email: user?.primaryEmailAddress.emailAddress,
          imageURL: user?.imageUrl,
        })
        .returning({
          id: usersTable.id,
          name: usersTable.name,
          email: usersTable.email,
          imageURL: usersTable.imageURL,
        });

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
