import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, Building, ShieldCheck, Lock, Smartphone, ChevronRight, Activity } from "lucide-react";
import { useAuth } from "@/src/lib/auth-context";
import { motion } from "motion/react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Logo } from "@/src/components/Logo";

export function Settings() {
  const { user } = useAuth();

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Parâmetros do Sistema Atualizados.");
  };

  return (
    <div className="max-w-5xl space-y-12 pb-20 selection:bg-gray-90 selection:text-gray-10 font-sans">
      {/* Settings Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-gray-30">
        <div className="space-y-1">
          <div className="flex items-center gap-2 mb-2">
            <div className="text-[9px] uppercase font-black tracking-[0.4em] text-gray-400">
              User ID: {user?.uid?.slice(0, 8) || "ANON-001"}
            </div>
          </div>
          <h2 className="text-4xl font-bold tracking-tighter uppercase text-gray-90 italic">
            Configurações <span className="text-gray-50 not-italic">do Ecossistema.</span>
          </h2>
          <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-black">Gestão de Identidade e Segurança de Infraestrutura</p>
        </div>
      </div>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="bg-transparent p-0 h-auto mb-12 flex flex-wrap items-center justify-start gap-12 border-none">
          {["account", "business", "team", "security"].map((tab) => (
            <TabsTrigger 
              key={tab}
              value={tab} 
              className={cn(
                "p-0 bg-transparent rounded-none border-b-2 border-transparent",
                "text-[10px] uppercase font-black tracking-[0.3em] text-gray-400",
                "data-[state=active]:border-gray-90 data-[state=active]:text-gray-90 data-[state=active]:bg-transparent data-[state=active]:shadow-none transition-all pb-2"
              )}
            >
              {tab === "account" && <User className="w-3.5 h-3.5 mr-3 mb-0.5" />}
              {tab === "business" && <Building className="w-3.5 h-3.5 mr-3 mb-0.5" />}
              {tab === "team" && <Activity className="w-3.5 h-3.5 mr-3 mb-0.5" />}
              {tab === "security" && <Lock className="w-3.5 h-3.5 mr-3 mb-0.5" />}
              {tab === "account" ? "Conta" : tab === "business" ? "Entidade" : tab === "team" ? "Equipa" : "Segurança"}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
          <div className="xl:col-span-8">
            <TabsContent value="account" className="mt-0">
               <Card className="rounded-none border-gray-30 shadow-none bg-gray-10">
                <CardHeader className="p-10 border-b border-gray-20">
                  <CardTitle className="text-[11px] uppercase tracking-[0.4em] font-black text-gray-90 italic underline underline-offset-8 decoration-gray-30">Perfil de Utilizador</CardTitle>
                </CardHeader>
                <form onSubmit={handleUpdate}>
                  <CardContent className="p-10 space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <Label className="text-[9px] uppercase tracking-[0.2em] font-black text-gray-500">Identidade</Label>
                        <Input defaultValue={user?.displayName || ""} className="h-12 rounded-none border-gray-30 bg-gray-15 focus:bg-gray-10 focus:border-gray-90 text-xs font-medium text-gray-90" />
                      </div>
                      <div className="space-y-3">
                        <Label className="text-[9px] uppercase tracking-[0.2em] font-black text-gray-500">Endereço de Protocolo</Label>
                        <Input defaultValue={user?.email || ""} className="h-12 rounded-none border-gray-30 bg-gray-20 text-gray-50 cursor-not-allowed font-medium text-xs" disabled />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label className="text-[9px] uppercase tracking-[0.2em] font-black text-gray-500">Cargo Operacional</Label>
                      <Input defaultValue="Administrador Master" className="h-12 rounded-none border-gray-30 bg-gray-15 focus:bg-gray-10 focus:border-gray-90 text-xs font-medium text-gray-90" />
                    </div>
                  </CardContent>
                  <CardFooter className="bg-gray-20 p-8 flex justify-end">
                    <Button type="submit" className="h-12 rounded-none bg-gray-90 hover:bg-gray-80 text-gray-10 text-[10px] uppercase tracking-[0.3em] font-black px-12">Guardar Entradas</Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>

            <TabsContent value="business" className="mt-0">
              <Card className="rounded-none border-gray-30 shadow-none bg-gray-10">
                <CardHeader className="p-10 border-b border-gray-20 text-center">
                  <CardDescription className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500">Ficha Técnica da Organização</CardDescription>
                </CardHeader>
                <CardContent className="p-10 space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <Label className="text-[9px] uppercase tracking-[0.2em] font-black text-gray-500">Denominação Legislada</Label>
                      <Input defaultValue="THE ONE ORDER SOLUTIONS" className="h-12 rounded-none border-gray-30 font-medium text-xs text-gray-90" />
                    </div>
                    <div className="space-y-3">
                      <Label className="text-[9px] uppercase tracking-[0.2em] font-black text-gray-500">Contribuinte (V.A.T)</Label>
                      <Input defaultValue="PT 501 222 333" className="h-12 rounded-none border-gray-30 font-medium text-xs text-gray-90" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label className="text-[9px] uppercase tracking-[0.2em] font-black text-gray-500">Sede Administrativa</Label>
                    <Input defaultValue="Alameda dos Oceanos, 1.22, Lisboa" className="h-12 rounded-none border-gray-30 font-medium text-xs text-gray-90" />
                  </div>
                  
                  <div className="pt-6">
                    <div className="flex items-center justify-between mb-8">
                       <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-90 italic">Inventory Control</h4>
                       <Badge className="bg-gray-90 text-gray-10 rounded-none text-[8px] font-black px-2 py-0.5 border-none">Active Network</Badge>
                    </div>
                    <div className="border border-gray-30 divide-y divide-gray-30">
                      {[
                        { name: "Câmara Fria A12", area: "Logística", status: "Nominal" },
                        { name: "Expositor B05", area: "Showroom", status: "Nominal" }
                      ].map((s, i) => (
                        <div key={i} className="flex items-center justify-between p-4 px-6 hover:bg-gray-15 transition-colors group">
                          <div className="flex flex-col">
                            <span className="text-[10px] font-black uppercase tracking-tight text-gray-90">{s.name}</span>
                            <span className="text-[8px] uppercase tracking-widest text-gray-500">{s.area}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-90 transition-colors" />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-20 p-8 flex justify-end border-t border-gray-30">
                  <Button className="h-12 rounded-none bg-gray-90 hover:bg-gray-80 text-gray-10 text-[10px] uppercase tracking-[0.3em] font-black px-12">Sincronizar Nodes</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="team" className="mt-0">
               <Card className="rounded-none border-gray-30 shadow-none bg-gray-10">
                <CardHeader className="p-10 border-b border-gray-20 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-[11px] uppercase tracking-[0.4em] font-black text-gray-90 italic">Gestão de Colaboradores</CardTitle>
                    <CardDescription className="text-[9px] uppercase tracking-widest text-gray-500 mt-2">Atribuição de Roles e Privilégios de Acesso</CardDescription>
                  </div>
                  <Button variant="outline" className="h-10 rounded-none border-gray-30 text-[9px] uppercase tracking-widest font-black px-6 hover:bg-gray-90 hover:text-gray-10 text-gray-90">
                    Novo Registo
                  </Button>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-gray-20">
                    {[
                      { name: "Carlos Mendes", email: "c.mendes@theoneorder.com", role: "Técnico HACCP", status: "Active" },
                      { name: "Sara Silva", email: "sara.s@theoneorder.com", role: "Auditor Interno", status: "Active" },
                      { name: "João Pereira", email: "j.pereira@theoneorder.com", role: "Manager Unidade", status: "Active" },
                      { name: "Marta Rocha", email: "m.rocha@theoneorder.com", role: "Gestor Psicologia", status: "Offline" },
                    ].map((member, i) => (
                      <div key={i} className="p-6 flex items-center justify-between hover:bg-gray-15 transition-colors group">
                        <div className="flex items-center gap-6">
                           <div className="w-10 h-10 bg-gray-90 text-gray-10 flex items-center justify-center text-[10px] font-black rounded-none uppercase">
                             {member.name.split(" ").map(n => n[0]).join("")}
                           </div>
                           <div>
                             <p className="text-[11px] font-black text-gray-90 uppercase tracking-tighter">{member.name}</p>
                             <p className="text-[9px] text-gray-500 uppercase tracking-widest">{member.email}</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-12">
                          <div className="text-right">
                             <p className="text-[9px] font-black uppercase tracking-widest text-gray-90">{member.role}</p>
                             <div className="flex items-center justify-end gap-1.5 mt-0.5">
                               <div className={cn("w-1 h-1 rounded-none", member.status === "Active" ? "bg-gray-90" : "bg-gray-30")} />
                               <span className="text-[8px] uppercase tracking-widest text-gray-500">{member.status}</span>
                             </div>
                          </div>
                          <select className="bg-transparent border-none text-[9px] font-black uppercase tracking-widest text-gray-400 focus:ring-0 cursor-pointer hover:text-gray-90 transition-colors">
                            <option>Técnico</option>
                            <option>Auditor</option>
                            <option>Manager</option>
                            <option>Admin</option>
                          </select>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-20 p-8 flex justify-end">
                   <p className="text-[8px] uppercase tracking-widest text-gray-500 font-bold italic">Os limites de role são processados em tempo real na camada de firewall.</p>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="mt-0">
               <Card className="rounded-none border-gray-30 shadow-none bg-gray-10">
                <CardHeader className="p-10 border-b border-gray-20">
                  <CardTitle className="text-[11px] uppercase tracking-[0.4em] font-black text-gray-90 italic underline underline-offset-8 decoration-gray-30">Firewall & Privacidade</CardTitle>
                </CardHeader>
                <CardContent className="p-10 space-y-12">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-8 bg-gray-15 border border-gray-30 group hover:border-gray-90 transition-all">
                      <div className="flex items-center gap-6">
                        <div className="p-4 bg-gray-10 border border-gray-20 text-gray-40 group-hover:bg-gray-90 group-hover:text-gray-10 transition-all">
                          <Smartphone className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-[11px] font-black uppercase tracking-widest text-gray-90">App Autenticator v2.0</p>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">Exigir validação de token RSA por dispositivo móvel.</p>
                        </div>
                      </div>
                      <Button variant="outline" className="h-10 rounded-none border-gray-30 text-[9px] uppercase tracking-widest font-black px-6 hover:bg-gray-90 hover:text-gray-10 text-gray-90">Configurar</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-8 bg-gray-15 border border-gray-30">
                      <div className="flex items-center gap-6">
                        <div className="p-4 bg-gray-10 border border-gray-20 text-gray-40">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-[11px] font-black uppercase tracking-widest text-gray-90 italic">Modo Invisible Node</p>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">A infraestrutura está oculta de indexes e scraping automatizado.</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-none bg-gray-90" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-90">Security Active</span>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-gray-20" />

                  <div className="space-y-8">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-90 italic">Protocolo de Password</h4>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <Label className="text-[9px] uppercase tracking-[0.2em] font-black text-gray-500">Password Vigente</Label>
                        <Input type="password" placeholder="••••••••••••" className="h-12 rounded-none border-gray-30 bg-gray-15 focus:bg-gray-10 focus:border-gray-90 text-xs text-gray-40" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-3">
                          <Label className="text-[9px] uppercase tracking-[0.2em] font-black text-gray-500">Nova Chave Mestra</Label>
                          <Input type="password" placeholder="Instalar nova chave..." className="h-12 rounded-none border-gray-30 bg-gray-15 focus:bg-gray-10 focus:border-gray-90 text-xs text-gray-90" />
                        </div>
                        <div className="space-y-3">
                          <Label className="text-[9px] uppercase tracking-[0.2em] font-black text-gray-500">Confirmar Chave</Label>
                          <Input type="password" placeholder="Confirmar nova chave..." className="h-12 rounded-none border-gray-30 bg-gray-15 focus:bg-gray-10 focus:border-gray-90 text-xs font-medium text-gray-90" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-20 p-8 flex justify-end border-t border-gray-30">
                  <Button className="h-12 rounded-none bg-gray-90 hover:bg-gray-80 text-gray-10 text-[10px] uppercase tracking-[0.3em] font-black px-12">Atualizar Segurança</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </div>

          <div className="xl:col-span-4 space-y-8">
             <Card className="rounded-none border-gray-30 shadow-none bg-gray-90 text-gray-10 p-12">
               <div className="space-y-12">
                 <div className="space-y-8">
                   <Logo variant="light" size="sm" orientation="vertical" className="items-start" />
                   <h4 className="text-2xl font-bold uppercase tracking-tighter italic">Compliance <br /> Global Node.</h4>
                 </div>
                 <div className="space-y-6">
                   {[
                     { label: "RGPD Status", val: "Conform" },
                     { label: "ISO 27001", val: "Aligned" },
                     { label: "Encryption", val: "AES-256" }
                   ].map((item, i) => (
                     <div key={i} className="flex items-center justify-between border-b border-gray-80 pb-2">
                       <span className="text-[8px] uppercase tracking-[0.3em] font-black text-gray-500">{item.label}</span>
                       <span className="text-[10px] font-black uppercase tracking-tight">{item.val}</span>
                     </div>
                   ))}
                 </div>
                 <p className="text-[9px] text-gray-500 uppercase tracking-widest leading-relaxed font-medium">
                   O sistema monitoriza automaticamente o conformidade com as diretivas europeias de segurança alimentar e proteção de dados psicológicos.
                 </p>
               </div>
             </Card>
          </div>
        </div>
      </Tabs>
    </div>
  );
}

