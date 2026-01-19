import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Flotte', path: '/fleet', icon: 'directions_car' },
    { name: 'Expéditions', path: '/import', icon: 'package_2' },
    { name: 'Ressources', path: '/resources/add', icon: 'person_add' },
    { name: 'Planning', path: '/planning', icon: 'event_note' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-[100] transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3 text-primary group">
            <div className="size-10 bg-primary text-white rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-[26px]">truck_tag</span>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tighter text-slate-900 dark:text-white uppercase leading-none">SYGFR</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">Logistics Hub</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/5'
                    : 'text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <span className="material-symbols-outlined text-[18px] opacity-70">{link.icon}</span>
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <button className="hidden sm:flex p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined text-[22px]">search</span>
            </button>
            
            <Link to="/login" className="flex items-center gap-3 pl-1 pr-1 sm:pr-2 py-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <div className="size-9 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-2 ring-white dark:ring-slate-800">
                <img
                  alt="Avatar"
                  className="w-full h-full object-cover"
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                />
              </div>
            </Link>

            <button 
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-transform active:scale-95"
            >
              <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;