"use client";
import { useState } from 'react';
import Script from 'next/script';

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Script 
        src="https://morphical.vercel.app/widget.js?v=2"
        data-api-key="mk_live_0e6b311f81abd12a65d38b86019db724" 
        strategy="afterInteractive" 
      />
      <script src="https://enterpriseaiworkflowplatform-production.up.railway.app/widget.js" data-tenant-id="0b1b31b0-0092-453c-ae07-d6f3ffcc596a"></script>
  
      <nav className="flex justify-between items-center px-6 py-6 max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold italic shadow-lg shadow-blue-200">V</div>
          <span className="text-xl font-bold tracking-tight">VibeLedger</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-blue-400 transition-colors">How it Works</a>
          <a href="#demo" className="hover:text-blue-400 transition-colors">Demo</a>
        </div>
      </nav>

      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800 border border-blue-700 text-blue-300 text-xs font-bold mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              SMART BOOKKEEPING FOR LOCAL SHOPS
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Say Goodbye to <span className="text-blue-400">Manual Ledgers</span>
            </h1>

            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              The simplest way to track your daily sales and customer debt using just your voice. Fast, secure, and built for busy shopkeepers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#form" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:shadow-xl transition-all text-center">
                <span>Join the Waitlist</span>
              </a>
              <div className="flex items-center gap-2 px-4 py-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-800 overflow-hidden">
                      <div className="w-full h-full bg-gray-700"></div>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-500 font-medium">Joined by 50+ local shops</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-blue-200 border border-gray-700 bg-gray-800 p-2">
              <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 aspect-[4/3] flex items-center justify-center">
                <div className="flex flex-col items-center text-center p-8">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-blue-200">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">"Add 500 rupees to Ali's khata"</h3>
                  <p className="text-gray-400">VibeLedger automatically records the transaction and sends a WhatsApp reminder.</p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-900/40 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-gray-700 bg-gray-800">
        {/* Footer content */}
      </footer>
    </main>
  );
}