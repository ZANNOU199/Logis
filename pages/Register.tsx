
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <main className="bg-slate-50 dark:bg-background-dark min-h-screen flex items-center justify-center p-4 py-12">
      <div className="max-w-[720px] w-full bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="p-8 border-b border-slate-100 dark:border-slate-800">
          <h1 className="text-slate-900 dark:text-white text-3xl font-black tracking-tight">Inscription Nouvel Utilisateur</h1>
          <p className="text-slate-500 text-base mt-2">Créez votre compte pour accéder à la plateforme SYGFR.</p>
        </div>

        <form onSubmit={handleRegister} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">person</span> Nom
              </span>
              <input className="w-full rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary/50 outline-none" placeholder="Dupont" required type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">badge</span> Prénom
              </span>
              <input className="w-full rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary/50 outline-none" placeholder="Jean" required type="text" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">alternate_email</span> E-mail professionnel
            </span>
            <input className="w-full rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary/50 outline-none" placeholder="nom@entreprise.com" required type="email" />
          </div>

          <div className="flex flex-col gap-3">
             <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Attribution du Rôle Logistique</span>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
               {['Administrateur', 'Planificateur', 'Agent de quai'].map((role, idx) => (
                 <label key={role} className="relative flex flex-col p-4 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                   <input className="sr-only peer" name="role" type="radio" required defaultChecked={idx===0} />
                   <div className="peer-checked:text-primary">
                    <span className="material-symbols-outlined text-primary mb-2">
                      {idx === 0 ? 'admin_panel_settings' : idx === 1 ? 'calendar_month' : 'conveyor_belt'}
                    </span>
                    <p className="font-bold text-sm dark:text-white">{role}</p>
                   </div>
                 </label>
               ))}
             </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 h-14 bg-primary text-white text-base font-bold rounded-lg shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all" type="submit">
            <span className="material-symbols-outlined">person_add</span>
            Créer mon compte professionnel
          </button>
        </form>

        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 text-center border-t border-slate-100 dark:border-slate-800">
           <p className="text-xs text-slate-500">
             Déjà inscrit ? <Link to="/login" className="text-primary font-bold hover:underline">Connectez-vous ici</Link>
           </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
