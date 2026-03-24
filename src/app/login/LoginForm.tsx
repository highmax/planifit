"use client"

import * as React from "react";
import { useForm } from "@tanstack/react-form-nextjs";
import { useTranslations } from 'next-intl';
import { Mail, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Link } from "@/components/ui/Link";
import { getLoginSchema } from "./validations";

export function LoginForm() {
  const t = useTranslations('Login');
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validators: {
      onChange: getLoginSchema(t)
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <div className="bg-surface-container-high p-8 rounded-xl shadow-2xl border border-outline-variant/10">
      <p className="font-headline text-2xl font-bold text-on-surface tracking-tight mb-6">
        {t('title')}
      </p>    
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

        {/* Password Field */}
        <div className="space-y-2">
          <form.Field name="password">
            {(field) => (
              <>
                <div className="flex justify-between items-end">
                  <Label htmlFor={field.name} >{t('passwordLabel')}</Label>
                  <Link href="/forgot-password" variant="energetic">
                    {t('forgotPassword')}
                  </Link>
                </div>
                <Input 
                  id={field.name}
                  name={field.name}
                  type="password" 
                  autoComplete="current-password"
                  placeholder={t('passwordPlaceholder')} 
                  icon={<Lock size={20} strokeWidth={1.5} />} 
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

      {/* Separator */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-outline-variant/20" />
        </div>
        <div className="relative flex justify-center text-[10px] sm:text-xs uppercase tracking-widest font-label font-bold text-on-surface-variant">
          <span className="bg-surface-container-high px-4">{t('orContinueWith')}</span>
        </div>
      </div>

      {/* Social Login */}
      <Button type="button" variant="outline" icon={
        <img
          alt="Google logo icon"
          className="w-5 h-5"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVCLJKxD-rLFqzfQICWJh1yhPMSATgz4Yp8nvvyN7qN0VjayqiOsj9X156xOmSY54pWqN-QuYyGS-GMVtHSab5x-QVut_hicRNVRkAis5f3ar-zjWhxU1No6QnOeUn5w1CYx8s8X5J_Dt1wrHpz0UCDnCQ6PrtUJ0jNiyS-K72S4pBJUFtSiquhsN44lek6IbMgkBbymcGlnD7wdIm7cSCeUH3ohmIhCfW2aW98ipGwM-zikKC3_I2I4UyxA-P1PJXaUewH7oTHuY"
        />
      }>
        {t('continueWithGoogle')}
      </Button>
    </div>
  );
}
