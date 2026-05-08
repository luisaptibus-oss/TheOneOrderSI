import { useState, useEffect } from "react";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Thermometer, 
  Droplets, 
  FileText, 
  PlusCircle, 
  AlertCircle, 
  Download,
  Calendar,
  History,
  Activity,
  Maximize2,
  MoreHorizontal
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";
import { motion } from "motion/react";
import { toast } from "sonner";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { cn } from "@/lib/utils";
import { Logo } from "@/src/components/Logo";

const mockSensorData = [
  { time: "08:00", temp: 4.2, hum: 45 },
  { time: "10:00", temp: 3.8, hum: 48 },
  { time: "12:00", temp: 4.5, hum: 50 },
  { time: "14:00", temp: 5.1, hum: 47 },
  { time: "16:00", temp: 4.8, hum: 46 },
  { time: "18:00", temp: 4.3, hum: 44 },
  { time: "20:00", temp: 4.0, hum: 45 },
];

const mockLogs = [
  { id: "L001", area: "Câmara Fria A1", type: "Temperatura", value: "4.2°C", status: "OK", date: "2026-05-05 14:30" },
  { id: "L002", area: "Zona de Preparação", type: "Humidade", value: "48%", status: "OK", date: "2026-05-05 14:15" },
  { id: "L003", area: "Expositor Frontal", type: "Temperatura", value: "7.5°C", status: "ALERTA", date: "2026-05-05 13:50" },
  { id: "L004", area: "Câmara Congelação", type: "Temperatura", value: "-18.5°C", status: "OK", date: "2026-05-05 13:20" },
];

