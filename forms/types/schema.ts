import { patterns } from "@/const";
import { z } from "zod";

export const schema = z.object({
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
  dataOfbirth: z.date(),
});

export type Schema = z.infer<typeof schema>;
export const defaultValues: Schema = {
  // variant: "create",
  email: "",
  name: "",
  state: "",
  middleName: "",
  languagesSpoken: [],
  gender: "",
  skills: [],
  dataOfbirth: new Date(),
  // formerEmploymentPeriod: [new Date(), new Date()],
  // salaryRange: [0, 2000],
  // isTeacher: false,
};
