import { patterns } from "@/const";
import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, { message: "name is Required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .refine((text) => patterns.email.test(text), {
      message: "Email not valid",
    }),
  state: z.array(z.string()).min(1).max(2),
});

export type Schema = z.infer<typeof schema>;
