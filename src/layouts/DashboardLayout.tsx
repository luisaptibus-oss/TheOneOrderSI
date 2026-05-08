import { Outlet, Link, useLocation } from "react-router-dom";
import { useAuth } from "@/src/lib/auth-context";
import { 
  LayoutDashboard, 
  BrainCircuit, 
  Settings, 
  LogOut, 
  Menu, 
  Thermometer, 
  ClipboardCheck, 
  ChevronRight,
  ShieldCheck,
  FileText,
  Activity,
  History,
  Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Logo } from "@/src/components/Logo";

const dashboardNav = [
  { title: "Comando Central", href: "/dashboard", icon: LayoutDashboard },
  { title: "HACCP Digital", href: "/haccp", icon: ClipboardCheck },
  { title: "Psych-Eval", href: "/psychology", icon: BrainCircuit },
  { title: "Sensores IoT", href: "/sensors", icon: Thermometer },
  { title: "Auditoria Log", href: "/audit", icon: History },
  { title: "Configurações", href: "/settings", icon: Settings },
];

export function DashboardLayout() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-15 overflow-hidden selection:bg-gray-90 selection:text-gray-10 font-sans">
      {/* Sidebar - Technical / Industrial */}
      <aside 
        className={cn(
          "bg-gray-90 text-gray-10 flex flex-col transition-all duration-500 ease-[0.16, 1, 0.3, 1] relative z-40 border-r border-gray-80",
          collapsed ? "w-[80px]" : "w-[280px]"
        )}
      >
        <div className="h-20 flex items-center px-6 border-b border-gray-80 mb-4">
          <Link to="/" className="flex items-center gap-3 overflow-hidden text-gray-10">
            <Logo 
              showText={!collapsed} 
              variant="light" 
              size="sm" 
              className="gap-3" 
            />
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1 overscroll-contain overflow-y-auto py-4">
          {dashboardNav.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-none transition-all text-[11px] uppercase tracking-widest font-black group relative",
                  isActive 
                    ? "bg-gray-10 text-gray-90" 
                    : "text-gray-40 hover:text-gray-10 hover:bg-gray-80 border-l border-transparent hover:border-gray-70"
                )}
              >
                <item.icon className={cn("w-4 h-4 shrink-0 transition-transform group-hover:scale-110", isActive ? "text-gray-90" : "text-gray-60 group-hover:text-gray-10")} />
                {!collapsed && <span className="flex-1">{item.title}</span>}
                {!collapsed && isActive && <div className="w-1.5 h-1.5 rounded-none bg-gray-90 shadow-none" />}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 mt-auto space-y-4 border-t border-gray-80 bg-gray-85">
          <div className={cn("flex items-center gap-3 p-3 bg-gray-90 border border-gray-80 rounded-none", collapsed ? "justify-center" : "")}>
            <Avatar className="h-9 w-9 rounded-none ring-1 ring-gray-80">
              <AvatarFallback className="bg-gray-85 text-[10px] font-black rounded-none uppercase text-gray-10">{user?.email?.[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            {!collapsed && (
              <div className="overflow-hidden">
                <p className="text-[10px] font-black text-gray-10 truncate uppercase tracking-tighter">{user?.displayName || "Admin User"}</p>
                <p className="text-[9px] text-gray-50 truncate uppercase tracking-widest leading-none">Security Lvl 5</p>
              </div>
            )}
          </div>
          
          <Button 
            variant="ghost" 
            size={collapsed ? "icon" : "sm"} 
            className="w-full text-gray-50 hover:text-gray-10 hover:bg-gray-80 justify-start rounded-none uppercase text-[10px] tracking-widest font-black"
            onClick={logout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            {!collapsed && <span>Terminar Sessão</span>}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="h-20 border-b border-gray-30 bg-gray-10/80 backdrop-blur-md flex items-center justify-between px-8 shrink-0 z-30">
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)} className="hover:bg-gray-15 rounded-none">
              <Menu className="w-5 h-5 text-gray-50" />
            </Button>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-none bg-gray-90" />
              <h1 className="font-bold text-gray-90 uppercase tracking-[0.2em] text-[10px]">
                {dashboardNav.find(n => n.href === location.pathname)?.title || "Painel de Comando"}
              </h1>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-6 text-[10px] uppercase font-black tracking-widest text-gray-40 mr-8">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5" />
                <span>Sys OK</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5" />
                <span>Encrypted</span>
              </div>
            </div>
            
            <Button variant="outline" size="sm" className="text-[9px] uppercase tracking-widest font-black rounded-none border-gray-30 h-9 px-6 hover:bg-gray-15 text-gray-90">
              Protocolo Suporte
            </Button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto bg-gray-15">
          <div className="p-8 max-w-[1600px] mx-auto">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Outlet />
            </motion.div>
          </div>
        </div>
        
        {/* Footer info in dashboard */}
        <div className="h-10 border-t border-gray-30 bg-gray-10 px-8 flex items-center justify-between text-[9px] uppercase font-bold tracking-[0.2em] text-gray-50">
          <div className="flex gap-6">
            <span>Server: EU-WEST-2</span>
            <span>Latency: 12ms</span>
          </div>
          <div className="flex gap-6 text-right">
            <span>© THE ONE ORDER</span>
            <span>Build v2.4.0</span>
          </div>
        </div>
      </main>
    </div>
  );
}

