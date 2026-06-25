import { useState, useEffect } from "react";
import { 
  Mic, 
  Cpu, 
  Layers, 
  ArrowRight, 
  Check, 
  X, 
  Play, 
  Pause, 
  Calendar, 
  ArrowUpRight, 
  Sparkles, 
  Shield, 
  Zap, 
  Menu, 
  Clock, 
  Smartphone, 
  FileText, 
  Volume2, 
  Video, 
  CheckCircle2, 
  Building2,
  AlertCircle,
  HelpCircle,
  Users
} from "lucide-react";

// Mock data for the POP Generation Simulator
const SOURCE_PRESETS = [
  {
    id: "whatsapp",
    label: "🎙️ Áudio de WhatsApp",
    desc: "Áudio do supervisor na oficina",
    rawContent: "Rapaziada, para regular a prensa hidráulica de 50 toneladas, primeiro desliga o disjuntor principal por segurança. Depois, confere o nível do óleo no manômetro lateral. Se tiver abaixo de 20 bar, completa. Coloca os óculos de proteção e a luva de raspa antes de acionar a válvula verde de teste.",
    industry: "Metalurgia & Usinagem"
  },
  {
    id: "rascunho",
    label: "📝 Rascunho de Caderno",
    desc: "Anotação rápida com abreviações",
    rawContent: "Procedimento de recebimento doca 4: Conferir nota fiscal com placa do caminhão. Chamar conferente p/ bater lacre. Bater foto da carga antes de descarregar. Se houver avaria, marcar 'R' na planilha de ocorrência. Subir p/ sistema WMS em até 30min.",
    industry: "Logística & Doca"
  },
  {
    id: "pdf_denso",
    label: "📄 Manual de 50 Páginas",
    desc: "Documentação densa antiga",
    rawContent: "Seção 4.1.2: Conforme normas de segurança do trabalho NR-12, a operação de higienização das caldeiras industriais requer purga prévia de condensado, despressurização gradual até 0.2 MPa, abertura lenta da escotilha de inspeção e monitoramento contínuo de gases inflamáveis por detector calibrado.",
    industry: "Alimentos & Bebidas"
  }
];

