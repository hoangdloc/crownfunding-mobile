import { z } from "zod";
import { FullNameRegex } from "@/constants";

export const signupSchema = z.object({
  fullName: z
    .string()
    .transform(value => value.trim().replace(/\s+/g, " "))
    .pipe(
      z
        .string()
        .nonempty("validations.full_name_required")
        .max(50, "validations.max50_characters")
        .regex(FullNameRegex, "validations.full_name_invalid")
    ),
  email: z.string().nonempty("validations.email_required").email("validations.email_invalid"),
  password: z
    .string()
    .trim()
    .transform(value => value.replace(/\s+/g, ""))
    .pipe(
      z
        .string()
        .nonempty("validations.password_required")
        .min(8, "validations.password_length_invalid")
        .max(32, "validations.password_length_invalid")
    ),
  termsAndConditions: z.boolean().refine(value => value === true)
});

export type SignupValues = z.infer<typeof signupSchema>;
