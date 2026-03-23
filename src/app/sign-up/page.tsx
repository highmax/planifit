import * as React from "react";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Link } from "@/components/ui/Link";
import { Heading } from "@/components/ui/Heading";
import { AuthFooter } from "@/components/auth/AuthFooter";

export default function SignUpPage() {
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

          {/* Sign Up Card */}
          <div className="bg-surface-container-high p-8 rounded-xl shadow-2xl border border-outline-variant/10">
            <p className="font-headline text-2xl font-bold text-on-surface tracking-tight mb-6">
              Crea tu cuenta
            </p>
            <form className="space-y-6">
              {/* Full Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input 
                  id="name"
                  name="name"
                  type="text" 
                  autoComplete="name"
                  placeholder="Tu nombre" 
                  icon={<User size={20} strokeWidth={1.5} />} 
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email" 
                  autoComplete="email"
                  placeholder="tu@email.com" 
                  icon={<Mail size={20} strokeWidth={1.5} />} 
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input 
                  id="password"
                  name="password"
                  type="password" 
                  autoComplete="new-password"
                  placeholder="••••••••" 
                  icon={<Lock size={20} strokeWidth={1.5} />} 
                />
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar contraseña</Label>
                <Input 
                  id="confirm-password"
                  name="confirm-password"
                  type="password" 
                  autoComplete="new-password"
                  placeholder="••••••••" 
                  icon={<Lock size={20} strokeWidth={1.5} />} 
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="primary" icon={<ArrowRight size={20} strokeWidth={1.5} />}>
                Crear cuenta
              </Button>
            </form>

            {/* Separator */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-outline-variant/20" />
              </div>
              <div className="relative flex justify-center text-[10px] sm:text-xs uppercase tracking-widest font-label font-bold text-on-surface-variant">
                <span className="bg-surface-container-high px-4">o continúa con</span>
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
              Continuar con Google
            </Button>
          </div>

          {/* Footer Link */}
          <p className="text-center text-on-surface-variant font-medium">
            ¿Ya tienes cuenta?
            <Link href="/login" variant="primary" className="ml-1">
              Inicia sesión
            </Link>
          </p>
        </div>
      </main>

      {/* Footer Component */}
      <AuthFooter className="mt-auto" />
    </div>
  );
}
