import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="site-shell max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700 shadow-sm">
            About Us
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            How ServiceWorker Works
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Connecting you with top-rated local professionals for all your needs.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200/60 md:p-12 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            ServiceWorker is designed to bridge the gap between skilled service providers and individuals looking for reliable, high-quality work. Whether you need a quick repair at home, professional consultation for your business, or event planning services, our platform makes it easy to find and connect with the right experts in your local area.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">How It Works</h2>
          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-xl mb-4">1</div>
              <h3 className="font-bold text-slate-900 mb-2">Search</h3>
              <p className="text-sm text-slate-600">Browse through our extensive list of service categories to find the exact help you need.</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-xl mb-4">2</div>
              <h3 className="font-bold text-slate-900 mb-2">Connect</h3>
              <p className="text-sm text-slate-600">View detailed profiles, reviews, and ratings to choose the professional that fits your requirements.</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-xl mb-4">3</div>
              <h3 className="font-bold text-slate-900 mb-2">Resolve</h3>
              <p className="text-sm text-slate-600">Get the job done efficiently and safely. Rate your experience to help our community grow.</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-blue-600 p-8 shadow-sm md:p-12 text-white">
          <h2 className="text-2xl font-bold mb-4 text-center">Facilities We Provide</h2>
          <ul className="grid gap-4 md:grid-cols-2 mt-8">
            <li className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
              <div className="h-2 w-2 rounded-full bg-blue-300"></div>
              <span className="font-medium">Verified Professionals</span>
            </li>
            <li className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
              <div className="h-2 w-2 rounded-full bg-blue-300"></div>
              <span className="font-medium">Secure Communications</span>
            </li>
            <li className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
              <div className="h-2 w-2 rounded-full bg-blue-300"></div>
              <span className="font-medium">Transparent Reviews</span>
            </li>
            <li className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
              <div className="h-2 w-2 rounded-full bg-blue-300"></div>
              <span className="font-medium">24/7 Customer Support</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
