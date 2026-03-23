import * as React from "react";
import { Link } from "@/components/ui/Link";

export function AuthFooter({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer 
      className={`flex flex-col items-center justify-center gap-4 w-full py-8 opacity-80 ${className || ''}`}
      {...props}
    >
      <div className="flex gap-6">
        <Link href="#" className="font-['Inter'] text-[10px] sm:text-xs uppercase tracking-widest text-slate-500">
          Privacy Policy
        </Link>
        <Link href="#" className="font-['Inter'] text-[10px] sm:text-xs uppercase tracking-widest text-slate-500">
          Terms of Service
        </Link>
        <Link href="#" className="font-['Inter'] text-[10px] sm:text-xs uppercase tracking-widest text-slate-500">
          Support
        </Link>
      </div>
      <p className="font-['Inter'] text-[10px] sm:text-xs uppercase tracking-widest text-slate-500">
        © {new Date().getFullYear()} Planifit.
      </p>
    </footer>
  );
}