export default function App() {
  // Navigation active state
  const [activeTab, setActiveTab] = useState("home");
  
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Interactive Simulator States
  const [selectedPreset, setSelectedPreset] = useState(SOURCE_PRESETS[0]);
  const [simulationStep, setSimulationStep] = useState<"idle" | "processing" | "finished">("idle");
  const [processingProgress, setProcessingProgress] = useState(0);
  const [currentStatusText, setCurrentStatusText] = useState("");
  const [activeOutputTab, setActiveOutputTab] = useState<"pop" | "audio" | "video">("pop");
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  
  // Lead Generation modal & states
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadCompany, setLeadCompany] = useState("");
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Simulation runner effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (simulationStep === "processing") {
      setProcessingProgress(0);
      setAudioPlaying(false);
      setVideoPlaying(false);
      
      const statuses = [
        "Lendo rascunhos e áudios originais...",
        "Removendo ruídos de fundo e vícios de linguagem...",
        "Traduzindo para linguagem técnica do chão de fábrica...",
        "Formatando POP conforme padrões de qualidade...",
        "Sintetizando áudio para os operadores...",
        "Renderizando Avatar 3D realista para o vídeo de onboarding...",
        "Ecossistema de conhecimento pronto!"
      ];
      
      interval = setInterval(() => {
        setProcessingProgress((prev) => {
          const next = prev + 5;
          
          // Change status text depending on progress
          const index = Math.min(Math.floor((next / 100) * statuses.length), statuses.length - 1);
          setCurrentStatusText(statuses[index]);
          
          if (next >= 100) {
            clearInterval(interval);
            setSimulationStep("finished");
            setActiveOutputTab("pop");
            return 100;
          }
          return next;
        });
      }, 150);
    }
    return () => clearInterval(interval);
  }, [simulationStep]);

  const handleStartSimulation = () => {
    setSimulationStep("processing");
  };

  const handlePresetChange = (presetId: string) => {
    const preset = SOURCE_PRESETS.find(p => p.id === presetId);
    if (preset) {
      setSelectedPreset(preset);
      setSimulationStep("idle");
    }
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (leadName && leadEmail && leadPhone && leadCompany) {
      setLeadSubmitted(true);
      setTimeout(() => {
        setDemoModalOpen(false);
        setLeadSubmitted(false);
        setLeadName("");
        setLeadEmail("");
        setLeadPhone("");
        setLeadCompany("");
        alert("Sua demonstração foi agendada! Nossa equipe entrará em contato em até 2 horas por WhatsApp.");
      }, 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#02050e] text-gray-100 selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden relative">
      
      {/* Abstract Background Tech Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-indigo-950/15 rounded-full blur-[180px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-950/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* 1. CABEÇALHO (Navbar) */}
      <header className="sticky top-0 z-40 bg-[#02050e]/85 backdrop-blur-md border-b border-slate-900">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo element with placeholder for physical branding */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-lg blur-sm opacity-50 group-hover:opacity-100 transition-opacity"></div>
              {/* Image Placeholder for Logo - Customizable by user */}
              <img 
                src="https://raw.githubusercontent.com/consultoriaccj/treina-ia-landingpage/main/logotreinaia.png" 
                alt="Treina IA Logo" 
                className="relative h-15 w-15 rounded-lg object-cover border border-blue-500/50" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
                Treina IA
              </span>
              <span className="text-[9px] text-blue-400 font-mono tracking-widest uppercase -mt-1">
                Inteligência Operacional
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#problema" 
              onClick={() => setActiveTab("problema")}
              className={`text-sm font-medium transition-colors ${activeTab === "problema" ? "text-blue-400" : "text-gray-400 hover:text-white"}`}
            >
              O Problema
            </a>
            <a 
              href="#solucao" 
              onClick={() => setActiveTab("solucao")}
              className={`text-sm font-medium transition-colors ${activeTab === "solucao" ? "text-blue-400" : "text-gray-400 hover:text-white"}`}
            >
              Nossa Solução
            </a>
            <a 
              href="#como-funciona" 
              onClick={() => setActiveTab("como-funciona")}
              className={`text-sm font-medium transition-colors ${activeTab === "como-funciona" ? "text-blue-400" : "text-gray-400 hover:text-white"}`}
            >
              Como Funciona
            </a>
            <a 
              href="#resultados" 
              onClick={() => setActiveTab("resultados")}
              className={`text-sm font-medium transition-colors ${activeTab === "resultados" ? "text-blue-400" : "text-gray-400 hover:text-white"}`}
            >
              Resultados
            </a>
          </div>

          {/* CTA Header Button (Neon Tech Accent) */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setDemoModalOpen(true)}
              className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-xl"></span>
              <div className="relative px-5 py-2.5 bg-[#030712] rounded-xl transition-colors group-hover:bg-slate-950">
                <span className="relative text-sm font-semibold text-blue-400 group-hover:text-blue-300 flex items-center gap-1.5">
                  Entrar no Ecossistema
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-900 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-2 pb-6 bg-[#02050e] border-b border-slate-900 space-y-3">
            <a 
              href="#problema" 
              onClick={() => { setMobileMenuOpen(false); setActiveTab("problema"); }}
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-400 hover:text-white hover:bg-slate-900"
            >
              O Problema
            </a>
            <a 
              href="#solucao" 
              onClick={() => { setMobileMenuOpen(false); setActiveTab("solucao"); }}
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-400 hover:text-white hover:bg-slate-900"
            >
              Nossa Solução
            </a>
            <a 
              href="#como-funciona" 
              onClick={() => { setMobileMenuOpen(false); setActiveTab("como-funciona"); }}
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-400 hover:text-white hover:bg-slate-900"
            >
              Como Funciona
            </a>
            <a 
              href="#resultados" 
              onClick={() => { setMobileMenuOpen(false); setActiveTab("resultados"); }}
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-400 hover:text-white hover:bg-slate-900"
            >
              Resultados
            </a>
            <div className="pt-2">
              <button 
                onClick={() => { setMobileMenuOpen(false); setDemoModalOpen(true); }}
                className="w-full text-center py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition-colors"
              >
                Entrar no Ecossistema
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION (Dobra Principal) */}
      <section id="hero" className="relative pt-8 pb-20 md:py-28 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-12 items-center">
          
          {/* Hero text */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Upper Badge */}
            <div className="inline-flex items-center gap-1.5 self-start px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs font-mono font-medium tracking-wide">
              <Sparkles className="h-3.5 w-3.5 text-blue-400 animate-pulse" />
              ✨ GESTÃO DE CONHECIMENTO PARA SUA EMPRESA
            </div>

            {/* Main title */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Clareza em cada treinamento. <br className="hidden lg:inline" />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent underline decoration-blue-500/40 decoration-4 underline-offset-8">
                Segurança em cada processo.
              </span>
            </h1>

            {/* Subtitle description */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              Transforme processos verbais ou documentos densos em vídeos com avatares, trilhas de áudio e manuais em minutos. Uma documentação que atende rigorosamente aos requisitos operacionais do chão de fábrica, garantindo que sua empresa nunca pare, não importa quem saia.
            </p>

            {/* Hero CTA buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a 
                href="#demo-generator" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-xl text-center shadow-lg shadow-blue-900/30 hover:shadow-blue-500/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
              >
                Ver a Solução na Prática
                <ArrowRight className="h-5 w-5" />
              </a>
              <button 
                onClick={() => setDemoModalOpen(true)}
                className="px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-gray-300 font-semibold rounded-xl text-center border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="h-5 w-5 text-blue-400" />
                Agendar Demo
              </button>
            </div>

            {/* Hero Stats Card / Banner */}
            <div className="pt-4">
              <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-r from-[#0d162c] to-[#040915] p-5 border border-blue-950">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-400 mt-0.5">
                    <Clock className="h-5 w-5 animate-pulse" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-blue-500 font-bold">O Custo do Onboarding Tradicional</span>
                    <p className="text-gray-300 font-medium text-sm mt-0.5 leading-relaxed">
                      De <span className="text-red-400 font-bold">6 a 12 meses</span>: O tempo que você perde hoje treinando um novo colaborador. Reduza para <span className="text-green-400 font-bold">15 dias</span> com a Treina IA.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Hero Mockup / Interactive Dashboard preview */}
          <div id="demo-generator" className="md:col-span-5 relative">
            <div className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-[80px] pointer-events-none"></div>
            
            {/* Main Interactive Terminal Card (Glassmorphism design) */}
            <div className="relative bg-[#070b15]/90 rounded-2xl border border-slate-800 p-6 shadow-2xl">
              
              {/* Header bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                </div>
                <div className="text-[11px] font-mono text-gray-500 tracking-wider flex items-center gap-1 bg-slate-900/60 px-3 py-1 rounded-full border border-slate-800/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping"></span>
                  MOTOR_IA_ONLINE
                </div>
              </div>

              {/* Step 1: Input selection */}
              {simulationStep === "idle" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-blue-400" />
                    <h3 className="font-display font-bold text-sm text-gray-200">Simulador de Geração Multimodal</h3>
                  </div>
                  <p className="text-xs text-gray-400">Escolha uma entrada abaixo para simular o motor da Treina IA:</p>

                  {/* Preset Selector buttons */}
                  <div className="grid grid-cols-1 gap-2.5">
                    {SOURCE_PRESETS.map((preset) => (
                      <button
                        key={preset.id}
                        onClick={() => handlePresetChange(preset.id)}
                        className={`w-full text-left p-3 rounded-xl transition-all border ${
                          selectedPreset.id === preset.id
                            ? "bg-blue-950/40 border-blue-500/70 text-white shadow-md shadow-blue-950/60"
                            : "bg-slate-900/30 border-slate-800/80 text-gray-400 hover:bg-slate-900/60 hover:border-slate-700 hover:text-gray-200"
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-semibold">{preset.label}</span>
                          <span className="text-[9px] font-mono bg-slate-800 px-2 py-0.5 rounded text-gray-300">
                            {preset.industry}
                          </span>
                        </div>
                        <p className="text-[10px] text-gray-400 line-clamp-1 italic">
                          &ldquo;{preset.rawContent}&rdquo;
                        </p>
                      </button>
                    ))}
                  </div>

                  {/* Raw content preview */}
                  <div className="p-3.5 bg-slate-950/90 rounded-xl border border-slate-800 font-mono text-[11px] text-slate-300 relative">
                    <div className="absolute top-2 right-2 text-[9px] font-mono text-gray-600">Entrada Bruta</div>
                    <p className="leading-relaxed mt-1 line-clamp-3">
                      {selectedPreset.rawContent}
                    </p>
                  </div>

                  {/* Action button */}
                  <button
                    onClick={handleStartSimulation}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-blue-900/30 hover:shadow-blue-500/10 flex items-center justify-center gap-2 mt-4"
                  >
                    <Cpu className="h-4 w-4" />
                    Transformar em Ecossistema Digital
                  </button>
                </div>
              )}

              {/* Step 2: Processing screen */}
              {simulationStep === "processing" && (
                <div className="py-12 flex flex-col items-center justify-center space-y-6">
                  <div className="relative">
                    {/* Glowing outer rings */}
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl scale-125 animate-pulse"></div>
                    <div className="w-16 h-16 rounded-full border-4 border-blue-950 border-t-blue-500 animate-spin flex items-center justify-center relative">
                      <Cpu className="h-6 w-6 text-blue-400 animate-pulse" />
                    </div>
                  </div>
                  <div className="text-center space-y-2 w-full px-4">
                    <p className="text-sm font-semibold text-white">{currentStatusText}</p>
                    
                    {/* Custom animated bar */}
                    <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full transition-all duration-150 rounded-full" 
                        style={{ width: `${processingProgress}%` }}
                      ></div>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">{processingProgress}% PROCESSADO</span>
                  </div>
                </div>
              )}

              {/* Step 3: Finished output screen */}
              {simulationStep === "finished" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      <span className="text-xs font-bold text-green-400">Ecossistema Multimodal Gerado!</span>
                    </div>
                    <button 
                      onClick={() => setSimulationStep("idle")}
                      className="text-[10px] text-gray-500 hover:text-white underline"
                    >
                      Processar outro
                    </button>
                  </div>

                  {/* Tabs for different output options generated */}
                  <div className="grid grid-cols-3 gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800">
                    <button
                      onClick={() => setActiveOutputTab("pop")}
                      className={`py-1.5 text-center text-[11px] font-medium rounded-md transition-colors flex items-center justify-center gap-1 ${
                        activeOutputTab === "pop" 
                          ? "bg-slate-900 text-blue-400 border border-slate-800" 
                          : "text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      <FileText className="h-3 w-3" />
                      Manual POP
                    </button>
                    <button
                      onClick={() => setActiveOutputTab("audio")}
                      className={`py-1.5 text-center text-[11px] font-medium rounded-md transition-colors flex items-center justify-center gap-1 ${
                        activeOutputTab === "audio" 
                          ? "bg-slate-900 text-blue-400 border border-slate-800" 
                          : "text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      <Volume2 className="h-3 w-3" />
                      Áudio Trilha
                    </button>
                    <button
                      onClick={() => setActiveOutputTab("video")}
                      className={`py-1.5 text-center text-[11px] font-medium rounded-md transition-colors flex items-center justify-center gap-1 ${
                        activeOutputTab === "video" 
                          ? "bg-slate-900 text-blue-400 border border-slate-800" 
                          : "text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      <Video className="h-3 w-3" />
                      Vídeo Avatar
                    </button>
                  </div>

                  {/* Tab Contents */}
                  <div className="bg-slate-950 rounded-xl border border-slate-800 p-4 h-[190px] overflow-y-auto font-sans relative">
                    
                    {/* POP Manual Document Output */}
                    {activeOutputTab === "pop" && (
                      <div className="space-y-3 text-[11px] text-gray-300">
                        <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                          <span className="font-mono text-blue-400 font-bold uppercase tracking-wider">POP-042: OPERAÇÃO SEGURA</span>
                          <span className="text-[9px] bg-blue-950 text-blue-400 px-2 py-0.5 rounded font-mono">NR-12</span>
                        </div>
                        <div className="space-y-2">
                          <p className="font-semibold text-white">⚙️ Etapas Cruciais do Processo:</p>
                          <ul className="list-decimal list-inside space-y-1.5 pl-1">
                            <li><strong className="text-gray-200">Segurança Elétrica:</strong> Desligar o disjuntor de segurança principal antes de qualquer contato interno.</li>
                            <li><strong className="text-gray-200">Manômetro Lateral:</strong> Verificar visualmente o manômetro e certificar que a pressão está ideal para acionamento.</li>
                            <li><strong className="text-gray-200">EPIs Obrigatórios:</strong> Uso de óculos de proteção com proteção lateral e luva de raspa de couro.</li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Audio Track Output with visual waveform */}
                    {activeOutputTab === "audio" && (
                      <div className="flex flex-col items-center justify-center h-full space-y-4">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setAudioPlaying(!audioPlaying)}
                            className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors"
                          >
                            {audioPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 fill-white pl-0.5" />}
                          </button>
                          <div>
                            <p className="text-xs font-semibold text-white">AudioTrilha_Supervisor_Sintetizado.mp3</p>
                            <span className="text-[10px] text-gray-400">Trilha de Áudio Dinâmica para Celular</span>
                          </div>
                        </div>

                        {/* Animated wave bars */}
                        <div className="flex items-end gap-1 h-8 w-44">
                          {[3, 6, 8, 4, 9, 2, 6, 8, 4, 7, 5, 8, 4, 9, 3, 5, 7, 2, 4, 8, 5, 2].map((height, i) => (
                            <div
                              key={i}
                              className={`w-1.5 bg-blue-500 rounded-full transition-all duration-300 ${
                                audioPlaying ? "animate-bounce" : "opacity-40"
                              }`}
                              style={{ 
                                height: `${audioPlaying ? height * 10 : height * 4}%`,
                                animationDelay: `${i * 0.05}s`,
                                animationDuration: "1s"
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Video Avatar Output preview */}
                    {activeOutputTab === "video" && (
                      <div className="relative h-full w-full rounded-lg overflow-hidden border border-slate-800 group">
                        
                        {/* Placeholder image representation for Video with Avatar, keeping system visual */}
                        <img 
                          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80" 
                          alt="Video Avatar Generation Screen"
                          className="w-full h-full object-cover opacity-60"
                          referrerPolicy="no-referrer"
                        />
                        
                        {/* Video Frame Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-between p-3">
                          
                          {/* Top badge */}
                          <div className="self-start bg-blue-600 text-[9px] font-mono font-bold px-2 py-0.5 rounded-full flex items-center gap-1 text-white">
                            <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
                            AVATAR OPERACIONAL
                          </div>

                          {/* Center Play Button */}
                          <button
                            onClick={() => setVideoPlaying(!videoPlaying)}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-black/60 hover:bg-black/85 text-blue-400 hover:text-white rounded-full border border-blue-500/40 transition-all scale-95 hover:scale-105"
                          >
                            {videoPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 fill-blue-400 pl-0.5" />}
                          </button>

                          {/* Bottom video controls layout */}
                          <div className="flex items-center justify-between text-[10px] text-gray-300 font-mono">
                            <span>0:14 / 1:25</span>
                            <div className="w-24 bg-slate-900 h-1 rounded-full overflow-hidden">
                              <div className="bg-blue-500 h-full w-1/5"></div>
                            </div>
                          </div>

                        </div>
                      </div>
                    )}

                  </div>

                  <button
                    onClick={() => setDemoModalOpen(true)}
                    className="w-full py-2.5 bg-blue-950/80 hover:bg-blue-900/80 text-blue-400 text-xs font-semibold rounded-xl border border-blue-500/30 transition-colors text-center"
                  >
                    Salvar e Importar para Minha Fábrica
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* 3. SEÇÃO DE AGITAÇÃO (A Dor) */}
      <section id="problema" className="py-20 bg-gradient-to-b from-[#02050e] to-[#040818] border-y border-slate-900/60 relative">
        <div className="absolute top-10 left-10 w-64 h-64 bg-red-950/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-blue-500 font-mono text-xs tracking-wider uppercase font-bold">Vazamento de Conhecimento Operacional</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Somos o motor que impede que sua operação pare quando as pessoas saem.
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-2"></div>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed pt-2">
              O chão de fábrica não tem tempo para ler PDFs de 50 páginas. Entregamos clareza operacional onde antes havia confusão. A Treina IA garante que a inteligência da sua operação fique na empresa, não apenas na cabeça de alguns funcionários.
            </p>
          </div>

          {/* Visual Grid representing the Leakage/Loss comparison */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Case 1: The Pain */}
            <div className="bg-red-950/10 border border-red-900/20 rounded-2xl p-6 sm:p-8 relative">
              <div className="absolute top-4 right-4 text-[10px] font-mono text-red-500 bg-red-950 px-2 py-0.5 rounded border border-red-900/30">CENÁRIO CRÍTICO</div>
              <h3 className="font-display font-extrabold text-xl text-red-400 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-500" />
                Sem a Treina IA
              </h3>
              <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                Toda vez que um operador experiente do chão de fábrica sai da sua indústria, ocorre uma quebra de produtividade crônica:
              </p>
              
              <ul className="mt-5 space-y-3 text-xs text-gray-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Supervisores perdem horas preciosas repetindo o mesmo treinamento técnico exaustivamente.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Documentação empilhada em pastas físicas ou PDFs de 50 páginas que ninguém lê.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Quebra de máquinas caríssimas devido a erros simples de novos colaboradores.</span>
                </li>
              </ul>
            </div>

            {/* Case 2: The Solution - Treina IA */}
            <div className="bg-blue-950/10 border border-blue-500/20 rounded-2xl p-6 sm:p-8 relative shadow-lg shadow-blue-950/10">
              <div className="absolute top-4 right-4 text-[10px] font-mono text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-800/30">CONHECIMENTO VITALÍCIO</div>
              <h3 className="font-display font-extrabold text-xl text-blue-400 flex items-center gap-2">
                <Check className="h-5 w-5 flex-shrink-0 text-blue-400 bg-blue-950 rounded-full p-0.5" />
                Com a Treina IA
              </h3>
              <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                A inteligência crítica da sua fábrica é digitalizada, blindada e estruturada imediatamente:
              </p>
              
              <ul className="mt-5 space-y-3 text-xs text-gray-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>A base de conhecimento operacional é extraída do WhatsApp ou rascunhos em minutos.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Operadores consomem manuais em áudio e vídeo com avatares diretamente no smartphone.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Conformidade total e segurança operacional contínua, independentemente de trocas na equipe.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 4. COMO FUNCIONA (Processo em 3 Passos lado a lado) */}
      <section id="como-funciona" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-blue-500 font-mono text-xs tracking-wider uppercase font-bold">Fluxo Automatizado</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Como Funciona o Ecossistema
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Uma plataforma completa desenvolvida especificamente para a realidade dinâmica das indústrias modernas.
          </p>
        </div>

        {/* 3 Steps responsive flex/grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="relative group bg-slate-900/30 hover:bg-slate-900/50 border border-slate-800/80 hover:border-blue-900/50 rounded-2xl p-6 transition-all">
            <div className="absolute top-4 right-4 font-mono text-3xl font-extrabold text-slate-800/80">01</div>
            
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 transition-transform">
              <Mic className="h-6 w-6" />
            </div>

            <h3 className="font-display font-bold text-lg text-white mb-2">
              Captura Inteligente
            </h3>
            <p className="text-xs font-mono text-blue-500 mb-3 uppercase tracking-wider">
              Envie o Rascunho, a IA Estrutura
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Faça o upload de áudios do WhatsApp, rascunhos rasgados ou grave o supervisor explicando o processo na prática. Nosso algoritmo processa dialetos e ruídos operacionais facilmente.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative group bg-slate-900/30 hover:bg-slate-900/50 border border-slate-800/80 hover:border-blue-900/50 rounded-2xl p-6 transition-all">
            <div className="absolute top-4 right-4 font-mono text-3xl font-extrabold text-slate-800/80">02</div>
            
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 transition-transform">
              <Cpu className="h-6 w-6 animate-spin-slow" />
            </div>

            <h3 className="font-display font-bold text-lg text-white mb-2">
              Motor de Inteligência
            </h3>
            <p className="text-xs font-mono text-blue-500 mb-3 uppercase tracking-wider">
              Inteligência Operacional Ativa
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Nossa inteligência processa os dados brutos e estrutura tudo automaticamente na linguagem exata da sua operação. Corrigimos vícios de linguagem e focamos na segurança operacional em conformidade com normas.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative group bg-slate-900/30 hover:bg-slate-900/50 border border-slate-800/80 hover:border-blue-900/50 rounded-2xl p-6 transition-all">
            <div className="absolute top-4 right-4 font-mono text-3xl font-extrabold text-slate-800/80">03</div>
            
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 transition-transform">
              <Layers className="h-6 w-6" />
            </div>

            <h3 className="font-display font-bold text-lg text-white mb-2">
              Ecossistema Multimodal
            </h3>
            <p className="text-xs font-mono text-blue-500 mb-3 uppercase tracking-wider">
              Formatos Prontos Práticos
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              A IA gera instantaneamente Manuais (POPs), Trilhas em Áudio e Vídeos com Avatares prontos para o consumo imediato no chão de fábrica. Operadores acessam pelo celular rapidamente.
            </p>
          </div>

        </div>

      </section>

      {/* 5. IMPACTO E MÉTRICAS */}
      <section id="resultados" className="py-20 bg-slate-950/60 border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Visual comparison chart + stats indicators */}
            <div className="md:col-span-6 space-y-6">
              
              {/* Custom visually stunning comparison chart */}
              <div className="bg-[#070b15] border border-slate-800 rounded-2xl p-6 shadow-xl relative">
                <div className="absolute top-4 right-4 font-mono text-[10px] text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded-full border border-blue-800/40">MÉTRICA DE EFICIÊNCIA</div>
                
                <h4 className="font-display font-bold text-base text-gray-200 mb-6 flex items-center gap-2">
                  <Sparkles className="h-4.5 w-4.5 text-blue-400" />
                  Redução Drástica no Onboarding de Operadores
                </h4>

                <div className="space-y-6">
                  
                  {/* Bar 1: Sem Treina IA */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-red-400">Sem Treina IA (Treinamento Tradicional)</span>
                      <span className="text-red-400 font-bold">6 a 12 Meses</span>
                    </div>
                    <div className="relative w-full bg-slate-900/60 h-8 rounded-lg overflow-hidden border border-slate-800/50">
                      {/* Full bar representation */}
                      <div className="absolute inset-y-0 left-0 bg-red-950/50 border-r border-red-500/40 w-full flex items-center px-3">
                        <span className="text-[10px] text-red-300 font-mono">Curva de aprendizagem lenta e dependência física</span>
                      </div>
                    </div>
                  </div>

                  {/* Bar 2: Com Treina IA */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-green-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Com Treina IA
                      </span>
                      <span className="text-green-400 font-extrabold bg-green-950/60 px-2 py-0.5 rounded border border-green-900/30">15 Dias</span>
                    </div>
                    <div className="relative w-full bg-slate-900/60 h-8 rounded-lg overflow-hidden border border-slate-800/50">
                      {/* Glow indicator */}
                      <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg shadow-lg shadow-blue-500/20" style={{ width: "24%" }}></div>
                      <div className="absolute inset-y-0 left-0 flex items-center px-3 z-10">
                        <span className="text-[10px] text-white font-mono font-bold">Eficiência 24x Maior! Onboarding instantâneo</span>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs text-gray-500">
                  <span>* Dados baseados em plantas industriais ativas</span>
                  <span className="text-blue-400 font-mono font-bold">Redução de até 95%</span>
                </div>
              </div>

              {/* Grayscale aligned strategic screenshot/print placeholder */}
              <div className="bg-[#070b15]/40 border border-slate-900/80 rounded-xl p-4 flex items-center gap-4 text-xs text-gray-400">
                <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                  <Smartphone className="h-5 w-5 text-blue-500" />
                </div>
                {/* Print placeholder tag */}
                <div>
                  <span className="font-bold text-gray-300">Print do Sistema:</span>
                  <p className="text-[11px] mt-0.5">Operador acessando o painel de treinamento com QR Code direto do maquinário.</p>
                  {/* Physical img element required by guidelines */}
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&q=80" 
                    alt="Treina IA Smartphone App Preview" 
                    className="mt-2 h-12 w-full object-cover rounded border border-slate-800 opacity-60 filter grayscale hover:grayscale-0 transition-all"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

            </div>

            {/* Typography and key numbers */}
            <div className="md:col-span-6 space-y-6">
              
              <div className="space-y-3">
                <span className="text-blue-500 font-mono text-xs tracking-wider uppercase font-bold">Impacto Financeiro & Operacional</span>
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Curva de Aprendizado: <br />
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">O Impacto Real.</span>
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Reduza o tempo de onboarding e capacitação da sua equipe de 6 a 12 meses para apenas 15 dias. Menos desperdício, menos paradas não planejadas e segurança jurídica absoluta.
                </p>
              </div>

              {/* 3 Key large metric cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                
                <div className="p-5 rounded-2xl bg-slate-900/20 border border-slate-800">
                  <span className="block font-display text-3xl font-extrabold text-blue-400">85%</span>
                  <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider mt-1">DE RETENÇÃO</span>
                  <p className="text-xs text-gray-300 mt-2 font-medium">De conhecimento operacional fixado.</p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/20 border border-slate-800">
                  <span className="block font-display text-3xl font-extrabold text-blue-400">150%</span>
                  <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider mt-1">REDUÇÃO CUSTOS</span>
                  <p className="text-xs text-gray-300 mt-2 font-medium">Melhoria nos custos de turnover.</p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/20 border border-slate-800">
                  <span className="block font-display text-3xl font-extrabold text-blue-400">&lt; 2 Min</span>
                  <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider mt-1">MANUAIS PRONTOS</span>
                  <p className="text-xs text-gray-300 mt-2 font-medium">Gerados instantaneamente.</p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. COMPARAÇÃO DE CENÁRIOS (2 Cards grandes) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-blue-500 font-mono text-xs tracking-wider uppercase font-bold font-bold">Cenários Práticos</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Conhecimento que Fica na Empresa
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Compare o gargalo operacional antigo com a soberania de dados do ecossistema Treina IA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Scenario 1: Traditional */}
          <div className="bg-[#070b15]/40 border border-slate-900 rounded-2xl p-6 sm:p-8 relative transition-all hover:bg-[#070b15]/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <span className="text-xs font-mono text-red-500 font-semibold tracking-wider">MÉTODO ARCAICO</span>
                <span className="text-xs text-gray-500">Custo Elevado</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                Cenário Tradicional
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Processos em papel e planilhas. Manuais de segurança em papel empacados em arquivos que ninguém lê, tempo desperdiçado de supervisores repetindo tarefas manuais e conhecimento vital indo embora junto com o funcionário.
              </p>
            </div>
            
            <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-900 text-xs text-red-400 flex items-center gap-2.5">
              <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
              <span>Gera desperdício de matéria-prima e gargalos operacionais diários.</span>
            </div>
          </div>

          {/* Scenario 2: Treina IA (Borda Azul / Destaque) */}
          <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 group shadow-lg shadow-blue-900/10">
            <div className="bg-[#080d1e] rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                  <span className="text-xs font-mono text-blue-400 font-bold tracking-wider flex items-center gap-1">
                    <Sparkles className="h-3 w-3 animate-pulse" /> ECOSSISTEMA ATIVO
                  </span>
                  <span className="text-xs text-blue-400 font-mono font-bold bg-blue-950 px-2 py-0.5 rounded border border-blue-900/30">Livre de Perdas</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  Ecossistema Treina IA
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  <strong className="text-blue-300">Conhecimento Digital Vitalício.</strong> Treinamentos interativos em vídeo com avatares e áudio que os operadores consomem pelo celular, conformidade de segurança automática e canal de dúvidas tiradas em tempo real direto com a IA.
                </p>
              </div>

              <div className="p-4 bg-blue-950/40 rounded-xl border border-blue-800/40 text-xs text-blue-300 flex items-center gap-2.5">
                <Check className="h-5 w-5 text-blue-400 flex-shrink-0 bg-blue-950 rounded-full p-0.5" />
                <span>Garante produtividade contínua do chão de fábrica, independente de quem saia.</span>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* 7. DIFERENCIAIS (3 Cards) */}
      <section className="py-20 bg-gradient-to-t from-[#02050e] to-[#040818] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-blue-500 font-mono text-xs tracking-wider uppercase font-bold">Por Que Nós?</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Por que indústrias de ponta escolhem a Treina IA?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Nossa tecnologia foi moldada no chão de fábrica, unindo sofisticação de IA com pragmatismo operacional.
            </p>
          </div>

          {/* 3 cards of differentiators */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-slate-900/10 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                Estrutura Operacional Pronta
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Seus documentos já nascem formatados e estruturados para atender perfeitamente aos requisitos operacionais do chão de fábrica e às rígidas conformidades normativas.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-900/10 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                Chat IA Técnico
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Seus operadores tiram dúvidas operacionais complexas instantaneamente usando apenas a base de dados segura e criptografada da sua própria empresa.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-900/10 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                Vídeos e Avatares
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Fim dos textos maçantes. Transformamos rascunhos em conteúdo audiovisual dinâmico para quem está na linha de frente, gerando engajamento e clareza.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 8. RODAPÉ E CTA FINAL */}
      <section className="py-20 relative overflow-hidden bg-slate-950/90 border-t border-slate-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          
          <span className="text-blue-500 font-mono text-xs tracking-wider uppercase font-bold">Inicie a Transformação</span>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Utilizado por Gestores que não aceitam <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              a mediocridade operacional.
            </span>
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Elimine a perda de conhecimento crítico, reduza custos de turnover industrial e blinde seu chão de fábrica contra imprevistos operacionais hoje mesmo.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4">
            <button 
              onClick={() => setDemoModalOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-900/30 hover:scale-[1.01] flex items-center justify-center gap-2"
            >
              Transformar Meus Treinamentos Agora
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Logos of Strategic Partners (Grayscale / Neutral tones) as requested */}
          <div className="pt-16 space-y-6">
            <span className="block text-[10px] font-mono tracking-widest uppercase text-gray-500">
              Parceiros Estratégicos & Apoio
            </span>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto items-center justify-items-center opacity-50 hover:opacity-75 transition-opacity">
              
              {/* Partner 1: Sebrae */}
              <div className="flex flex-col items-center gap-1 border border-slate-900 p-3 rounded-lg bg-slate-900/10 w-full">
                <img 
                  src="https://raw.githubusercontent.com/consultoriaccj/treina-ia-landingpage/main/sebrae.png" 
                  alt="Sebrae" 
                  className="h-40 object-contain filter grayscale" 
                  referrerPolicy="no-referrer"
                />
                <span className="font-mono text-[9px] text-gray-400">SEBRAE</span>
              </div>

              {/* Partner 2: ABStartups */}
              <div className="flex flex-col items-center gap-1 border border-slate-900 p-3 rounded-lg bg-slate-900/10 w-full">
                <img 
                  src="https://raw.githubusercontent.com/consultoriaccj/treina-ia-landingpage/main/abstartups.png"
                  alt="ABStartups" 
                  className="h-40 object-contain filter grayscale" 
                  referrerPolicy="no-referrer"
                />
                <span className="font-mono text-[9px] text-gray-400">ABSTARTUPS</span>
              </div>

              {/* Partner 3: Nexus Lab */}
              <div className="flex flex-col items-center gap-1 border border-slate-900 p-3 rounded-lg bg-slate-900/10 w-full">
                <img 
                  src="https://raw.githubusercontent.com/consultoriaccj/treina-ia-landingpage/main/nexuslab.png" 
                  alt="NexusLab" 
                  className="h-40 object-contain filter grayscale" 
                  referrerPolicy="no-referrer"
                />
                <span className="font-mono text-[9px] text-gray-400">NEXUS LAB</span>
              </div>

              {/* Partner 4: PIT */}
              <div className="flex flex-col items-center gap-1 border border-slate-900 p-3 rounded-lg bg-slate-900/10 w-full">
                <img 
                  src="https://raw.githubusercontent.com/consultoriaccj/treina-ia-landingpage/main/logopit.png" 
                  alt="PIT" 
                  className="h-40 object-contain filter grayscale" 
                  referrerPolicy="no-referrer"
                />
                <span className="font-mono text-[9px] text-gray-400">PIT</span>
              </div>

            </div>
          </div>

        </div>

        {/* Footer information section */}
        <footer className="mt-20 pt-8 border-t border-slate-900 text-xs text-gray-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-3">
              <img 
                src="logotreinaia.png" 
                alt="Treina IA Small Logo" 
                className="h-6 w-6 rounded object-cover filter grayscale"
                referrerPolicy="no-referrer"
              />
              <span>&copy; 2026 Treina IA S.A. Todos os direitos reservados.</span>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-gray-300 transition-colors">Políticas de Privacidade</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Fale Conosco</a>
            </div>

          </div>
        </footer>
      </section>

      {/* LEAD CONVERSION & BOOKING DEMO MODAL */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          
          <div className="relative w-full max-w-md bg-[#0a1020] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl animate-in fade-in duration-200">
            
            {/* Close button */}
            <button 
              onClick={() => setDemoModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-slate-900 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal content */}
            {!leadSubmitted ? (
              <form action="https://formspree.io/f/SEU_CODIGO_AQUI" method="POST" className="space-y-4">
                
                <div className="space-y-1">
                  <span className="text-blue-500 font-mono text-[10px] uppercase font-bold tracking-widest">Acesso Exclusivo</span>
                  <h3 className="font-display font-extrabold text-xl text-white">Agende uma demonstração</h3>
                  <p className="text-xs text-gray-400">Nossos engenheiros de IA irão avaliar o potencial da sua fábrica gratuitamente.</p>
                </div>

                <div className="space-y-3.5 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Seu Nome Completo</label>
                    <input name="nome" 
                      type="text" 
                      required
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      placeholder="Ex: Carlos Silva"
                      className="w-full bg-slate-950/85 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/80 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">E-mail Corporativo</label>
                    <input name="email" 
                      type="email" 
                      required
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      placeholder="Ex: carlos@suaindustria.com.br"
                      className="w-full bg-slate-950/85 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/80 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">WhatsApp de Contato</label>
                      <input name="whatsapp" 
                        type="tel" 
                        required
                        value={leadPhone}
                        onChange={(e) => setLeadPhone(e.target.value)}
                        placeholder="Ex: (11) 99999-9999"
                        className="w-full bg-slate-950/85 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/80 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Sua Empresa</label>
                      <input name="empresa" 
                        type="text" 
                        required
                        value={leadCompany}
                        onChange={(e) => setLeadCompany(e.target.value)}
                        placeholder="Ex: Metalúrgica ABC"
                        className="w-full bg-slate-950/85 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/80 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition-colors shadow-lg shadow-blue-950/40 flex items-center justify-center gap-2 mt-4"
                >
                  <Calendar className="h-4 w-4" />
                  Agendar Meu Horário Grátis
                </button>

                <p className="text-[10px] text-gray-500 text-center">
                  Garantimos total sigilo de dados conforme regras gerais da LGPD.
                </p>

              </form>
            ) : (
              <div className="py-8 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                  <CheckCircle2 className="h-6 w-6 animate-bounce" />
                </div>
                <h4 className="font-display font-extrabold text-lg text-white">Inscrição Enviada com Sucesso!</h4>
                <p className="text-xs text-gray-400 px-4">
                  Obrigado, <strong className="text-white">{leadName}</strong>. Estamos preparando as simulações para a <strong className="text-white">{leadCompany}</strong>. Retornaremos em breve!
                </p>
                <div className="w-10 h-1 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            )}

          </div>

        </div>
      )}

    </div>
  );
}
