import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const MockInterview = pgTable("MockInterview", {
  id: serial("id").primaryKey(),
  jobPosition: varchar("jobPosition").notNull(),
  jobDesc: varchar("jobDesc").notNull(),
  jobExperience: varchar("jobExperience").notNull(),
  createdBy: varchar("createdBy").notNull(),
  createdAt: varchar("createdAt").notNull(),
  mockId: varchar("mockId").notNull(),
});
