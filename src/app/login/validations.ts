import { z } from "zod";

export const getLoginSchema = (t: (key: string) => string) => z.object({
  email: z.email({ message: t('invalidEmail') }),
  password: z.string().min(6, { message: t('passwordMinLength') }),
});
