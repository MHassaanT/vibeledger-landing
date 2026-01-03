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

  // Replace this URL with your Google Apps Script web app URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyGRGvXlKBjtBqUSzfz3JLGrrmvvBZsdlwsZE2OcbjATSicaSV-C36snSBfnhXQSSaOKA/exec';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.business || !formData.phone) {
      setError('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // With no-cors mode, we can't read the response, so we assume success
      setSubmitted(true);
      
    } catch (err) {
      console.error('Submission error:', err);
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-900">VibeLedger</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Voice-based ledger for small businesses
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Record sales, expenses, and inventory updates by speaking. No typing, no spreadsheets, no accounting knowledge required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#early-access"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 text-center"
            >
              Request Early Access
            </a>
            <a
              href="#how-it-works"
              className="inline-block border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 text-center"
            >
              View Product Overview
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            The current reality for small businesses
          </h3>
          <div className="max-w-3xl">
            <p className="text-gray-700 mb-4">
              Most small retail and service businesses maintain records in notebooks or rough registers. At the end of each day, owners manually write down what was sold, what was purchased, and what expenses were incurred.
            </p>
            <p className="text-gray-700 mb-4">
              This approach leads to several problems:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Manual entry is time-consuming and prone to errors</li>
              <li>• Notebooks get lost or damaged, taking all records with them</li>
              <li>• Difficult to track inventory levels or calculate profit</li>
              <li>• Existing accounting software is too complex or requires computer literacy</li>
              <li>• Data entry on phones or computers feels like extra work after a long day</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            A simpler way to keep records
          </h3>
          <div className="max-w-3xl">
            <p className="text-gray-700 mb-6">
              VibeLedger lets business owners record their daily transactions by speaking, just as they would tell someone what happened during the day. The voice input is converted into structured ledger entries automatically.
            </p>
            <p className="text-gray-700 mb-6">
              No need to understand accounting categories, fill out forms, or type on small keyboards. Just speak naturally in your own language, and VibeLedger handles the rest.
            </p>
            <p className="text-gray-700">
              Records are stored digitally and can be accessed anytime, with basic reports showing sales, expenses, and stock levels.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Key benefits
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">No typing or spreadsheets</h4>
              <p className="text-gray-700">
                Record entries by speaking. No need to struggle with keyboards or learn Excel.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">No accounting knowledge required</h4>
              <p className="text-gray-700">
                Speak in plain language. VibeLedger understands what you mean and organizes the data.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Faster daily record keeping</h4>
              <p className="text-gray-700">
                Recording transactions takes seconds instead of minutes. Less time on paperwork, more time on business.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Better visibility</h4>
              <p className="text-gray-700">
                See your sales trends, track expenses, and monitor stock levels without manual calculations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            How it works
          </h3>
          <div className="max-w-3xl space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Speak your transaction</h4>
                <p className="text-gray-700">
                  Tell VibeLedger what you sold, bought, or spent. Use your natural language and local terms.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">VibeLedger processes the input</h4>
                <p className="text-gray-700">
                  The system identifies the transaction type, amount, items, and other details from your voice.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Data is saved as structured entries</h4>
                <p className="text-gray-700">
                  Your transaction is automatically organized and stored in your digital ledger, ready to view or review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Voice Entries */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Example voice entries
          </h3>
          <p className="text-gray-700 mb-8 max-w-3xl">
            Here are realistic examples of how shop owners might speak their transactions and how VibeLedger records them.
          </p>
          <div className="space-y-6 max-w-3xl">
            {/* Example 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-500 mb-1">Voice Input:</p>
                <p className="text-gray-900">"1 kilo cheeni khareedi 150 cash"</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Recorded As:</p>
                <div className="bg-gray-50 rounded p-3 text-sm">
                  <p className="text-gray-900"><span className="font-medium">Type:</span> Purchase</p>
                  <p className="text-gray-900"><span className="font-medium">Item:</span> Sugar (cheeni)</p>
                  <p className="text-gray-900"><span className="font-medium">Quantity:</span> 1 kg</p>
                  <p className="text-gray-900"><span className="font-medium">Amount:</span> Rs. 150</p>
                  <p className="text-gray-900"><span className="font-medium">Payment:</span> Cash</p>
                </div>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-500 mb-1">Voice Input:</p>
                <p className="text-gray-900">"Aaj 5 packets biscuit beche 250"</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Recorded As:</p>
                <div className="bg-gray-50 rounded p-3 text-sm">
                  <p className="text-gray-900"><span className="font-medium">Type:</span> Sale</p>
                  <p className="text-gray-900"><span className="font-medium">Item:</span> Biscuit packets</p>
                  <p className="text-gray-900"><span className="font-medium">Quantity:</span> 5</p>
                  <p className="text-gray-900"><span className="font-medium">Amount:</span> Rs. 250</p>
                  <p className="text-gray-900"><span className="font-medium">Date:</span> Today</p>
                </div>
              </div>
            </div>

            {/* Example 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-500 mb-1">Voice Input:</p>
                <p className="text-gray-900">"Mobile repair ka kharcha 500"</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Recorded As:</p>
                <div className="bg-gray-50 rounded p-3 text-sm">
                  <p className="text-gray-900"><span className="font-medium">Type:</span> Expense</p>
                  <p className="text-gray-900"><span className="font-medium">Category:</span> Mobile repair</p>
                  <p className="text-gray-900"><span className="font-medium">Amount:</span> Rs. 500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Current status
          </h3>
          <div className="max-w-3xl">
            <p className="text-gray-700 mb-4">
              VibeLedger is currently in MVP development. The core voice-to-ledger workflow has been defined, and we are preparing for pilot testing with local businesses.
            </p>
            <p className="text-gray-700 mb-4">
              We are taking a feedback-driven approach to development. Our priority is to build a tool that genuinely solves the record-keeping problem for small businesses, not to add unnecessary features.
            </p>
            <p className="text-gray-700">
              If you operate a small retail or service business and are interested in testing VibeLedger during the pilot phase, please request early access below.
            </p>
          </div>
        </div>
      </section>

      {/* Early Access Form */}
      <section id="early-access" className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Request early access
            </h3>
            <p className="text-gray-700 mb-8 text-center">
              We are looking for small business owners to participate in pilot testing. Fill out this form and we will contact you with details.
            </p>
            
            {submitted ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Thank you for your interest</h4>
                <p className="text-gray-600">We will contact you soon with details about the pilot program.</p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Type
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="e.g., Kiryana store, Mobile repair shop"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email (optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
                  >
                    Request Early Access
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">VibeLedger</h3>
            <p className="text-gray-600 mb-4">
              Voice-based ledger for small businesses
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Founded by Hassan Tahir and Amaad Ali
            </p>
            <div className="text-sm text-gray-600">
              <p>Contact: info@vibledger.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