export function HACCPDashboard() {
  const [data, setData] = useState(mockSensorData);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("THE ONE ORDER · HACCP REPORT", 14, 20);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text(`DATE: ${new Date().toLocaleDateString()} | STATUS: CERTIFIED SYSTEM`, 14, 30);
    
    doc.setDrawColor(230);
    doc.line(14, 35, 196, 35);

    autoTable(doc, {
      startY: 45,
      head: [["ID", "ÁREA", "CATEGORIA", "VALOR", "STATUS", "HORÁRIO"]],
      body: mockLogs.map(l => [l.id, l.area, l.type, l.value, l.status, l.date]),
      headStyles: { fillColor: [12, 10, 9], textColor: [255, 255, 255] },
      styles: { fontSize: 8, cellPadding: 4 }
    });

    doc.save(`report-haccp-${Date.now()}.pdf`);
    toast.success("Certificado de Auditoria Gerado.");
  };

  return (
    <div className="space-y-10 selection:bg-gray-90 selection:text-gray-10">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-30">
        <div className="space-y-1">
          <div className="flex items-center gap-6 mb-4">
             <Logo size="sm" variant="dark" />
             <div className="h-8 w-px bg-gray-20 mx-2" />
             <Badge className="rounded-none bg-gray-90 text-gray-10 uppercase text-[8px] font-black tracking-widest px-2 py-0.5 border-none">
              HACCP Enterprise v4
            </Badge>
            <div className="text-[9px] uppercase font-black tracking-[0.2em] text-gray-50 ml-auto">
              ID: 882-SYS-PRT
            </div>
          </div>
          <h2 className="text-4xl font-bold tracking-tighter uppercase text-gray-90 italic">
            Monitorização <span className="text-gray-50 not-italic">Operacional.</span>
          </h2>
          <div className="flex items-center gap-4 text-xs font-medium text-gray-50 uppercase tracking-widest">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-none bg-gray-90" />
              <span>Sistemas Nominais</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Activity className="w-3 h-3 text-gray-90" />
              <span>Real-Time Active</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" className="h-12 rounded-none border-gray-30 text-[10px] uppercase tracking-widest font-black gap-3 hover:bg-gray-20 text-gray-90" onClick={generatePDF}>
            <Download className="w-3.5 h-3.5" /> Arquivar PDF
          </Button>
          <Button className="h-12 rounded-none bg-gray-90 hover:bg-gray-80 text-gray-10 text-[10px] uppercase tracking-widest font-black gap-3">
            <PlusCircle className="w-3.5 h-3.5" /> Nova Verificação
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-30 border border-gray-30 overflow-hidden">
        {[
          { icon: Thermometer, color: "text-gray-50", label: "Temp Média", val: "4.2°C", sub: "Estável", active: true },
          { icon: Droplets, color: "text-gray-50", label: "Humidade", val: "47%", sub: "Ótimo", active: true },
          { icon: AlertCircle, color: "text-gray-90", label: "Alertas", val: "01", sub: "Ação Req.", active: false },
          { icon: History, color: "text-gray-50", label: "Último Log", val: "14:30", sub: "15min", active: true },
        ].map((kpi, i) => (
          <div key={i} className="bg-gray-10 p-6 group hover:bg-gray-15 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className={cn("p-2 border border-gray-20 rounded-none transition-transform group-hover:scale-105", kpi.color)}>
                <kpi.icon className="w-4 h-4" />
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-30 hover:bg-transparent">
                <Maximize2 className="w-3 h-3" />
              </Button>
            </div>
            <p className="text-[8px] uppercase tracking-[0.2em] font-black text-gray-400 mb-1 italic">{kpi.label}</p>
            <p className="text-2xl font-heading font-black tracking-tight text-gray-90 mb-3">{kpi.val}</p>
            <div className="flex items-center gap-2">
              <div className={cn("w-1 h-1 rounded-none", kpi.active ? "bg-gray-90" : "bg-gray-40")} />
              <p className="text-[8px] uppercase tracking-[0.1em] font-black text-gray-400">{kpi.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        {/* Main Chart Section */}
        <Card className="xl:col-span-8 rounded-none border-gray-30 shadow-none bg-gray-10 p-8">
          <div className="flex items-center justify-between mb-10">
            <div className="space-y-1">
              <h3 className="text-[11px] uppercase tracking-[0.3em] font-black text-gray-90 italic">Análise de Tendência Sensorial</h3>
              <p className="text-[10px] text-gray-50 uppercase tracking-widest">Amostragem em tempo real · Período 24h</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-0.5 bg-gray-90" />
                <span className="text-[9px] font-black uppercase text-gray-50">Temp</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-0.5 bg-gray-30" />
                <span className="text-[9px] font-black uppercase text-gray-50">Hum</span>
              </div>
            </div>
          </div>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1a1a1a" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#1a1a1a" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#cccccc" />
                <XAxis 
                  dataKey="time" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 9, fontWeight: 900, fill: '#4d4d4d' }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 9, fontWeight: 900, fill: '#4d4d4d' }}
                  dx={-10}
                />
                <Tooltip 
                  cursor={{ stroke: '#1a1a1a', strokeWidth: 1, strokeDasharray: '4 4' }}
                  contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '0px', color: '#e5e5e5' }} 
                  labelStyle={{ fontSize: '10px', fontWeight: 'bold', color: '#808080', marginBottom: '4px' }}
                  itemStyle={{ fontSize: '11px', fontWeight: '900', color: '#e5e5e5', textTransform: 'uppercase' }}
                />
                <Area 
                  type="stepAfter" 
                  dataKey="temp" 
                  stroke="#1a1a1a" 
                  strokeWidth={2.5} 
                  fillOpacity={1} 
                  fill="url(#colorTemp)" 
                  animationDuration={1500}
                />
                <Area 
                  type="monotone" 
                  dataKey="hum" 
                  stroke="#cccccc" 
                  strokeWidth={1.5} 
                  fill="transparent" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Activity Logs Sidebar */}
        <Card className="xl:col-span-4 rounded-none border-gray-30 shadow-none bg-gray-10 p-8 overflow-hidden h-full text-gray-90">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-[11px] uppercase tracking-[0.3em] font-black text-gray-90 italic">Event Logs</h3>
            <MoreHorizontal className="w-4 h-4 text-gray-400" />
          </div>
          <div className="space-y-6">
            {mockLogs.map((log, i) => (
              <div key={log.id} className="group cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-gray-90 uppercase tracking-tighter group-hover:underline">{log.area}</span>
                    <span className="text-[9px] text-gray-50 uppercase tracking-widest font-medium">{log.type}</span>
                  </div>
                  <Badge 
                    className={cn(
                      "rounded-none text-[8px] font-black tracking-widest px-1.5 py-0 border-none shadow-none",
                      log.status === "OK" ? "bg-gray-20 text-gray-50" : "bg-gray-90 text-gray-10"
                    )}
                  >
                    {log.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-15 border border-gray-30 group-hover:bg-gray-20 transition-colors">
                  <span className="text-lg font-heading font-black tracking-tighter text-gray-600">{log.value}</span>
                  <span className="text-[8px] font-mono font-black text-gray-400 uppercase">{log.date.split(' ')[1]}</span>
                </div>
              </div>
            ))}
          </div>
          <Button variant="ghost" className="w-full mt-12 h-12 border-t border-gray-30 rounded-none text-[9px] uppercase tracking-[0.2em] font-black text-gray-400 hover:text-gray-90 hover:bg-gray-15">
             Ver Registos do Arquivo
          </Button>
        </Card>
      </div>
    </div>
  );
}

