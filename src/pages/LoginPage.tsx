import React, { useState } from 'react';
import { PageId } from '../types';
import { Button } from '../components/common/Button';
import { Compass, Lock, Mail, Shield, ArrowRight, AlertCircle } from 'lucide-react';
import { IslamicDivider } from '../components/common/IslamicPattern';

interface LoginPageProps {
  onLogin: (email: string) => void;
  onNavigate: (page: PageId) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onNavigate }) => {
  const [email, setEmail] = useState('admin@elaukouwa-voyages.com');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Veuillez renseigner tous les champs.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      // Allow demo login
      if (email.includes('@') && password.length >= 4) {
        onLogin(email);
      } else {
        setError('Identifiants invalides. Veuillez vérifier vos accès.');
        setLoading(false);
      }
    }, 400);
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#F7F8FA]">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6 animate-fadeIn">
        {/* Brand Header */}
        <div className="text-center">
          <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] border border-[#C9A227] flex items-center justify-center text-[#E5C766] mx-auto mb-3 shadow-sm">
            <Compass className="w-7 h-7" />
          </div>
          <h2 className="font-serif-title text-2xl font-bold text-[#0B1F3A]">
            Espace d'Administration
          </h2>
          <p className="text-xs text-[#667085] mt-1">
            Gestion des offres Oumra, réservations, devis et témoignages
          </p>
        </div>

        <IslamicDivider className="my-2 opacity-50" />

        {error && (
          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1.5">
              Adresse E-mail administrateur
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@elaukouwa-voyages.com"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1.5">
              Mot de passe
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                required
              />
            </div>
          </div>

          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-[11px] text-amber-900 leading-relaxed">
            💡 <strong>Accès démonstration :</strong> Les champs sont pré-remplis avec le compte administrateur par défaut. Cliquez directement sur Connexion.
          </div>

          <Button
            type="submit"
            variant="gold"
            size="md"
            fullWidth
            disabled={loading}
            icon={<ArrowRight className="w-4 h-4" />}
            className="font-bold py-3 shadow-md"
          >
            {loading ? 'Vérification...' : 'Se connecter au Back-Office'}
          </Button>
        </form>

        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('accueil')}
            className="text-xs text-[#667085] hover:text-[#0B1F3A] underline"
          >
            ← Revenir au site public
          </button>
        </div>
      </div>
    </div>
  );
};
