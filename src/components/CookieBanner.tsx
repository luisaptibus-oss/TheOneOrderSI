import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function CookieBanner() {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const declineAll = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="bg-gray-90 border border-gray-70 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-2xl">
              <div className="bg-gray-80 p-3 shrink-0">
                <Cookie className="w-6 h-6 text-gray-10" />
              </div>
              
              <div className="flex-1 space-y-2">
                <h4 className="text-gray-10 font-bold text-sm uppercase tracking-widest italic">{t('cookie.title')}</h4>
                <p className="text-gray-400 text-xs leading-relaxed max-w-3xl">
                  {t('cookie.text')} <Link to="/cookies" className="text-gray-10 underline decoration-gray-600 font-bold">Cookies</Link>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Button 
                  variant="outline" 
                  onClick={declineAll}
                  className="rounded-none border-gray-70 text-gray-400 hover:text-gray-10 hover:border-gray-10 text-[10px] uppercase font-black tracking-widest h-10 px-6"
                >
                  {t('cookie.decline')}
                </Button>
                <Button 
                  onClick={acceptAll}
                  className="rounded-none bg-gray-10 text-gray-90 hover:bg-white text-[10px] uppercase font-black tracking-widest h-10 px-8"
                >
                  {t('cookie.accept')}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
