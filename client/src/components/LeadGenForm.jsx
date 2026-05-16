import { useState } from 'react';
import { Star, ShieldCheck, Users } from 'lucide-react';

const LeadGenForm = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="relative z-10 w-full rounded-[28px] border border-slate-200/70 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.18)] sm:p-8 md:p-10 lg:p-12">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="flex-1 text-center text-white lg:max-w-2xl lg:text-left">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
            Trusted Local Marketplace
          </span>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            Register once and manage every service request from one polished dashboard.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-blue-100/90 md:text-lg">
            Create your account to compare professionals, track conversations, and book reliable help without jumping between platforms.
          </p>
          
          <div className="mt-8 hidden gap-4 sm:grid sm:grid-cols-1 lg:max-w-xl">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-blue-100">
                <ShieldCheck size={20} />
              </div>
              <span className="font-medium">100% Verified Professionals</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-blue-100">
                <Star size={20} />
              </div>
              <span className="font-medium">Top Rated Services</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-blue-100">
                <Users size={20} />
              </div>
              <span className="font-medium">Trusted by Thousands</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[420px] lg:flex-shrink-0">
          <div className="rounded-3xl bg-white p-6 shadow-2xl shadow-slate-950/20 sm:p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-800">
                {isLogin ? 'Welcome Back' : 'Create an Account'}
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {isLogin ? 'Login to manage your services.' : 'Join thousands of satisfied users today.'}
              </p>
            </div>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20" 
                  />
                </div>
              )}

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">Mobile No.</label>
                <input 
                  type="tel" 
                  placeholder="10-digit mobile number" 
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20" 
                />
              </div>

              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label className="block text-sm font-semibold text-slate-700">Password</label>
                  {isLogin && <a href="#" className="text-xs font-semibold text-blue-600 hover:text-blue-800">Forgot password?</a>}
                </div>
                <input 
                  type="password" 
                  placeholder="Enter password" 
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20" 
                />
              </div>

              <button className="mt-2 w-full rounded-xl bg-blue-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/40 active:translate-y-0">
                {isLogin ? 'Sign In' : 'Register Now'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500">
                {isLogin ? "Don't have an account? " : 'Already registered? '}
                <button 
                  onClick={() => setIsLogin(!isLogin)} 
                  className="ml-1 font-bold text-blue-600 transition-colors hover:text-blue-800"
                >
                  {isLogin ? "Sign up" : 'Log in'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadGenForm;
