import React from "react";
import { motion } from "motion/react";
import { Shield, Lock, Eye, Scale } from "lucide-react";

export function PrivacyPolicy() {
  return (
    <div className="bg-gray-10 min-h-screen py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <header className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400">Jurídico & Compliance</h4>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase italic text-gray-90">
              Política de <br /> <span className="not-italic text-gray-40">Privacidade.</span>
            </h1>
            <p className="text-gray-500 font-mono text-xs uppercase">Última atualização: Maio 2026</p>
          </header>

          <div className="prose prose-gray max-w-none space-y-10 text-gray-600 font-light leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-gray-90 font-bold uppercase tracking-widest text-lg flex items-center gap-3">
                <Shield className="w-5 h-5 text-gray-40" /> 1. Compromisso Global de Proteção
              </h2>
              <p>
                A <strong>THE ONE ORDER</strong> assume um compromisso rigoroso com a proteção de dados pessoais, em estrita observância do Regulamento (UE) 2016/679 (RGPD), da Lei n.º 58/2019 (Portugal) e da Ley Orgánica 3/2018 (LOPDGDD, Espanha). Garantimos que os seus dados são tratados com justiça, transparência e segurança absoluta.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-gray-90 font-bold uppercase tracking-widest text-lg flex items-center gap-3">
                <Lock className="w-5 h-5 text-gray-40" /> 2. Responsável pelo Tratamento
              </h2>
              <p>
                O responsável pelo tratamento dos seus dados é a THE ONE ORDER. Para qualquer questão relacionada com o exercício dos seus direitos, pode contactar-nos através do e-mail: <strong>theoneorder.portugal@gmail.com</strong>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-gray-90 font-bold uppercase tracking-widest text-lg flex items-center gap-3">
                <Eye className="w-5 h-5 text-gray-40" /> 3. Finalidades e Base Legal
              </h2>
              <p>
                Tratamos os seus dados para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gestão de contactos e pedidos de informação (Base: Interesse Legítimo / Consentimento).</li>
                <li>Execução de contratos de consultoria e serviços digitais (Base: Execução Contratual).</li>
                <li>Cumprimento de obrigações legais (contabilísticas, fiscais e regulamentares de segurança alimentar).</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-gray-90 font-bold uppercase tracking-widest text-lg flex items-center gap-3">
                <Scale className="w-5 h-5 text-gray-40" /> 4. Direitos dos Titulares
              </h2>
              <p>
                Nos termos do RGPD, assiste-lhe o direito de:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-medium text-gray-800 uppercase text-[11px] tracking-widest">
                <li>Acesso aos seus dados</li>
                <li>Retificação de dados inexatos</li>
                <li>Oposição ao tratamento</li>
                <li>Apagamento (Direito ao Esquecimento)</li>
                <li>Portabilidade dos dados</li>
              </ul>
              <p className="pt-4">
                Poderá apresentar reclamação junto da autoridade de controlo competente: <strong>CNPD</strong> em Portugal ou <strong>AEPD</strong> em Espanha (como sujeito de atividade transfronteiriça).
              </p>
            </section>

            <section className="bg-gray-90 text-gray-10 p-10 space-y-4 italic shadow-2xl">
              <h3 className="font-bold uppercase tracking-widest">Aviso LSSI-CE (Espanha)</h3>
              <p className="text-sm opacity-60">
                Em conformidade com a Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico (Espanha), informamos que este site cumpre integralmente os requisitos de identificação e transparência comercial exigidos no território espanhol.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
