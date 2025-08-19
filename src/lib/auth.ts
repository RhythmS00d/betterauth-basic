import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: new Pool({
    connectionString: `postgres://${process.env.DATABASE_NAME}:${process.env.DATABASE_PASSWORD}@localhost:5432/postgres`,
  }),
});
