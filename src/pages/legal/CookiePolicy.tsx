import React from "react";
import { motion } from "motion/react";
import { Cookie, ShieldAlert, BarChart, Settings } from "lucide-react";

export function CookiePolicy() {
  return (
    <div className="bg-gray-10 min-h-screen py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <header className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400">Transparência Técnica</h4>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase italic text-gray-90">
              Política de <br /> <span className="not-italic text-gray-40">Cookies.</span>
            </h1>
          </header>

          <div className="prose prose-gray max-w-none space-y-10 text-gray-600 font-light leading-relaxed">
            <p>
              Este site utiliza cookies para melhorar a sua experiência de navegação e garantir a segurança do sistema. Esta política detalha como utilizamos estas ferramentas em conformidade com as diretivas europeias e a legislação espanhola de serviços de sociedade da informação.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
              <div className="border border-gray-200 p-8 space-y-4 shadow-sm bg-white">
                <ShieldAlert className="w-8 h-8 text-gray-90" />
                <h3 className="font-bold uppercase tracking-widest text-sm text-gray-90">Necessários</h3>
                <p className="text-xs">Fundamentais para o funcionamento do site, como autenticação de sessões e segurança.</p>
              </div>
              <div className="border border-gray-200 p-8 space-y-4 shadow-sm bg-white">
                <BarChart className="w-8 h-8 text-gray-90" />
                <h3 className="font-bold uppercase tracking-widest text-sm text-gray-90">Analíticos</h3>
                <p className="text-xs">Ajudam-nos a compreender como os utilizadores interagem com o site, de forma anónima.</p>
              </div>
            </div>

            <section className="space-y-4">
              <h2 className="text-gray-90 font-bold uppercase tracking-widest text-lg flex items-center gap-3">
                <Settings className="w-5 h-5 text-gray-40" /> Gestão de Consentimento
              </h2>
              <p>
                Poderá alterar as suas preferências de cookies a qualquer momento através das definições do seu navegador ou limpando a sua "cache" local. Para utilizadores em Espanha, seguimos rigorosamente as orientações da AEPD relativas a painéis de configuração de fácil acesso.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
