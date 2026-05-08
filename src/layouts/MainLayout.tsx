import { Outlet, Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { publicNavItems } from "@/src/constants";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Lock } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "@/src/components/Logo";
import { LanguageSwitcher } from "@/src/components/LanguageSwitcher";

export function MainLayout() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-gray-10 selection:bg-gray-90 selection:text-gray-10 font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-gray-30 bg-gray-10/70 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-7xl">
          <div className="w-48">
            {!isHome && (
              <Link to="/" className="flex items-center gap-3 group">
                <Logo size="sm" />
              </Link>
            )}
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {publicNavItems.map((item) => {
              const isInternal = item.href.startsWith('/') && !item.href.includes('#');
              return isInternal ? (
                <Link 
                  key={item.href} 
                  to={item.href} 
                  className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-40 hover:text-gray-90 transition-colors"
                >
                  {t(item.title)}
                </Link>
              ) : (
                <a 
                  key={item.href} 
                  href={item.href} 
                  className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-40 hover:text-gray-90 transition-colors"
                >
                  {t(item.title)}
                </a>
              );
            })}
            <Link to="/login">
              <Button variant="ghost" size="sm" className="h-10 px-6 rounded-none text-[11px] uppercase tracking-widest font-black flex items-center gap-2 hover:bg-gray-15 text-gray-90">
                <Lock className="w-3.5 h-3.5" /> {t('nav.access')}
              </Button>
            </Link>
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-gray-10 border-b border-gray-30 z-40 overflow-hidden shadow-none"
          >
            <div className="p-6 space-y-6">
              {publicNavItems.map((item) => {
                const isInternal = item.href.startsWith('/') && !item.href.includes('#');
                return isInternal ? (
                  <Link 
                    key={item.href} 
                    to={item.href} 
                    className="block text-sm font-bold uppercase tracking-widest text-gray-50 hover:text-gray-90"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.title)}
                  </Link>
                ) : (
                  <a 
                    key={item.href} 
                    href={item.href} 
                    className="block text-sm font-bold uppercase tracking-widest text-gray-50 hover:text-gray-90"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.title)}
                  </a>
                );
              })}
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block w-full pt-4 border-t border-gray-30">
                <Button className="w-full h-12 rounded-none bg-gray-90 text-xs uppercase tracking-widest font-bold text-gray-10">{t('nav.access')}</Button>
              </Link>
              <div className="pt-4">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-gray-90 text-gray-50 py-24 border-t border-gray-80">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5 space-y-8">
              <Logo variant="light" size="md" />
              <p className="text-sm font-light leading-relaxed max-w-sm text-gray-40">
                {t('footer.description')}
              </p>
            </div>
            
            <div className="md:col-span-2 space-y-6">
              <h4 className="text-gray-10 font-bold uppercase text-[10px] tracking-[0.3em]">{t('footer.verticals')}</h4>
              <ul className="space-y-4 text-xs font-medium uppercase tracking-widest">
                <li><a href="/#haccp" className="hover:text-gray-10 transition-colors">{t('footer.verticals.haccp')}</a></li>
                <li><a href="/#haccp" className="hover:text-gray-10 transition-colors">{t('footer.verticals.iot')}</a></li>
                <li><a href="/#psychology" className="hover:text-gray-10 transition-colors">{t('footer.verticals.psych')}</a></li>
                <li><a href="/#automation" className="hover:text-gray-10 transition-colors">{t('footer.verticals.automation')}</a></li>
                <li><a href="/#security" className="hover:text-gray-10 transition-colors">{t('footer.verticals.audit')}</a></li>
              </ul>
            </div>

            <div className="md:col-span-2 space-y-6">
              <h4 className="text-gray-10 font-bold uppercase text-[10px] tracking-[0.3em]">{t('footer.institutional')}</h4>
              <ul className="space-y-4 text-xs font-medium uppercase tracking-widest">
                <li><a href="/#security" className="hover:text-gray-10 transition-colors">{t('footer.manifesto')}</a></li>
                <li><a href="/#psychology" className="hover:text-gray-10 transition-colors">{t('footer.protocols')}</a></li>
                <li><a href="/contact" className="hover:text-gray-10 transition-colors">{t('footer.support')}</a></li>
                <li><Link to="/contact" className="hover:text-gray-10 transition-colors">{t('nav.contact')}</Link></li>
              </ul>
            </div>

            <div className="md:col-span-3 space-y-6">
              <h4 className="text-gray-10 font-bold uppercase text-[10px] tracking-[0.3em]">{t('footer.legal')}</h4>
              <ul className="space-y-4 text-xs font-medium uppercase tracking-widest mb-6">
                <li><Link to="/privacy" className="hover:text-gray-10 transition-colors">{t('footer.privacy')}</Link></li>
                <li><Link to="/cookies" className="hover:text-gray-10 transition-colors">{t('footer.cookies')}</Link></li>
              </ul>
              <p className="text-[10px] leading-loose uppercase tracking-[0.1em] pt-4 border-t border-gray-80 text-gray-500">
                Domain: www.theoneorder.com<br />
                {t('footer.legal.compliance')}<br />
                © 2026 THE ONE ORDER. <br />{t('footer.rights')}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

