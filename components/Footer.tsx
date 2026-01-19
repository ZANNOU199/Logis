
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-8 mt-auto">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © 2024 SYGFR - Gestion de Flotte Interne. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <a className="text-slate-400 hover:text-primary transition-colors text-sm" href="#">Documentation API</a>
            <a className="text-slate-400 hover:text-primary transition-colors text-sm" href="#">Support Technique</a>
            <a className="text-slate-400 hover:text-primary transition-colors text-sm" href="#">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
