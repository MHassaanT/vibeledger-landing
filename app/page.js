"use client";
import { useState } from 'react';

export default function VibeLedgerLanding() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Your existing Google Apps Script URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyGRGvXlKBjtBqUSzfz3JLGrrmvvBZsdlwsZE2OcbjATSicaSV-C36snSBfnhXQSSaOKA/exec';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.business || !formData.phone) {
      setError('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      setSubmitted(true);
      
    } catch (err) {
      console.error('Submission error:', err);
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold italic">V</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">VibeLedger</span>
          </div>
          <a 
            href="#early-access" 
            className="hidden sm:block bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition-all"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide text-blue-700 uppercase bg-blue-50 rounded-full">
            Private Pilot Now Open
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Record your ledger <br />
            <span className="text-blue-600 font-black italic">with your voice.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            The world’s simplest way for small businesses to track sales and expenses. No typing, no complexity—just speak.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#early-access" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              Request Early Access
            </a>
            <a 
              href="#how-it-works" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all"
            >
              How it works
            </a>
          </div>
        </div>
      </section>

      {/* Examples / Visual Social Proof */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">It’s as simple as a voice note</h2>
            <p className="text-slate-500 max-w-xl mx-auto">VibeLedger automatically translates your natural speech into structured business records.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Example 1: Purchase */}
            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              </div>
              <p className="italic text-lg text-slate-700 mb-6">"1 kilo cheeni khareedi 150 cash"</p>
              <div className="space-y-2 pt-6 border-t border-slate-200">
                <div className="flex justify-between text-sm"><span className="text-slate-400">Type</span> <span className="font-bold text-blue-600 uppercase text-xs tracking-widest">Purchase</span></div>
                <div className="flex justify-between text-sm"><span className="text-slate-400">Item</span> <span className="font-medium text-slate-900">Sugar</span></div>
                <div className="flex justify-between text-sm"><span className="text-slate-400">Amount</span> <span className="font-medium text-slate-900">Rs. 150</span></div>
              </div>
            </div>

            {/* Example 2: Sale */}
            <div className="group p-8 rounded-3xl bg-slate-900 text-white shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <p className="italic text-lg text-blue-50 mb-6">"Aaj 5 packets biscuit beche 250"</p>
              <div className="space-y-2 pt-6 border-t border-slate-700">
                <div className="flex justify-between text-sm"><span className="text-slate-400">Type</span> <span className="font-bold text-green-400 uppercase text-xs tracking-widest">Sale</span></div>
                <div className="flex justify-between text-sm"><span className="text-slate-400">Qty</span> <span className="font-medium">5 Packets</span></div>
                <div className="flex justify-between text-sm"><span className="text-slate-400">Total</span> <span className="font-medium text-green-400">Rs. 250</span></div>
              </div>
            </div>

            {/* Example 3: Expense */}
            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all duration-300">
              <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-red-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <p className="italic text-lg text-slate-700 mb-6">"Mobile repair ka kharcha 500"</p>
              <div className="space-y-2 pt-6 border-t border-slate-200">
                <div className="flex justify-between text-sm"><span className="text-slate-400">Type</span> <span className="font-bold text-red-500 uppercase text-xs tracking-widest">Expense</span></div>
                <div className="flex justify-between text-sm"><span className="text-slate-400">Category</span> <span className="font-medium text-slate-900">Repairs</span></div>
                <div className="flex justify-between text-sm"><span className="text-slate-400">Amount</span> <span className="font-medium text-slate-900">Rs. 500</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section - Bento Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-2 bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Zero Typing Required</h3>
              <p className="text-slate-600 leading-relaxed">Most business owners hate typing on small keyboards after a long day. With VibeLedger, your voice does the work in seconds.</p>
            </div>
            <div className="bg-blue-600 p-10 rounded-3xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Cloud Secure</h3>
              <p className="text-blue-100">Stop worrying about lost notebooks or ink spills. Your records are saved safely online forever.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Smart Insights</h3>
              <p className="text-slate-600">See daily sales trends and stock levels without doing a single math calculation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA / Form */}
      <section id="early-access" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Start your pilot today</h2>
              <p className="text-slate-400 mb-10">We are currently selecting small businesses to test VibeLedger. Get your invite.</p>

              {submitted ? (
                <div className="bg-green-500/10 border border-green-500/50 p-8 rounded-3xl">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h4 className="text-2xl font-bold text-green-400 mb-2">You're on the list!</h4>
                  <p className="text-green-100/80">Check your phone soon—we'll be in touch.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                  <input
                    type="text"
                    name="name"
                    placeholder="Owner's Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500 text-white placeholder:text-slate-500 transition-all outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="business"
                    placeholder="Business Type (e.g., Kiryana Shop)"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500 text-white placeholder:text-slate-500 transition-all outline-none"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number / WhatsApp"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500 text-white placeholder:text-slate-500 transition-all outline-none"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 shadow-lg shadow-blue-900/20"
                  >
                    {isSubmitting ? 'Submitting...' : 'Claim My Spot'}
                  </button>
                  {error && <p className="text-red-400 text-sm font-medium mt-2">{error}</p>}
                </form>
              )}
            </div>
            {/* Design Accents */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-900/40 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-[10px] text-white font-bold italic">V</div>
              <span className="font-bold text-slate-900">VibeLedger</span>
            </div>
            <p className="text-slate-500 text-sm">Empowering small businesses through voice tech.</p>
          </div>
          
          <div className="text-slate-500 text-sm text-center md:text-right">
            <p className="mb-1 font-medium text-slate-900">Contact Us</p>
            <p>misterhassan58@gmail.com</p>
          </div>

          <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pilot Testing In Progress</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
