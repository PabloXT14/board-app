import "dotenv/config"
import { z } from "zod"

const apiEnvSchema = z.object({
  DATABASE_URL: z.string(),
  BETTER_AUTH_SECRET: z
    .string()
    .min(32, "BETTER_AUTH_SECRET must be at least 32 characters long"),
  BETTER_AUTH_URL: z.url("BETTER_AUTH_URL must be a valid URL"),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
})

export const apiEnv = apiEnvSchema.parse(process.env)
