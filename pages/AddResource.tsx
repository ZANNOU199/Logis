
import React, { useState } from 'react';
import { ResourceType } from '../types';

const AddResource: React.FC = () => {
  const [resourceType, setResourceType] = useState<ResourceType>(ResourceType.DRIVER);

  return (
    <main className="max-w-[1000px] mx-auto px-4 py-10">
      <div className="mb-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#101818] dark:text-white text-4xl font-black leading-tight tracking-tight">Ajouter une Ressource Flotte</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">Intégrez de nouveaux chauffeurs ou véhicules pour optimiser vos flux logistiques.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900/50 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex max-w-sm mb-8">
        <button
          onClick={() => setResourceType(ResourceType.DRIVER)}
          className={`flex-1 flex items-center justify-center h-10 rounded-lg font-bold transition-all ${
            resourceType === ResourceType.DRIVER ? 'bg-primary text-white' : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          <span className="material-symbols-outlined mr-2 text-[20px]">person</span>
          Chauffeur
        </button>
        <button
          onClick={() => setResourceType(ResourceType.VEHICLE)}
          className={`flex-1 flex items-center justify-center h-10 rounded-lg font-bold transition-all ${
            resourceType === ResourceType.VEHICLE ? 'bg-primary text-white' : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          <span className="material-symbols-outlined mr-2 text-[20px]">local_shipping</span>
          Véhicule
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form className="space-y-6">
            <div className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <h2 className="text-slate-900 dark:text-white text-xl font-bold">
                  {resourceType === ResourceType.DRIVER ? 'Informations Personnelles' : 'Détails du Véhicule'}
                </h2>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">Étape 1 sur 2</span>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {resourceType === ResourceType.DRIVER ? (
                  <>
                    <div className="col-span-2">
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Nom Complet</label>
                      <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-primary outline-none transition-all text-slate-900 dark:text-white" placeholder="Ex: Marc Lefebvre" type="text" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Numéro de Téléphone</label>
                      <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white" placeholder="+33 6 12 34 56 78" type="tel" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Numéro de Badge SYGFR</label>
                      <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white" placeholder="ID-882944" type="text" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-span-2">
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Marque & Modèle</label>
                      <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white" placeholder="Ex: Volvo FH-540" type="text" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Immatriculation</label>
                      <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white" placeholder="AB-123-CD" type="text" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Type de Véhicule</label>
                      <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white">
                        <option>Poids Lourd</option>
                        <option>Utilitaire</option>
                        <option>Remorque</option>
                      </select>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                <h2 className="text-slate-900 dark:text-white text-xl font-bold">Documents & Conformité</h2>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {resourceType === ResourceType.DRIVER ? 'Type de Permis' : 'Assurance Valide Jusqu\'au'}
                  </label>
                  {resourceType === ResourceType.DRIVER ? (
                    <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white">
                      <option>Permis B (Léger)</option>
                      <option>Permis C (Poids Lourd)</option>
                      <option>Permis EC (Super Lourd)</option>
                    </select>
                  ) : (
                    <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white" type="date" />
                  )}
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {resourceType === ResourceType.DRIVER ? 'Validité du Permis' : 'Contrôle Technique'}
                  </label>
                  <div className="relative">
                    <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white" type="date" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px] pointer-events-none">calendar_today</span>
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="flex items-center p-4 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl hover:border-primary/50 cursor-pointer transition-all bg-slate-50/50 dark:bg-slate-900/20">
                    <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4">
                      <span className="material-symbols-outlined">upload_file</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Scanner du document (Recto/Verso)</p>
                      <p className="text-xs text-slate-500">PDF, JPG, PNG (Max 5MB)</p>
                    </div>
                    <input className="hidden" type="file" />
                    <span className="text-xs font-bold text-primary px-3 py-1 bg-primary/10 rounded-lg">Parcourir</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <button className="px-6 py-3.5 text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all" type="button">Annuler</button>
              <button className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-primary/25 transition-all flex items-center gap-2" type="submit">
                <span>Enregistrer et vérifier les documents</span>
                <span className="material-symbols-outlined text-[20px]">verified_user</span>
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 relative z-10">
              <span className="material-symbols-outlined text-primary">gavel</span>
              Règles de conformité
            </h3>
            <ul className="space-y-4 relative z-10">
              <li className="flex gap-3 text-sm text-slate-300">
                <span className="material-symbols-outlined text-green-500 text-[18px] shrink-0">check_circle</span>
                <span>Le permis doit être valide pour au moins 6 mois à venir.</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-300">
                <span className="material-symbols-outlined text-green-500 text-[18px] shrink-0">check_circle</span>
                <span>Le numéro de téléphone doit être unique dans le système.</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-300">
                <span className="material-symbols-outlined text-amber-500 text-[18px] shrink-0">info</span>
                <span>La validation SYGFR prend environ 30 secondes après soumission.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <h3 className="text-slate-900 dark:text-white font-bold mb-4">Dernières ressources</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <span className="material-symbols-outlined text-slate-500">person</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">Thomas Martin</p>
                  <p className="text-xs text-slate-500 mt-1">Permis C • ID-2291</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <span className="material-symbols-outlined text-slate-500">local_shipping</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">AB-123-CD</p>
                  <p className="text-xs text-slate-500 mt-1">Iveco EuroCargo • 12T</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddResource;
