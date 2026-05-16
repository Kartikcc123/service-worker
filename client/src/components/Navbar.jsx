import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, LogIn, Menu, Search, Mail, MapPin, Phone } from 'lucide-react';

const Navbar = () => {
  const [hasNotification, setHasNotification] = useState(true);
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur">
      <div className="bg-slate-900 text-slate-200">
        <div className="site-shell hidden items-center justify-between gap-4 py-1.5 text-xs md:flex">
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="inline-flex items-center gap-2 text-slate-200/90 transition-colors hover:text-white">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/6 text-blue-300"><Phone size={14} /></span>
              +91 98765 43210
            </a>
            <a href="mailto:support@serviceworker.com" className="inline-flex items-center gap-2 text-slate-200/80 transition-colors hover:text-white">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/6 text-orange-300"><Mail size={14} /></span>
              support@serviceworker.com
            </a>
          </div>

          <div className="flex items-center gap-4 text-slate-200/80">
            <span className="inline-flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/6 text-emerald-300"><MapPin size={14} /></span>
              Bhilwara, India
            </span>
          </div>
        </div>
      </div>

      <div className="site-shell flex min-h-[76px] items-center justify-between gap-4 py-3">
        <div className="flex min-w-0 items-center gap-4 lg:gap-6">
          <Link to="/" className="flex shrink-0 items-center text-2xl font-extrabold tracking-tight sm:text-3xl">
            <span className="rainbow-logo">ServiceWorker</span>
          </Link>

          <div className="hidden min-w-[280px] flex-1 items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 lg:flex lg:max-w-xl">
            <Search size={17} className="text-slate-400" />
            <span className="truncate text-sm font-medium text-slate-500">
              Search local experts, businesses, and services
            </span>
          </div>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            About
          </Link>
          <Link
            to="/services"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            Contact
          </Link>

          <button 
            onClick={() => setHasNotification(false)}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors hover:border-slate-300 hover:text-blue-600"
          >
            <Bell size={18} />
            {hasNotification && (
              <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-blue-600 border-2 border-white"></span>
            )}
          </button>

          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700"
          >
            <LogIn size={16} />
            Login / Sign Up
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600">
            <Search size={18} />
          </button>
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
