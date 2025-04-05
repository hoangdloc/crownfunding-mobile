import { z } from "zod";

export const SigninSchema = z.object({
  email: z.string().nonempty("validations.email_required").email("validations.email_invalid"),
  password: z.string().nonempty("validations.password_required")
});

export type SigninValues = z.infer<typeof SigninSchema>;
