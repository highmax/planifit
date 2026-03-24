import { z } from "zod";

export const getSignUpSchema = (t: (key: string) => string) => z.object({
  name: z.string().min(2, { message: t('nameMinLength') }),
  email: z.email({ message: t('invalidEmail') }),
  password: z.string().min(8, { message: t('passwordMinLength') }),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: t('passwordsDoNotMatch'),
  path: ["confirmPassword"], // path of error
});
