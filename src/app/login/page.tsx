import * as React from "react";
import {useTranslations} from 'next-intl';
import { Mail, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Link } from "@/components/ui/Link";
import { Heading } from "@/components/ui/Heading";
import { AuthFooter } from "@/components/auth/AuthFooter";

export default function LoginPage() {
  const t = useTranslations('Login');

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
          {/* Login Card */}
          <div className="bg-surface-container-high p-8 rounded-xl shadow-2xl border border-outline-variant/10">
            <p className="font-headline text-2xl font-bold text-on-surface tracking-tight mb-6">
              {t('title')}
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

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <Label htmlFor="password" >{t('passwordLabel')}</Label>
                  <Link href="/forgot-password" variant="energetic">
                    {t('forgotPassword')}
                  </Link>
                </div>
                <Input 
                  id="password"
                  name="password"
                  type="password" 
                  autoComplete="current-password"
                  placeholder={t('passwordPlaceholder')} 
                  icon={<Lock size={20} strokeWidth={1.5} />} 
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="primary" icon={<ArrowRight size={20} strokeWidth={1.5} />}>
                {t('submit')}
              </Button>
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

          <p className="text-center text-on-surface-variant font-medium">
            {t('noAccount')}
            <Link href="/sign-up" variant="primary" className="ml-1">
              {t('signUp')}
            </Link>
          </p>
        </div>
      </main>

      {/* Footer Component */}
      <AuthFooter />
    </div>
  );
}
