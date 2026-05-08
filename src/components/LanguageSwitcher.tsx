import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLang = i18n.language.split('-')[0].toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-10 px-3 rounded-none text-[11px] uppercase tracking-widest font-black flex items-center gap-2 hover:bg-gray-15 text-gray-90">
          <Globe className="w-3.5 h-3.5" /> {currentLang}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-none bg-gray-90 border-gray-70 text-gray-10">
        <DropdownMenuItem onClick={() => changeLanguage('pt')} className="text-[10px] uppercase tracking-widest font-bold focus:bg-gray-80 focus:text-gray-10">
          Português (PT)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('es')} className="text-[10px] uppercase tracking-widest font-bold focus:bg-gray-80 focus:text-gray-10">
          Español (ES)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('ca')} className="text-[10px] uppercase tracking-widest font-bold focus:bg-gray-80 focus:text-gray-10">
          Català (CA)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('en')} className="text-[10px] uppercase tracking-widest font-bold focus:bg-gray-80 focus:text-gray-10">
          English (EN)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
