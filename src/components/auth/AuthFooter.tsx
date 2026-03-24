import * as React from "react";
import { Link } from "@/components/ui/Link";
import {useTranslations} from "next-intl";

export function AuthFooter({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const t = useTranslations('AuthFooter');
  return (
    <footer 
      className={`flex flex-col items-center justify-center gap-4 w-full py-8 opacity-80 ${className || ''}`}
      {...props}
    >
      <div className="flex gap-6">
        <Link href="#" className="font-['Inter'] text-[10px] sm:text-xs uppercase tracking-widest text-slate-500">
          {t('privacyPolicy')}
        </Link>
        <Link href="#" className="font-['Inter'] text-[10px] sm:text-xs uppercase tracking-widest text-slate-500">
          {t('termsOfService')}
        </Link>
        <Link href="#" className="font-['Inter'] text-[10px] sm:text-xs uppercase tracking-widest text-slate-500">
          {t('support')}
        </Link>
      </div>
      <p className="font-['Inter'] text-[10px] sm:text-xs uppercase tracking-widest text-slate-500">
        {t('rights', { year: new Date().getFullYear() })}
      </p>
    </footer>
  );
}
