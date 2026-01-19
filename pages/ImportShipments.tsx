
import React from 'react';

const ImportShipments: React.FC = () => {
  const shipments = [
    { id: 'SH-99231', dest: 'Lyon Central HUB', weight: '4,200.00', vehicle: 'Camionnette Sprinter', status: 'error', notes: 'Erreur : Le poids (4.2t) dépasse la capacité max (3.5t).' },
    { id: 'SH-99235', dest: 'Marseille Terminal', weight: '850.50', vehicle: 'Camion Caisse', status: 'warning', notes: 'Avertissement : Incohérence géocodage ZIP vs Coordonnées.' },
    { id: 'SH-99238', dest: 'Paris Nord Storage', weight: '1,120.00', vehicle: 'Poids lourd', status: 'success', notes: 'Aucun problème détecté.' },
    { id: 'SH-99241', dest: 'Bordeaux Port', weight: '0.00', vehicle: 'Inconnu', status: 'error', notes: 'Erreur : Poids invalide. Doit être > 0.' },
    { id: 'SH-99244', dest: 'Lille Entrepôt A', weight: '45.00', vehicle: 'Camionnette Sprinter', status: 'success', notes: 'Aucun problème détecté.' },
  ];

  return (
    <main className="max-w-[1440px] mx-auto p-6">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <span>Accueil</span>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span>Expéditions</span>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-gray-900 dark:text-gray-300 font-medium">Import et Validation</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">Import et Validation</h2>
            <p className="text-gray-500 mt-1">Importez vos manifestes Excel pour une validation SYGFR automatisée.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-bold hover:bg-gray-50">
              <span className="material-symbols-outlined text-sm text-primary">download</span>
              Télécharger le Modèle
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-9 space-y-6">
          <div className="bg-white dark:bg-slate-900/50 rounded-xl border-2 border-dashed border-primary/30 dark:border-gray-700 p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <span className="material-symbols-outlined text-3xl">upload_file</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Glissez-déposez vos fichiers Excel ici</h3>
            <p className="text-gray-500 text-sm mt-1 mb-6">Formats supportés : .xlsx, .csv. Fichier : <span className="text-primary font-semibold">manifeste_Q4.xlsx</span></p>
            <div className="flex gap-3">
              <input type="file" id="file-upload" className="hidden" />
              <label htmlFor="file-upload" className="px-6 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primary-dark cursor-pointer">Parcourir</label>
              <button className="px-6 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg font-bold text-sm hover:bg-gray-200 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">refresh</span>
                Ré-importer
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center justify-between bg-white dark:bg-slate-900/50 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Lignes</span>
                <span className="text-xl font-bold dark:text-white">128</span>
              </div>
              <div className="w-px h-8 bg-gray-200 dark:bg-gray-700"></div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-red-500 tracking-wider">Erreurs</span>
                <span className="text-xl font-bold text-red-600">3</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-amber-500 tracking-wider">Avert.</span>
                <span className="text-xl font-bold text-amber-600">12</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-green-500 tracking-wider">Valides</span>
                <span className="text-xl font-bold text-green-600">113</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-semibold hover:bg-gray-50 dark:text-white">Corriger</button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark">Confirmer l'import</button>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900/50 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700">
                  <th className="p-4 text-[11px] font-black uppercase text-gray-500 tracking-widest">Statut</th>
                  <th className="p-4 text-[11px] font-black uppercase text-gray-500 tracking-widest">ID</th>
                  <th className="p-4 text-[11px] font-black uppercase text-gray-500 tracking-widest">Destination</th>
                  <th className="p-4 text-[11px] font-black uppercase text-gray-500 tracking-widest">Poids (kg)</th>
                  <th className="p-4 text-[11px] font-black uppercase text-gray-500 tracking-widest">Véhicule</th>
                  <th className="p-4 text-[11px] font-black uppercase text-gray-500 tracking-widest">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {shipments.map((s, idx) => (
                  <tr key={idx} className={`${s.status === 'error' ? 'bg-red-50/50 dark:bg-red-950/20' : s.status === 'warning' ? 'bg-amber-50/50 dark:bg-amber-950/20' : ''}`}>
                    <td className="p-4">
                      <span className={`material-symbols-outlined ${s.status === 'error' ? 'text-red-600' : s.status === 'warning' ? 'text-amber-600' : 'text-green-600'}`}>
                        {s.status === 'error' ? 'error' : s.status === 'warning' ? 'warning' : 'check_circle'}
                      </span>
                    </td>
                    <td className="p-4 font-mono text-sm dark:text-slate-300">{s.id}</td>
                    <td className="p-4 text-sm font-semibold dark:text-slate-200">{s.dest}</td>
                    <td className="p-4 text-sm font-mono dark:text-slate-300">{s.weight}</td>
                    <td className="p-4 text-sm dark:text-slate-400">{s.vehicle}</td>
                    <td className={`p-4 text-xs font-semibold ${s.status === 'error' ? 'text-red-700' : s.status === 'warning' ? 'text-amber-700' : 'text-slate-400 italic'}`}>
                      {s.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white dark:bg-slate-900/50 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="bg-primary px-4 py-3 flex items-center justify-between">
              <h3 className="text-white font-bold text-sm tracking-wide uppercase">Règles de Validation</h3>
              <span className="material-symbols-outlined text-white text-lg">settings_suggest</span>
            </div>
            <div className="p-4 space-y-4">
              <div className="pb-4 border-b border-gray-100 dark:border-gray-800">
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-black dark:text-white uppercase">Capacité</span>
                  <span className="px-1.5 py-0.5 bg-green-100 text-green-700 text-[10px] font-black rounded uppercase">Active</span>
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed">Vérifie PTAC vs Poids.</p>
              </div>
              <div className="pb-4 border-b border-gray-100 dark:border-gray-800">
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-black dark:text-white uppercase">Géocodage</span>
                  <span className="px-1.5 py-0.5 bg-green-100 text-green-700 text-[10px] font-black rounded uppercase">Active</span>
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed">Valide via base SYGFR.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ImportShipments;
