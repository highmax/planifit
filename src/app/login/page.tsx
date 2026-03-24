"use client"

import * as React from "react";
import {useTranslations} from 'next-intl';
import { Link } from "@/components/ui/Link";
import { Heading } from "@/components/ui/Heading";
import { AuthFooter } from "@/components/auth/AuthFooter";
import { LoginForm } from "./LoginForm";

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
          <LoginForm />

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
