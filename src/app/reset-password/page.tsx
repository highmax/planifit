import * as React from "react";
import {useTranslations} from "next-intl";
import { Lock, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Link } from "@/components/ui/Link";
import { Heading } from "@/components/ui/Heading";
import { AuthFooter } from "@/components/auth/AuthFooter";

export default function ResetPasswordPage() {
  const t = useTranslations('ResetPassword');

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col geometric-bg">
      <main className="flex-grow flex items-center justify-center p-6 py-12">
        <div className="w-full max-w-[420px] space-y-8">
          {/* Logo Section */}
          <div className="text-center">
            <Heading level={1} className="text-4xl font-black text-primary tracking-tighter">
              Planifit
            </Heading>
          </div>
          {/* Main Card */}
          <div className="bg-surface-container-high p-8 rounded-xl shadow-2xl border border-outline-variant/10">
            <p className="font-headline text-2xl font-bold text-on-surface tracking-tight mb-2">
              {t('title')}
            </p>
            <p className="text-on-surface-variant text-sm mb-6">
              {t('description')}
            </p>

            <form className="space-y-6">
              {/* New Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-xs uppercase tracking-wider font-bold text-on-surface-variant">
                  {t('newPasswordLabel')}
                </Label>
                <Input 
                  id="password"
                  name="password"
                  type="password" 
                  autoComplete="new-password"
                  placeholder={t('newPasswordPlaceholder')} 
                  icon={<Lock size={20} strokeWidth={1.5} />} 
                />
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="text-xs uppercase tracking-wider font-bold text-on-surface-variant">
                  {t('confirmPasswordLabel')}
                </Label>
                <Input 
                  id="confirm-password"
                  name="confirm-password"
                  type="password" 
                  autoComplete="new-password"
                  placeholder={t('confirmPasswordPlaceholder')} 
                  icon={<Lock size={20} strokeWidth={1.5} />} 
                />
              </div>

              {/* Password Requirements */}
              <div className="flex flex-wrap gap-2 pt-1 pb-4">
                <span className="flex items-center gap-2 bg-surface-container-low text-on-surface-variant text-xs font-medium px-4 py-2 rounded-full border border-outline-variant/20 shadow-sm">
                  <CheckCircle2 size={16} className="text-primary fill-primary/20" /> 
                  {t('requirement1')}
                </span>
                <span className="flex items-center gap-2 bg-surface-container-low text-on-surface-variant text-xs font-medium px-4 py-2 rounded-full border border-outline-variant/20 shadow-sm">
                  <span className="w-4 h-4 rounded-full bg-outline-variant/30 flex items-center justify-center">
                  </span>
                  {t('requirement2')}
                </span>
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="primary" icon={<ArrowRight size={20} className="text-on-primary" strokeWidth={1.5} />}>
                {t('submit')}
              </Button>
            </form>
          </div>

          {/* Footer Link */}
          <div className="flex justify-center text-on-surface-variant">
            <Link href="/login" className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors font-medium">
              <ArrowLeft size={18} strokeWidth={1.5} />
              {t('backToLogin')}
            </Link>
          </div>
        </div>
      </main>

      {/* Footer Component */}
      <AuthFooter className="mt-auto" />
    </div>
  );
}
