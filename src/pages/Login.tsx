import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ShieldCheck, ArrowLeft, Loader2, KeyRound, Smartphone } from "lucide-react";
import { useAuth } from "@/src/lib/auth-context";
import { toast } from "sonner";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "@/src/components/Logo";
import { useTranslation } from "react-i18next";

export function Login() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [twoFACode, setTwoFACode] = useState("");
  const [step, setStep] = useState(1); // 1: Credentials, 2: 2FA
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleCredentialsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate initial credential check
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
      toast.info(t('login.toast.credentials_ok'));
    }, 1200);
  };

  const handle2FASubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // In a real app, you'd send code to backend
      await login(email, password);
      toast.success(t('login.toast.success'));
      navigate("/dashboard");
    } catch (error) {
      toast.error(t('login.toast.error'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      {/* Left Branding Side */}
      <div className="hidden lg:flex flex-col justify-between p-16 bg-gray-90 text-gray-10 relative overflow-hidden">
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3 mb-24">
            <Logo variant="light" size="md" />
          </Link>
          <div className="space-y-10">
            <h2 className="text-7xl font-bold tracking-tighter leading-[0.85] uppercase italic">
              {t('login.title').split(' ')[0]} <br /> <span className="text-gray-50 not-italic">{t('login.title').split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-sm font-light leading-relaxed">
              {t('login.description')}
            </p>
          </div>
        </div>
        
        <div className="relative z-10 pt-12 mt-auto flex items-center justify-between text-gray-600 text-[10px] uppercase font-black tracking-[0.2em] border-t border-gray-80">
          <div className="flex gap-4">
            <span>{t('login.shield')}</span>
            <span>{t('login.encryption')}</span>
          </div>
          <span>© 2026 THE ONE ORDER</span>
        </div>
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #e5e5e5 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
        />
      </div>

      {/* Right Login Side */}
      <div className="flex items-center justify-center p-8 lg:p-24 bg-gray-15">
        <div className="w-full max-w-sm space-y-8">
          <div className="lg:hidden flex justify-center mb-12">
             <Link to="/" className="flex items-center gap-3">
               <Logo size="sm" />
            </Link>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-10">
                   <h3 className="text-2xl font-bold uppercase tracking-tight text-gray-90 mb-2">{t('login.form.title')}</h3>
                  <p className="text-gray-500 text-sm font-medium uppercase tracking-widest leading-relaxed">{t('login.form.subtitle')}</p>
                </div>

                <form onSubmit={handleCredentialsSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500">{t('login.form.email')}</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="admin@theoneorder.com" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-14 rounded-none border-gray-30 bg-gray-10 focus:border-gray-90 transition-all font-medium text-gray-90"
                    />
                  </div>
                  <div className="space-y-2">
                     <div className="flex items-center justify-between">
                        <Label htmlFor="password" className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500">{t('login.form.password')}</Label>
                        <Link to="#" className="text-[9px] uppercase font-black text-gray-500 hover:text-gray-90">{t('login.form.recover')}</Link>
                      </div>
                    <Input 
                      id="password" 
                      type="password" 
                      required 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-14 rounded-none border-gray-30 bg-gray-10 focus:border-gray-90 transition-all text-gray-90"
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 bg-gray-90 hover:bg-gray-80 text-gray-10 rounded-none uppercase text-[10px] tracking-[0.2em] font-black shadow-none border-none" disabled={isLoading}>
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : t('login.form.submit')}
                  </Button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-10 text-center">
                  <div className="inline-flex p-4 bg-gray-20 rounded-none mb-6">
                    <Smartphone className="w-8 h-8 text-gray-90" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-gray-90 mb-2">{t('login.2fa.title')}</h3>
                  <p className="text-gray-500 text-sm font-medium uppercase tracking-widest max-w-[240px] mx-auto">{t('login.2fa.subtitle')}</p>
                </div>

                <form onSubmit={handle2FASubmit} className="space-y-6">
                  <div className="space-y-4 text-center">
                    <Input 
                      id="2fa" 
                      type="text" 
                      maxLength={6}
                      placeholder="000 000" 
                      required 
                      value={twoFACode}
                      onChange={(e) => setTwoFACode(e.target.value.replace(/[^0-9]/g, ""))}
                      className="h-20 text-center text-gray-90 text-4xl font-black tracking-[0.5em] rounded-none border-gray-30 bg-gray-10 focus:border-gray-90 transition-all placeholder:text-gray-20 placeholder:tracking-normal"
                      autoFocus
                    />
                    <p className="text-[9px] uppercase tracking-widest font-black text-gray-500">{t('login.2fa.footer')}</p>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button type="button" variant="outline" className="flex-1 h-12 rounded-none uppercase text-[10px] tracking-widest font-black border-gray-30 hover:bg-gray-20 text-gray-90" onClick={() => setStep(1)}>
                      {t('login.2fa.back')}
                    </Button>
                    <Button type="submit" className="flex-[2] h-12 bg-gray-90 hover:bg-gray-80 text-gray-10 rounded-none uppercase text-[10px] tracking-[0.2em] font-black shadow-none border-none" disabled={isLoading || twoFACode.length < 6}>
                      {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : t('login.2fa.submit')}
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          <Link to="/" className="flex items-center justify-center gap-3 text-gray-400 hover:text-gray-90 transition-all group pt-12">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-black">{t('login.portal_back')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

