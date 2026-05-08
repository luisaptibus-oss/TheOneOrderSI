import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  showText?: boolean;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  orientation?: "horizontal" | "vertical";
}

export function Logo({ 
  className, 
  iconClassName, 
  showText = true, 
  variant = "dark",
  size = "md",
  orientation = "horizontal"
}: LogoProps) {
  const { t } = useTranslation();
  const logoPath = "/TheOneOrder_Principal1.svg";
  
  const iconSizes = {
    sm: "h-6 w-auto",
    md: "h-8 w-auto",
    lg: "h-14 w-auto"
  };

  const textSizes = {
    sm: "text-[10px] tracking-[0.3em]",
    md: "text-xs tracking-[0.4em]",
    lg: "text-lg tracking-[0.5em]"
  };

  return (
    <div className={cn(
      "flex gap-6", 
      orientation === "horizontal" ? "items-center flex-row" : "items-center flex-col gap-3",
      className
    )}>
      <div className={cn(
        "shrink-0 transition-all flex items-center justify-center border",
        variant === "dark" ? "bg-gray-90 p-2.5 border-gray-80" : "bg-gray-20 p-2.5 border-gray-30",
        iconClassName
      )}>
        <img 
          src={logoPath} 
          alt={t('logo.alt')} 
          className={cn(iconSizes[size], variant === "light" && "filter invert grayscale")}
          referrerPolicy="no-referrer"
        />
      </div>
      
      {showText && (
        <div className={cn("flex flex-col", orientation === "vertical" && "items-center")}>
          <span className={cn(
            "font-heading font-black uppercase leading-none",
            variant === "dark" ? "text-gray-90" : "text-white",
            textSizes[size]
          )}>
            {t('logo.name')}
          </span>
        </div>
      )}
    </div>
  );
}
