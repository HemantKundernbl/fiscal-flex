import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

export default defineConfig({
  schema: "./db/schema.ts", // Path to your schema file
  out: "./drizzle", // Output directory
  dialect: "postgresql", // Database driver (PostgreSQL)
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});
