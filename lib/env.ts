// lib/env.ts
import { z } from "zod";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Define the schema for your environment variables
const envSchema = z.object({
  DATABASE_URL: z.string().url(),
});

// Validate the environment variables
const env = envSchema.safeParse(process.env);

if (!env.success) {
  console.error("❌ Invalid environment variables:", env.error.format());
  throw new Error("Invalid environment variables. Check your .env file.");
}

// Export the validated environment variables
export const validatedEnv = env.data;
