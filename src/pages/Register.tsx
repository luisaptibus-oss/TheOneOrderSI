import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ShieldPlus, ArrowLeft, Loader2, Building2 } from "lucide-react";
import { useAuth } from "@/src/lib/auth-context";
import { toast } from "sonner";
import { motion } from "motion/react";
import { Logo } from "@/src/components/Logo";
import { useTranslation } from "react-i18next";

export function Register() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // For demo, just login
      await login(email, password);
      toast.success("Conta institucional criada com sucesso.");
      navigate("/haccp");
    } catch (error) {
      toast.error("Erro ao processar o registo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-15 p-6 lg:p-12 selection:bg-gray-90 selection:text-gray-10 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl"
      >
        <div className="text-center mb-16 flex flex-col items-center">
          <Link to="/" className="inline-flex items-center gap-3 mb-8">
            <Logo size="md" />
          </Link>
          <h2 className="text-4xl font-bold uppercase tracking-tighter text-gray-90 italic mb-4">
            {t('register.title').split(' ').slice(0, -1).join(' ')} <span className="text-gray-50 not-italic">{t('register.title').split(' ').slice(-1)}</span>
          </h2>
          <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em] font-black">{t('register.subtitle')}</p>
        </div>

        <Card className="rounded-none border-gray-30 shadow-none bg-gray-10 p-2">
          <CardHeader className="text-center pb-8 pt-8">
            <CardDescription className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500">{t('register.form.description')}</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="grid md:grid-cols-2 gap-8 pb-12">
              <div className="space-y-6 md:col-span-1">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[9px] uppercase tracking-[0.2em] font-black text-gray-500">{t('register.form.legal_name')}</Label>
                  <Input 
                    id="name" 
                    placeholder={t('register.form.legal_name_placeholder')}
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 rounded-none border-gray-30 bg-gray-15 focus:bg-gray-10 focus:border-gray-90 transition-all font-medium text-xs text-gray-90"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business" className="text-[9px] uppercase tracking-[0.2em] font-black text-gray-500">{t('register.form.business_name')}</Label>
                  <Input 
                    id="business" 
                    placeholder={t('register.form.business_name_placeholder')}
                    required 
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="h-12 rounded-none border-gray-30 bg-gray-15 focus:bg-gray-10 focus:border-gray-90 transition-all font-medium text-xs text-gray-90"
                  />
                </div>
              </div>

              <div className="space-y-6 md:col-span-1">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[9px] uppercase tracking-[0.2em] font-black text-gray-500">{t('register.form.email')}</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="corp@theoneorder.com" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 rounded-none border-gray-30 bg-gray-15 focus:bg-gray-10 focus:border-gray-90 transition-all font-medium text-xs text-gray-90"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-[9px] uppercase tracking-[0.2em] font-black text-gray-500">{t('register.form.password')}</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••"
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 rounded-none border-gray-30 bg-gray-15 focus:bg-gray-10 focus:border-gray-90 transition-all font-medium text-xs text-gray-90"
                  />
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col gap-6 bg-gray-20 p-8 border-t border-gray-30">
               <div className="flex items-start gap-3">
                 <Building2 className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
                 <p className="text-[9px] text-gray-500 leading-relaxed uppercase tracking-wider">
                  {t('register.form.agreement')}
                </p>
               </div>
              <Button type="submit" className="w-full h-12 bg-gray-90 hover:bg-gray-80 text-gray-10 transition-all rounded-none uppercase text-[9px] tracking-[0.3em] font-black" disabled={isLoading}>
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : t('register.form.submit')}
              </Button>
              <div className="text-center">
                <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">
                  {t('register.form.has_account')} <Link to="/login" className="text-gray-90 hover:underline">{t('register.form.login')}</Link>
                </p>
              </div>
            </CardFooter>
          </form>
        </Card>
        
        <Link to="/" className="flex items-center justify-center gap-3 text-gray-400 hover:text-gray-90 transition-all group mt-12">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-black">{t('register.footer.back')}</span>
        </Link>
      </motion.div>
    </div>
  );
}

