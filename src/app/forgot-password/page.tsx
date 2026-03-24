import * as React from "react";
import {useTranslations} from "next-intl";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Link } from "@/components/ui/Link";
import { Heading } from "@/components/ui/Heading";
import { AuthFooter } from "@/components/auth/AuthFooter";

export default function ForgotPasswordPage() {
  const t = useTranslations('ForgotPassword');

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col geometric-bg">
      <main className="grow flex items-center justify-center p-6 py-12">
        <div className="w-full max-w-[420px] space-y-8">
          {/* Logo Section */}
          <div className="text-center">
            <Heading level={1} className="text-4xl font-black text-primary tracking-tighter">
              Planifit
            </Heading>
          </div>

          {/* Forgot Password Card */}
          <div className="bg-surface-container-high p-8 rounded-xl shadow-2xl border border-outline-variant/10">
            <p className="font-headline text-2xl font-bold text-on-surface tracking-tight mb-2">
              {t('title')}
            </p>
            <p className="text-on-surface-variant text-sm mb-6">
              {t('description')}
            </p>

            <form className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">{t('emailLabel')}</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email" 
                  autoComplete="email"
                  placeholder={t('emailPlaceholder')} 
                  icon={<Mail size={20} strokeWidth={1.5} />} 
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="primary" icon={<ArrowRight size={20} strokeWidth={1.5} />}>
                {t('submit')}
              </Button>
            </form>
          </div>

          {/* Footer Link */}
          <p className="text-center text-on-surface-variant font-medium">
            {t('rememberedPassword')}
            <Link href="/login" variant="primary" className="ml-1">
              {t('backToLogin')}
            </Link>
          </p>
        </div>
      </main>

      {/* Footer Component */}
      <AuthFooter className="mt-auto" />
    </div>
  );
}
