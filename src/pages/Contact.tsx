import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/src/components/Logo";
import { CheckCircle2, Mail, MapPin, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

const contactFormSchema = z.object({
  nome_apelido: z.string().min(2, "Nome é obrigatório"),
  telefone_indicativo: z.string().min(9, "Telefone inválido"),
  email: z.string().email("E-mail inválido"),
  localidade: z.string().min(2, "Localidade é obrigatória"),
  codigo_postal: z.string().min(4, "Código postal inválido"),
  pais: z.string().min(2, "País é obrigatório"),
  cargo_empresa: z.string().min(2, "Cargo é obrigatório"),
  denominacao_empresa: z.string().min(2, "Nome da empresa é obrigatório"),
  nif_nipc: z.string().min(9, "NIF/NIPC inválido"),
  mensagem: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function Contact() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setLoading(true);
    console.log("Form data (hidden target: theoneorder.portugal@gmail.com):", data);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-gray-10 min-h-[calc(100vh-80px)] selection:bg-gray-90 selection:text-gray-10">
      <div className="container mx-auto px-6 py-24 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Left Column: Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <Logo size="md" variant="dark" />
              <h1 className="text-6xl md:text-7xl font-bold tracking-tighter uppercase italic text-gray-90">
                {t('contact.title')} <br /> <span className="not-italic text-gray-40">{t('contact.subtitle')}</span>
              </h1>
              <p className="text-xl text-gray-500 font-light leading-relaxed max-w-md">
                {t('contact.description')}
              </p>
            </div>

            <div className="space-y-8 pt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-90 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gray-10" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400 mb-1">{t('contact.info.email')}</h4>
                  <p className="text-lg font-bold text-gray-90 tracking-tight select-all">
                    {(() => {
                      const u = "theoneorder.portugal";
                      const d = "gmail";
                      const t = "com";
                      return `${u}@${d}.${t}`;
                    })()}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-90 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gray-10" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400 mb-1">{t('contact.info.presence')}</h4>
                  <p className="text-lg font-bold text-gray-90 tracking-tight">Portugal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white p-10 md:p-16 border border-gray-100 shadow-2xl shadow-gray-200/50"
                >
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">{t('contact.form.name')}</label>
                        <Input 
                          {...register("nome_apelido")}
                          className="rounded-none border-0 border-b border-gray-200 px-0 h-12 focus-visible:ring-0 focus-visible:border-gray-90 transition-colors text-base"
                          placeholder="Ex: João Silva"
                        />
                        {errors.nome_apelido && <span className="text-[10px] text-red-500 uppercase font-bold">{errors.nome_apelido.message}</span>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">{t('contact.form.phone') || 'Telefone'}</label>
                        <Input 
                          {...register("telefone_indicativo")}
                          className="rounded-none border-0 border-b border-gray-200 px-0 h-12 focus-visible:ring-0 focus-visible:border-gray-90 transition-colors text-base"
                          placeholder="+351 9..."
                        />
                        {errors.telefone_indicativo && <span className="text-[10px] text-red-500 uppercase font-bold">{errors.telefone_indicativo.message}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">{t('contact.form.position')}</label>
                        <Input 
                          {...register("cargo_empresa")}
                          className="rounded-none border-0 border-b border-gray-200 px-0 h-12 focus-visible:ring-0 focus-visible:border-gray-90 transition-colors text-base"
                        />
                        {errors.cargo_empresa && <span className="text-[10px] text-red-500 uppercase font-bold">{errors.cargo_empresa.message}</span>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">{t('contact.form.email')}</label>
                        <Input 
                          {...register("email")}
                          className="rounded-none border-0 border-b border-gray-200 px-0 h-12 focus-visible:ring-0 focus-visible:border-gray-90 transition-colors text-base"
                          placeholder="nome@empresa.com"
                        />
                        {errors.email && <span className="text-[10px] text-red-500 uppercase font-bold">{errors.email.message}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">{t('contact.form.company')}</label>
                        <Input 
                          {...register("denominacao_empresa")}
                          className="rounded-none border-0 border-b border-gray-200 px-0 h-12 focus-visible:ring-0 focus-visible:border-gray-90 transition-colors text-base"
                        />
                        {errors.denominacao_empresa && <span className="text-[10px] text-red-500 uppercase font-bold">{errors.denominacao_empresa.message}</span>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">{t('contact.form.nif')}</label>
                        <Input 
                          {...register("nif_nipc")}
                          className="rounded-none border-0 border-b border-gray-200 px-0 h-12 focus-visible:ring-0 focus-visible:border-gray-90 transition-colors text-base"
                        />
                        {errors.nif_nipc && <span className="text-[10px] text-red-500 uppercase font-bold">{errors.nif_nipc.message}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">{t('contact.form.location')}</label>
                        <Input 
                          {...register("localidade")}
                          className="rounded-none border-0 border-b border-gray-200 px-0 h-12 focus-visible:ring-0 focus-visible:border-gray-90 transition-colors text-base"
                        />
                        {errors.localidade && <span className="text-[10px] text-red-500 uppercase font-bold">{errors.localidade.message}</span>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">{t('contact.form.postal')}</label>
                        <Input 
                          {...register("codigo_postal")}
                          className="rounded-none border-0 border-b border-gray-200 px-0 h-12 focus-visible:ring-0 focus-visible:border-gray-90 transition-colors text-base"
                        />
                        {errors.codigo_postal && <span className="text-[10px] text-red-500 uppercase font-bold">{errors.codigo_postal.message}</span>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">{t('contact.form.country')}</label>
                      <Input 
                        {...register("pais")}
                        className="rounded-none border-0 border-b border-gray-200 px-0 h-12 focus-visible:ring-0 focus-visible:border-gray-90 transition-colors text-base"
                        defaultValue="Portugal"
                      />
                      {errors.pais && <span className="text-[10px] text-red-500 uppercase font-bold">{errors.pais.message}</span>}
                    </div>

                    <Button 
                      disabled={loading}
                      className="w-full h-16 rounded-none bg-gray-90 hover:bg-black text-gray-10 text-xs uppercase tracking-[0.3em] font-black transition-all flex items-center justify-center gap-4 group"
                    >
                      {loading ? (
                        t('contact.form.sending') || "..."
                      ) : (
                        <>
                          {t('contact.form.send')}
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gray-90 p-16 md:p-24 text-center border-none shadow-2xl flex flex-col items-center justify-center min-h-[500px]"
                >
                  <div className="w-24 h-24 bg-gray-10 rounded-full flex items-center justify-center mb-10">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold uppercase tracking-tighter text-gray-10 mb-6 italic">
                    {t('contact.form.success.title')}
                  </h3>
                  <div className="space-y-4 text-gray-400 font-light text-lg">
                    <p>{t('contact.form.success.text1')}</p>
                    <p>{t('contact.form.success.text2')}</p>
                    <p className="pt-4 font-black text-gray-10 text-xl tracking-widest uppercase italic">{t('contact.form.success.thanks')}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-12 rounded-none border-gray-70 text-[10px] uppercase tracking-widest font-black text-gray-10 hover:bg-gray-80"
                  >
                    {t('contact.form.new')}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
