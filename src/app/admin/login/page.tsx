'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic hardcoded auth for demonstration
    if (password === 'admin123') {
      localStorage.setItem('admin_auth', 'true');
      router.push('/admin/dashboard');
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className="max-w-md mx-auto py-40 px-4">
      <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 flex flex-col gap-8 shadow-xl">
        <div className="flex flex-col gap-2 items-center text-center">
          <div className="p-3 bg-zinc-900 text-white rounded-2xl mb-2">
            <Lock className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold">Admin Access</h1>
          <p className="text-zinc-500 text-sm">Please enter your password to continue.</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-100 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
          />
          {error && <p className="text-red-500 text-xs font-medium">{error}</p>}
          <button
            type="submit"
            className="w-full p-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-xl font-bold hover:opacity-90 transition-opacity"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
