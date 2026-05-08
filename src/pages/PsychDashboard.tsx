import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Search, 
  UserPlus, 
  ArrowUpRight, 
  Zap, 
  HeartPulse, 
  Eye,
  FileSearch,
  Users,
  Activity,
  Layers,
  Dna,
  Binary
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Logo } from "@/src/components/Logo";

const profileData = [
  { subject: 'Raciocínio Lógico', A: 120, B: 110, fullMark: 150 },
  { subject: 'Velocidade Reação', A: 98, B: 130, fullMark: 150 },
  { subject: 'Capacidade Verbal', A: 86, B: 130, fullMark: 150 },
  { subject: 'Memória Visual', A: 99, B: 100, fullMark: 150 },
  { subject: 'Destreza Motor', A: 85, B: 90, fullMark: 150 },
  { subject: 'Estabilidade Emocional', A: 65, B: 85, fullMark: 150 },
];

const availableTests = [
  { id: "PT-01", name: "Teste Psicotécnico Universal", category: "Cognitivo", duration: "45 min", reliability: "98.4%" },
  { id: "PT-02", name: "Matrizes Progressivas Raven", category: "Raciocínio", duration: "20 min", reliability: "95.2%" },
  { id: "PT-03", name: "Atenção Concentrada (AC)", category: "Foco", duration: "10 min", reliability: "92.1%" },
  { id: "PT-04", name: "Big Five personality", category: "Comportamental", duration: "30 min", reliability: "97.0%" },
];

