
import React, { useState } from 'react';

const Planning: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <main className="flex-1 flex flex-col h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] overflow-hidden bg-white dark:bg-background-dark">
      {/* Subheader */}
      <div className="px-4 md:px-8 py-4 md:py-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 z-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-col">
            <h1 className="text-slate-900 dark:text-white text-2xl md:text-3xl font-black leading-none tracking-tighter flex items-center gap-3">
              Planning Interactif
              <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg">Auto-Score</span>
            </h1>
            <p className="text-slate-500 text-sm mt-1">Affectation dynamique des expéditions aux ressources.</p>
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden flex-1 h-10 px-4 bg-slate-100 dark:bg-slate-800 rounded-xl font-bold text-xs flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">
                {isSidebarOpen ? 'visibility_off' : 'visibility'}
              </span>
              {isSidebarOpen ? 'Cacher File' : 'Voir File'}
            </button>
            <button className="flex-1 sm:flex-none h-10 px-4 bg-slate-100 dark:bg-slate-800 rounded-xl font-bold text-xs flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span>24-30 Oct.</span>
            </button>
            <button className="h-10 w-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined">auto_fix_high</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden relative">
        {/* Waiting Sidebar */}
        <aside className={`
          fixed md:relative inset-y-0 left-0 z-30
          w-[320px] md:w-[360px] lg:w-[400px] 
          bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800
          transition-transform duration-300 ease-in-out flex flex-col
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:hidden'}
        `}>
          <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">File d'attente</h3>
              <span className="bg-primary/10 text-primary text-[11px] px-2 py-1 rounded-full font-black">128</span>
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
              <input className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/20" placeholder="Réf. expédition..." />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="group p-5 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-primary hover:shadow-lg transition-all cursor-grab active:scale-95">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">EXP-2900{i}</span>
                    <h4 className="font-black text-sm dark:text-white">Fret Industriel • Cat C</h4>
                  </div>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">drag_indicator</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 bg-slate-50 dark:bg-slate-700 px-2.5 py-1.5 rounded-lg border border-slate-100 dark:border-slate-600">
                    <span className="material-symbols-outlined text-[14px]">weight</span>
                    {i * 1.5}t
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 bg-slate-50 dark:bg-slate-700 px-2.5 py-1.5 rounded-lg border border-slate-100 dark:border-slate-600">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    {['Lyon', 'Paris', 'Marseille'][i % 3]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Timeline Section */}
        <section className="flex-1 flex flex-col bg-slate-50 dark:bg-background-dark overflow-hidden">
          {/* Timeline Header (Drivers/Vehicles) */}
          <div className="flex-none bg-white/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 backdrop-blur-sm sticky top-0 z-10">
            <div className="flex min-w-[800px] divide-x divide-slate-100 dark:divide-slate-800">
              {['M. Lefebvre', 'E. Rossi', 'J. Schmidt', 'L. Blanc'].map((name, idx) => (
                <div key={idx} className="flex-1 p-4 md:p-6 min-w-[200px]">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xs shadow-lg ring-4 ring-slate-100 dark:ring-slate-800">
                      V-{idx+1}
                    </div>
                    <div>
                      <p className="text-sm font-black dark:text-white leading-tight">{name}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Scania R450</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Grid (Scrollable area) */}
          <div className="flex-1 overflow-auto p-4 md:p-8 relative">
            <div className="min-w-[800px] h-[1000px] relative">
               {/* Vertical Grid Lines */}
               <div className="absolute inset-0 flex justify-between pointer-events-none opacity-20">
                  <div className="w-px h-full bg-slate-300 dark:bg-slate-700 ml-[25%]"></div>
                  <div className="w-px h-full bg-slate-300 dark:bg-slate-700 ml-[25%]"></div>
                  <div className="w-px h-full bg-slate-300 dark:bg-slate-700 ml-[25%]"></div>
               </div>

               {/* Time Markers */}
               <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-[10px] font-black text-slate-300 uppercase pointer-events-none">
                  <span>08h</span>
                  <span>10h</span>
                  <span>12h</span>
                  <span>14h</span>
                  <span>16h</span>
                  <span>18h</span>
                  <span>20h</span>
               </div>

               {/* Mock Planning Blocks */}
               <div className="absolute top-[80px] left-[2.5%] w-[20%] h-[180px] bg-primary text-white p-4 rounded-3xl shadow-2xl shadow-primary/30 border-t-4 border-white/20 hover:scale-[1.02] transition-transform cursor-pointer group">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-80">En Transit</span>
                    <span className="material-symbols-outlined text-[18px]">share_location</span>
                  </div>
                  <h5 className="font-black text-sm tracking-tight mb-1">Paris HUB → Marseille A1</h5>
                  <p className="text-[10px] font-bold opacity-70">14,200kg • Plein: 92%</p>
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-green-400 animate-ping"></span>
                    <span className="text-[9px] font-black uppercase tracking-widest">Temps réel: +4m</span>
                  </div>
               </div>

               <div className="absolute top-[320px] left-[27.5%] w-[20%] h-[120px] bg-white dark:bg-slate-800 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-3xl flex flex-col items-center justify-center p-6 text-center group hover:border-primary transition-colors">
                  <div className="size-10 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center mb-2 group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary">add</span>
                  </div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Assigner ici</p>
               </div>
            </div>
          </div>

          {/* Bottom Summary / Toolbar */}
          <footer className="flex-none px-4 md:px-10 py-5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-6 z-20">
            <div className="flex flex-wrap gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-black uppercase text-slate-400 tracking-[0.2em]">Usage Flotte</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 md:w-48 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-gradient-to-r from-primary to-primary-dark"></div>
                  </div>
                  <span className="text-sm font-black dark:text-white">82%</span>
                </div>
              </div>
              <div className="hidden sm:flex flex-col gap-2 border-l border-slate-100 dark:border-slate-800 pl-8">
                <span className="text-[9px] font-black uppercase text-slate-400 tracking-[0.2em]">Score Optim.</span>
                <div className="flex items-center gap-1.5 text-green-500 font-black">
                  <span className="material-symbols-outlined text-[20px]">verified</span>
                  <span className="text-sm tracking-tighter">Excellent (A+)</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none h-12 px-6 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm font-bold dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Réinitialiser</button>
              <button className="flex-1 sm:flex-none h-12 px-8 bg-primary text-white rounded-2xl text-sm font-black flex items-center justify-center gap-2 shadow-2xl shadow-primary/30 hover:bg-primary-dark transition-all active:scale-95">
                <span className="material-symbols-outlined text-[20px]">verified_user</span>
                Valider Planning
              </button>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
};

export default Planning;
