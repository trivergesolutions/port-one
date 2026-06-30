import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'blue' | 'cyan' | 'emerald';
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-slate-100 text-slate-700 border border-slate-200',
    blue: 'bg-blue-50 text-blue-700 border border-blue-200',
    cyan: 'bg-cyan-50 text-cyan-700 border border-cyan-200',
    emerald: 'bg-emerald-50 text-emerald-700 border border-emerald-200'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}
