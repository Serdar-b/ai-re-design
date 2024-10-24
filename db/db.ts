import { drizzle } from "drizzle-orm/neon-http";
import { validatedEnv } from "../lib/env";

// Use the validated environment variable
export const db = drizzle(validatedEnv.DATABASE_URL);
