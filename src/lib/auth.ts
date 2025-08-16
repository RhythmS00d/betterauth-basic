import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: new Pool({
    connectionString: "postgres://postgres:jojo00@localhost:5432/postgres",
  }),
});
