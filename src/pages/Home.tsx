import { Button } from "@/components/ui/button";
import { Shield, Brain, ArrowRight, CheckCircle2, ChevronDown, Activity, Zap, Lock } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Logo } from "@/src/components/Logo";
import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation();
  return (
    <div className="bg-background">
      {/* Hero Section - Editorial Style */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gray-10" />
        
        {/* Background Decorative Element - Ornamental Technical Box */}
        <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center select-none pointer-events-none z-0">
          <motion.div 
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative w-[150vw] md:w-[100vw] aspect-square bg-gray-90 border border-gray-80 shadow-[0_0_100px_rgba(0,0,0,0.4)] flex items-center justify-center"
          >
            <span className="text-[40vw] font-black text-gray-10 uppercase tracking-tighter italic leading-none">ORDER</span>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/5" />
          </motion.div>
        </div>
        
        <div className="container relative z-10 mx-auto max-w-7xl h-full flex flex-col items-center">
          {/* logo centered vertically between header (20) and main headings */}
          <div className="flex-none h-48 md:h-64 flex items-center justify-center w-full z-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <Logo size="lg" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center flex-1"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-gray-90 italic text-center mb-12">
              {t('home.hero.title')} <br />
              {t('home.hero.subtitle')}
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-16 border-t border-gray-30 pt-12">
              <div className="max-w-xs text-center md:text-left">
                <p className="text-xs text-gray-600 uppercase tracking-widest font-black leading-relaxed">
                  {t('home.hero.description')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button className="h-12 px-8 rounded-none bg-gray-90 hover:bg-gray-80 text-gray-10 text-[10px] uppercase tracking-[0.3em] font-black">
                    {t('home.hero.button_start')}
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="h-12 px-8 rounded-none border-gray-30 text-[10px] uppercase tracking-[0.3em] font-black hover:bg-gray-15 text-gray-90">
                    {t('home.hero.button_contact')}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">{t('home.hero.scroll')}</span>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </section>

      {/* Services Section - Precise Grid */}
      <section id="haccp" className="py-32 bg-gray-90 text-gray-10 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="mb-8">
                <Logo variant="light" size="sm" orientation="horizontal" />
              </div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase italic">
                {t('home.haccp.title')}
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg">
                {t('home.haccp.description')}
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                {[
                  { icon: Activity, text: t('home.haccp.feat1') },
                  { icon: Zap, text: t('home.haccp.feat2') },
                  { icon: Lock, text: t('home.haccp.feat3') },
                  { icon: CheckCircle2, text: t('home.haccp.feat4') },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-gray-300">
                    <item.icon className="w-4 h-4 text-gray-50" /> {item.text}
                  </div>
                ))}
              </div>
              <Link to="/login" className="inline-block mt-8">
                <Button variant="link" className="p-0 text-gray-10 text-xs uppercase tracking-widest font-bold group">
                  {t('home.haccp.access')} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-gray-80 rounded-none overflow-hidden border border-gray-70 shadow-2xl shadow-black/60"
            >
              <div className="absolute inset-0 flex items-center justify-center text-white font-black text-[22vw] opacity-30 select-none italic tracking-tighter">
                ACC
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-95/10 via-transparent to-gray-70/5" />
            </motion.div>
          </div>

          <div id="psychology" className="grid lg:grid-cols-2 gap-20 items-center flex-row-reverse">
             <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-gray-20 rounded-none overflow-hidden border border-gray-30 order-2 lg:order-1 shadow-inner"
            >
              <div className="absolute inset-0 flex items-center justify-center text-gray-90 font-black text-[22vw] opacity-60 select-none italic tracking-tighter">
                SYC
              </div>
              <div className="absolute inset-0 bg-gradient-to-bl from-gray-10 via-transparent to-gray-30/20" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div className="mb-8">
                <Logo variant="light" size="sm" orientation="horizontal" />
              </div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase italic text-gray-10">
                {t('home.psych.title')}
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg">
                {t('home.psych.description')}
              </p>
              <ul className="space-y-4">
                {[
                  t('home.psych.feat1'),
                  t('home.psych.feat2'),
                  t('home.psych.feat3')
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-50" /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button variant="outline" className="rounded-none border-gray-70 text-gray-400 hover:text-gray-10 hover:border-gray-10 transition-all text-xs uppercase tracking-widest font-bold h-12 px-8">
                  {t('home.psych.button')}
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Third Section: Design de processos, automação e simplificação */}
          <div id="automation" className="grid lg:grid-cols-2 gap-20 items-center mt-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="mb-8">
                <Logo variant="light" size="sm" orientation="horizontal" />
              </div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase italic text-gray-10">
                {t('home.automation.title')}
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg">
                {t('home.automation.description')}
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                {[
                  { icon: Activity, text: t('home.automation.feat1') },
                  { icon: Zap, text: t('home.automation.feat2') },
                  { icon: Shield, text: t('home.automation.feat3') },
                  { icon: Brain, text: t('home.automation.feat4') },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <item.icon className="w-4 h-4 text-gray-50" /> {item.text}
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button variant="outline" className="rounded-none border-gray-70 text-gray-400 hover:text-gray-10 hover:border-gray-10 transition-all text-xs uppercase tracking-widest font-bold h-12 px-8">
                  {t('home.automation.button')}
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-gray-80 rounded-none overflow-hidden border border-gray-70 shadow-2xl shadow-black/80"
            >
              <div className="absolute inset-0 flex items-center justify-center text-white font-black text-[22vw] opacity-20 select-none italic tracking-tighter">
                OPS
              </div>
              {/* Grid Decorative Overlay */}
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-10">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="border-[0.5px] border-gray-10/30" />
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-95/10 via-transparent to-gray-70/5" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="security" className="py-32 bg-gray-10">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="flex justify-center mb-16">
            <Logo variant="dark" size="md" orientation="horizontal" />
          </div>
          <h3 className="text-xs uppercase tracking-[0.4em] font-black text-gray-400 mb-8 italic">{t('home.security.tag')}</h3>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-12">{t('home.security.title').split('. ')[0]}. <br /> {t('home.security.title').split('. ')[1]}</h2>
          <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed mb-16">
            {t('home.security.description')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: t('home.security.labels.domain'), val: t('home.security.vals.universal') },
              { label: t('home.security.labels.security'), val: t('home.security.vals.cloudflare') },
              { label: t('home.security.labels.protection'), val: t('home.security.vals.anticrawl') },
              { label: t('home.security.labels.support'), val: t('home.security.vals.elite') },
            ].map((stat, i) => (
              <div key={i} className="p-6 border border-gray-30 rounded-none bg-gray-10/50 hover:bg-gray-20 transition-colors">
                <p className="text-[8px] uppercase tracking-[0.2em] text-gray-50 font-black mb-1 italic">{stat.label}</p>
                <p className="text-xs font-black uppercase text-gray-90 tracking-tighter">{stat.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gray-20 py-32 border-t border-gray-30">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-16">
            <Logo variant="dark" size="md" orientation="horizontal" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-12 text-gray-90 italic">
            {t('home.cta.title').split(' ').slice(0, -1).join(' ')} <span className="text-gray-40 not-italic">{t('home.cta.title').split(' ').slice(-1)}</span>
          </h2>
          <Link to="/register">
            <Button className="h-14 px-12 rounded-none text-xs uppercase tracking-[0.3em] font-black bg-gray-90 hover:bg-gray-80 text-gray-10 transition-all">
              {t('home.cta.button')}
            </Button>
          </Link>
          <div className="mt-16 text-gray-400 flex items-center justify-center gap-8 text-[9px] uppercase tracking-widest font-bold">
            <span>© 2026 THE ONE ORDER</span>
            <div className="w-1 h-1 rounded-none bg-gray-40" />
            <span>www.theoneorder.com</span>
          </div>
        </div>
      </section>
    </div>
  );
}

