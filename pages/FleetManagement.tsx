import React, { useState } from 'react';

const FleetManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vehicles' | 'drivers'>('vehicles');

  const vehicles = [
    {
      id: 'TR-9021',
      name: 'Volvo FH-540 Global',
      plate: '88-XG-202',
      type: 'Poids Lourd',
      load: '15.0 t',
      fuel: 'HVO Bio',
      loc: 'Lyon, FR',
      img: 'https://images.unsplash.com/photo-1586191582151-f73901625906?q=80&w=800&auto=format&fit=crop',
      status: 'active',
      insurance: 'valide',
      techControl: 'warning'
    },
    {
      id: 'VN-4402',
      name: 'Mercedes Sprinter EV',
      plate: '44-BB-900',
      type: 'Utilitaire',
      load: '1.2 t',
      fuel: 'Électrique',
      loc: 'Paris, FR',
      img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop',
      status: 'available',
      insurance: 'valide',
      techControl: 'valide'
    },
    {
      id: 'TR-1188',
      name: 'MAN TGX 2024 Performance',
      plate: '11-MN-888',
      type: 'Poids Lourd',
      load: '18.0 t',
      fuel: 'GNL',
      loc: 'Atelier Central',
      img: 'https://images.unsplash.com/photo-1606148695344-70bc3ad7742b?q=80&w=800&auto=format&fit=crop',
      status: 'maintenance',
      insurance: 'expired',
      techControl: 'valide'
    },
    {
      id: 'TR-5520',
      name: 'Scania R450 Streamline',
      plate: 'AA-555-ZZ',
      type: 'Poids Lourd',
      load: '22.0 t',
      fuel: 'Diesel Euro 6',
      loc: 'Bordeaux, FR',
      img: 'https://images.unsplash.com/photo-1591768793355-74d7c80b0e17?q=80&w=800&auto=format&fit=crop',
      status: 'active',
      insurance: 'valide',
      techControl: 'valide'
    }
  ];

  return (
    <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-12">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <span className="size-2 rounded-full bg-primary animate-ping"></span>
            Supervision Flotte • SYGFR v2.4
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-slate-900 dark:text-white leading-[0.9]">
            Pilotage <span className="text-primary">Actifs</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-xl leading-relaxed font-medium">
            Gestion centralisée de la conformité, de la maintenance et de l'exploitation de vos unités mobiles en temps réel.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="h-14 px-8 bg-primary text-white rounded-2xl font-black text-sm hover:bg-primary-dark shadow-2xl shadow-primary/30 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">add_circle</span>
            Ajouter Unité
          </button>
        </div>
      </div>

      <div className="flex items-center gap-12 border-b border-slate-200 dark:border-slate-800 mb-10 overflow-x-auto pb-px">
        <button
          onClick={() => setActiveTab('vehicles')}
          className={`relative pb-6 font-black text-xs uppercase tracking-widest transition-all min-w-max ${
            activeTab === 'vehicles' ? 'text-primary' : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          Véhicules Motorisés (24)
          {activeTab === 'vehicles' && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full"></div>}
        </button>
        <button
          onClick={() => setActiveTab('drivers')}
          className={`relative pb-6 font-black text-xs uppercase tracking-widest transition-all min-w-max ${
            activeTab === 'drivers' ? 'text-primary' : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          Conducteurs Actifs (18)
          {activeTab === 'drivers' && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full"></div>}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {vehicles.map((v) => (
          <div key={v.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
            <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img 
                src={v.img} 
                alt={v.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1586191582151-f73901625906?q=80&w=800&auto=format&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute top-5 left-5 flex flex-col gap-2">
                <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest text-slate-900">
                  {v.type}
                </span>
              </div>

              <div className={`absolute top-5 right-5 px-4 py-2 rounded-xl backdrop-blur-xl border border-white/20 text-[10px] font-black uppercase tracking-widest text-white flex items-center gap-2 shadow-2xl ${
                v.status === 'available' ? 'bg-emerald-500/80' : v.status === 'maintenance' ? 'bg-rose-500/80' : 'bg-primary/80'
              }`}>
                {v.status}
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center text-white">
                <span className="text-xs font-mono font-bold tracking-widest bg-black/30 backdrop-blur-md px-2 py-1 rounded-md">{v.plate}</span>
              </div>
            </div>

            <div className="p-8">
              <h3 className="font-black text-2xl dark:text-white tracking-tighter mb-6 leading-tight group-hover:text-primary transition-colors">
                {v.name}
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <span className="text-[9px] uppercase text-slate-400 font-black tracking-widest block mb-1">Capacité</span>
                  <span className="text-sm font-bold dark:text-slate-200">{v.load}</span>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <span className="text-[9px] uppercase text-slate-400 font-black tracking-widest block mb-1">Énergie</span>
                  <span className="text-sm font-bold dark:text-slate-200 truncate">{v.fuel}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-8 text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span className="text-sm font-bold dark:text-slate-200">{v.loc}</span>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Assurance</span>
                  <div className={`px-3 py-1 text-[9px] font-black uppercase rounded-lg ${
                    v.insurance === 'expired' ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'
                  }`}>
                    {v.insurance}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Contrôle Tech.</span>
                  <div className={`px-3 py-1 text-[9px] font-black uppercase rounded-lg ${
                    v.techControl === 'warning' ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'
                  }`}>
                    {v.techControl === 'warning' ? 'À prévoir' : 'Conforme'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FleetManagement;