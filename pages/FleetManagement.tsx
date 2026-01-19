import React, { useState } from 'react';

const FleetManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vehicles' | 'drivers'>('vehicles');

  const vehicles = [
    {
      id: 'TR-9021',
      name: 'Volvo FH-540',
      plate: '88-XG-202',
      type: 'Poids Lourd',
      load: '15.0 t',
      volume: '80 m³',
      fuel: 'HVO',
      loc: 'Lyon, FR',
      img: 'https://images.unsplash.com/photo-1606148695344-70bc3ad7742b?q=80&w=1000&auto=format&fit=crop',
      status: 'active',
      insurance: 'valide',
      techControl: 'warning'
    },
    {
      id: 'VN-4402',
      name: 'Mercedes Sprinter',
      plate: '44-BB-900',
      type: 'Utilitaire',
      load: '1.2 t',
      volume: '15 m³',
      fuel: 'Élec.',
      loc: 'Paris, FR',
      img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop',
      status: 'available',
      insurance: 'valide',
      techControl: 'valide'
    },
    {
        id: 'TR-1188',
        name: 'MAN TGX 2024',
        plate: '11-MN-888',
        type: 'Poids Lourd',
        load: '18.0 t',
        volume: '90 m³',
        fuel: 'GNL',
        loc: 'Atelier',
        img: 'https://images.unsplash.com/photo-1586191582151-f73901625906?q=80&w=1000&auto=format&fit=crop',
        status: 'maintenance',
        insurance: 'expired',
        techControl: 'valide'
      }
  ];

  return (
    <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-12">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-primary text-xs font-black uppercase tracking-wider mb-3">
            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
            Intégration SYGFR • Temps réel
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-slate-900 dark:text-white">
            Gestion de <span className="text-primary">Flotte</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed">
            Monitorez l'état, la conformité et la localisation de vos actifs en temps réel via le hub logistique centralisé.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 border border-slate-200 dark:border-slate-800 rounded-xl font-bold text-sm bg-white dark:bg-slate-900 hover:bg-slate-50 transition-all shadow-sm">
            <span className="material-symbols-outlined text-[20px]">tune</span>
            Filtres
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary-dark shadow-xl shadow-primary/25 transition-all">
            <span className="material-symbols-outlined text-[20px]">add</span>
            Nouveau
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 mb-8 overflow-x-auto">
        <div className="flex gap-8 min-w-max">
          <button
            onClick={() => setActiveTab('vehicles')}
            className={`flex items-center gap-2 pb-4 pt-2 font-bold text-sm tracking-tight border-b-2 transition-all ${
              activeTab === 'vehicles' ? 'border-primary text-primary' : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">truck_tag</span>
            Véhicules (24)
          </button>
          <button
            onClick={() => setActiveTab('drivers')}
            className={`flex items-center gap-2 pb-4 pt-2 font-bold text-sm tracking-tight border-b-2 transition-all ${
              activeTab === 'drivers' ? 'border-primary text-primary' : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">person_apron</span>
            Chauffeurs (18)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {vehicles.map((v) => (
          <div key={v.id} className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
            <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img 
                src={v.img} 
                alt={v.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1586191582151-f73901625906?q=80&w=800&auto=format&fit=crop';
                }}
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="bg-white/90 dark:bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                  {v.type}
                </div>
              </div>
              <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 text-[10px] font-black uppercase tracking-widest text-white flex items-center gap-1.5 ${
                v.status === 'available' ? 'bg-green-500/80' : v.status === 'maintenance' ? 'bg-red-500/80' : 'bg-primary/80'
              }`}>
                <span className="size-1.5 rounded-full bg-white animate-pulse"></span>
                {v.status}
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-black text-xl leading-tight dark:text-white tracking-tight">{v.name}</h3>
                  <p className="text-xs text-slate-400 font-mono mt-1.5 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">id_card</span>
                    {v.plate}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-black text-primary bg-primary/10 px-2 py-1 rounded-lg uppercase tracking-wider">{v.id}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-4 mb-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase text-slate-400 font-black tracking-widest mb-1">Capacité</span>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{v.load}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase text-slate-400 font-black tracking-widest mb-1">Énergie</span>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{v.fuel}</span>
                </div>
                <div className="flex flex-col col-span-2">
                  <span className="text-[9px] uppercase text-slate-400 font-black tracking-widest mb-1">Dernier Checkpoint</span>
                  <span className={`text-sm font-bold flex items-center gap-1 ${v.status === 'maintenance' ? 'text-red-500' : 'text-slate-700 dark:text-slate-200'}`}>
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    {v.loc}
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">
                    Assurance
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    v.insurance === 'expired' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                  }`}>
                    <span className="material-symbols-outlined text-[14px]">{v.insurance === 'expired' ? 'cancel' : 'check_circle'}</span>
                    {v.insurance}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">
                    Contrôle Tech.
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    v.techControl === 'warning' ? 'bg-amber-100 text-amber-600' : 'bg-green-100 text-green-600'
                  }`}>
                    <span className="material-symbols-outlined text-[14px]">{v.techControl === 'warning' ? 'pending' : 'check_circle'}</span>
                    {v.techControl === 'warning' ? 'À prévoir' : 'OK'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Utilisation', val: '84%', icon: 'bolt', color: 'text-primary' },
          { label: 'En Transit', val: '12', icon: 'local_shipping', color: 'text-blue-500' },
          { label: 'Alerte Maintenance', val: '2', icon: 'error', color: 'text-red-500' },
          { label: 'Conformité', val: '98.2%', icon: 'verified', color: 'text-green-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
            <div className={`size-12 rounded-2xl flex items-center justify-center bg-slate-50 dark:bg-slate-800 ${stat.color}`}>
              <span className="material-symbols-outlined text-[28px]">{stat.icon}</span>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{stat.label}</p>
              <p className="text-xl md:text-2xl font-black dark:text-white tracking-tighter">{stat.val}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FleetManagement;