import { serial, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  imageURL: varchar("imageUrl").notNull(),
  credits: integer("credits").default(3),
});
