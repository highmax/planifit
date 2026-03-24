"use client"

import * as React from "react";
import { useForm } from "@tanstack/react-form-nextjs";
import { useTranslations } from 'next-intl';
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { getForgotPasswordSchema } from "./validations";

export function ForgotPasswordForm() {
  const t = useTranslations('ForgotPassword');
  const form = useForm({
    defaultValues: {
      email: '',
    },
    validators: {
      onChange: getForgotPasswordSchema(t)
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <form className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
    >
      {/* Email Field */}
      <div className="space-y-2">
        <form.Field name="email">
          {(field) => (
            <>
              <Label htmlFor={field.name}>{t('emailLabel')}</Label>
              <Input 
                id={field.name}
                name={field.name}
                type="email" 
                autoComplete="email"
                placeholder={t('emailPlaceholder')} 
                icon={<Mail size={20} strokeWidth={1.5} />} 
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
              />
              {field.state.meta.errors.length > 0 && (
                <p className="text-sm font-medium text-red-500 mt-1">
                  {field.state.meta.errors.map((err) => (err as { message?: string })?.message || String(err)).join(', ')}
                </p>
              )}
            </>
          )}
        </form.Field>
      </div>

      {/* Submit Button */}
      <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) => (
          <Button 
            type="submit" 
            variant="primary" 
            disabled={!canSubmit || isSubmitting}
            icon={isSubmitting ? undefined : <ArrowRight size={20} strokeWidth={1.5} />}
          >
            {isSubmitting ? '...' : t('submit')}
          </Button>
        )}
      </form.Subscribe>
    </form>
  );
}
