
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <main className="bg-slate-50 dark:bg-background-dark min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-[480px] flex flex-col items-center">
        <div className="mb-8 w-full flex justify-center">
          <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-white text-4xl">local_shipping</span>
          </div>
        </div>

        <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl overflow-hidden">
          <div className="relative h-32 bg-primary/10 flex items-center justify-center border-b border-slate-100 dark:border-slate-800">
             <div className="z-10 text-center">
                <h2 className="text-primary font-bold text-xl tracking-wide uppercase">Système SYGFR</h2>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-widest">Gestion des Expéditions</p>
             </div>
          </div>
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight text-center">Connexion</h1>
              <p className="text-slate-500 text-center text-sm mt-2">Accédez à votre espace sécurisé</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="flex flex-col gap-2">
                <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Identifiant (e-mail)</label>
                <div className="relative">
                  <input className="w-full rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white h-12 px-4 outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="nom.prenom@entreprise.com" type="email" required />
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">alternate_email</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Mot de passe</label>
                  <a className="text-primary hover:underline text-xs font-medium" href="#">Oublié ?</a>
                </div>
                <div className="relative">
                  <input className="w-full rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white h-12 px-4 outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="••••••••" type="password" required />
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">visibility</span>
                </div>
              </div>
              <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 mt-4" type="submit">
                <span className="material-symbols-outlined text-xl">login</span>
                Se connecter
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500">Pas encore de compte ? <Link to="/register" className="text-primary font-bold hover:underline">S'inscrire</Link></p>
            </div>
          </div>
        </div>

        <div className="mt-8 px-6 text-center">
           <div className="flex items-center justify-center gap-2 mb-2">
              <span className="material-symbols-outlined text-slate-400 text-lg">verified_user</span>
              <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Sécurité des données</span>
           </div>
           <p className="text-slate-400 text-[11px] leading-relaxed">
             Cette session est sécurisée par un chiffrement AES-256 de bout en bout conforme aux protocoles internes SYGFR.
           </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
