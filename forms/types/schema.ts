import { patterns } from "@/const";
import { z } from "zod";

export const schema = z
  .intersection(
    z.object({
      name: z.string().min(1, { message: "name is Required" }),
      middleName: z.string().trim().optional(),
      email: z
        .string()
        .min(1, { message: "Email is required" })
        .refine((text) => patterns.email.test(text), {
          message: "Email not valid",
        }),
      state: z.string().min(1, { message: "state is required" }),
      languagesSpoken: z.array(z.string()),
      gender: z.string().min(1),
      skills: z.array(z.string()).max(2),
      dataBirth: z.date(),
      isTeacher: z.boolean(),
    }),
    z.discriminatedUnion("variant", [
      z.object({ variant: z.literal("create") }),
      z.object({ variant: z.literal("edit"), id: z.string().min(1) }),
    ])
  )
  .and(
    z.union([
      z.object({ isTeacher: z.literal(false) }),
      z.object({
        isTeacher: z.literal(true),
        students: z.array(
          z.object({
            name: z.string().min(4),
          })
        ),
      }),
    ])
  );

export type Schema = z.infer<typeof schema>;
export const defaultValues: Schema = {
  variant: "create",
  email: "",
  name: "",
  state: "",
  middleName: "",
  languagesSpoken: [],
  gender: "",
  skills: [],
  dataBirth: new Date(),
  isTeacher: false,
};