export function PsychDashboard() {
  return (
    <div className="space-y-12 pb-20 selection:bg-gray-90 selection:text-gray-10">
      {/* Header Section - Dark variant for Psych */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 p-10 bg-gray-90 text-gray-10 border-b border-gray-80">
        <div className="space-y-1">
          <div className="flex items-center gap-6 mb-4">
             <Logo size="sm" variant="light" />
             <div className="h-8 w-px bg-gray-70 mx-2" />
             <Badge className="rounded-none bg-gray-10 text-gray-90 uppercase text-[8px] font-black tracking-widest px-2 py-0.5 border-none">
              Psychology Enterprise v4
            </Badge>
            <div className="text-[9px] uppercase font-black tracking-[0.2em] text-gray-400 ml-auto font-mono">
              ID: 882-PSY-PRO
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase text-white italic">
            Diagnóstico <span className="text-gray-400 not-italic">Digital Progressivo.</span>
          </h2>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" className="h-12 rounded-none border-gray-70 text-[10px] uppercase tracking-widest font-black gap-3 hover:bg-gray-80 px-8 text-gray-10 shadow-none">
            <UserPlus className="w-3.5 h-3.5" /> Admitir Candidato
          </Button>
          <Button className="h-12 rounded-none bg-gray-10 hover:bg-gray-20 text-gray-90 text-[10px] uppercase tracking-widest font-black gap-3 px-8 shadow-none border-none">
            <Zap className="w-3.5 h-3.5 text-gray-600" /> Iniciar Avaliação
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        {/* Left Stats & Charts */}
        <div className="xl:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-30 border border-gray-30 overflow-hidden">
            {[
              { icon: Activity, label: "Testes Concluídos", val: "1,248" },
              { icon: Layers, label: "Perfis em Base", val: "3,102" },
              { icon: Binary, label: "Índice de Correlação", val: "0.94" },
            ].map((stat, i) => (
              <div key={i} className="bg-gray-10 p-6">
                <stat.icon className="w-4 h-4 text-gray-400 mb-4" />
                <p className="text-[9px] uppercase tracking-[0.2em] font-black text-gray-50 mb-1 italic">{stat.label}</p>
                <p className="text-2xl font-heading font-black tracking-tight text-gray-90">{stat.val}</p>
              </div>
            ))}
          </div>

          <Card className="rounded-none border-gray-30 shadow-none bg-gray-10 p-12 overflow-hidden">
            <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 border-b border-gray-20 pb-8">
              <div className="space-y-1">
                <h3 className="text-[11px] uppercase tracking-[0.4em] font-black text-gray-90 italic">Mapeamento de Capacidade Sensório-Motora</h3>
                <p className="text-[10px] text-gray-50 uppercase tracking-widest font-mono">Reference: Standardized Portuguese Normative (SP-2026)</p>
              </div>
              <div className="flex gap-8 mt-6 md:mt-0">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-none bg-gray-90 ring-4 ring-gray-15" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-gray-90">Candidato</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-none bg-gray-30 ring-4 ring-gray-15" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-gray-50">Cargo Meta</span>
                </div>
              </div>
            </div>
            
            <div className="h-[500px] w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={profileData}>
                  <PolarGrid stroke="#cccccc" strokeWidth={1} />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ fontSize: 9, fill: '#4d4d4d', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }} 
                  />
                  <PolarRadiusAxis 
                    angle={90} 
                    domain={[0, 150]} 
                    tick={false} 
                    axisLine={false} 
                  />
                  <Radar 
                    name="Candidato" 
                    dataKey="A" 
                    stroke="#1a1a1a" 
                    strokeWidth={2}
                    fill="#1a1a1a" 
                    fillOpacity={0.1} 
                  />
                  <Radar 
                    name="Cargo" 
                    dataKey="B" 
                    stroke="#808080" 
                    strokeWidth={1}
                    strokeDasharray="4 4"
                    fill="#cccccc" 
                    fillOpacity={0.2} 
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', color: '#e5e5e5', fontSize: '10px' }}
                    itemStyle={{ color: '#e5e5e5' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { label: "Fit Score", val: "88%" },
                 { label: "Predictive", val: "+14.2" },
                 { label: "Stability", val: "High" },
                 { label: "Confidence", val: "Excellent" }
               ].map((idx, i) => (
                 <div key={i}>
                   <p className="text-[8px] uppercase tracking-[0.3em] font-black text-gray-400 mb-1">{idx.label}</p>
                   <p className="text-sm font-black uppercase text-gray-700">{idx.val}</p>
                 </div>
               ))}
            </div>
          </Card>
        </div>

        {/* Right Test Selection & Metadata */}
        <div className="xl:col-span-4 space-y-8">
           <Card className="rounded-none border-gray-30 shadow-none bg-gray-10 p-8">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-[11px] uppercase tracking-[0.3em] font-black text-gray-90 italic">Instrumentos Disponíveis</h3>
              <Search className="w-4 h-4 text-gray-300" />
            </div>
            
            <div className="space-y-6">
              {availableTests.map((test) => (
                <div key={test.id} className="group cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <div className="space-y-1">
                      <h4 className="text-[11px] font-black text-gray-90 uppercase tracking-tighter group-hover:underline">{test.name}</h4>
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] font-mono text-gray-50 uppercase tracking-widest">{test.id}</span>
                        <div className="w-1 h-1 rounded-none bg-gray-30" />
                        <span className="text-[9px] font-black text-gray-50 uppercase tracking-widest">{test.category}</span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-gray-90 transition-colors" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-15 border border-gray-30 group-hover:bg-gray-20 transition-colors">
                    <div className="flex flex-col">
                      <span className="text-[7px] uppercase tracking-[0.2em] font-black text-gray-50">Fiabilidade</span>
                      <span className="text-sm font-mono font-black text-gray-70 tracking-tight">{test.reliability}</span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-[7px] uppercase tracking-[0.2em] font-black text-gray-50">Duração</span>
                      <span className="text-sm font-mono font-black text-gray-70 tracking-tight">{test.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="ghost" className="w-full mt-12 h-14 border-t border-gray-20 rounded-none text-[9px] uppercase tracking-[0.2em] font-black text-gray-500 hover:text-gray-90 hover:bg-gray-15">
               Aceder à Bibliografia Completa
            </Button>
          </Card>

          <Card className="rounded-none border-gray-30 shadow-none bg-gray-90 text-gray-10 p-10 relative overflow-hidden">
            <div className="relative z-10 flex flex-col gap-4">
              <Dna className="w-8 h-8 text-gray-80" />
              <div className="space-y-1">
                <h4 className="text-xl font-bold uppercase tracking-tighter italic">Análise de Potencial.</h4>
                <p className="text-[9px] text-gray-500 uppercase tracking-[0.1em] font-medium leading-relaxed">
                   Predição de adaptação a cargos críticos de alta responsabilidade.
                </p>
              </div>
              <Button className="h-10 bg-gray-10 text-gray-90 hover:bg-gray-20 rounded-none text-[9px] uppercase font-black tracking-widest shadow-none border-none">
                Gerar Estudo
              </Button>
            </div>
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-gray-80/50 blur-[80px]" />
          </Card>
        </div>
      </div>
    </div>
  );
}

