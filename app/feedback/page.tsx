'use client';

import { useState } from 'react';
import Layout from '../components/Layout';

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'suggestion', // 'suggestion' or 'complaint'
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Layout>
      <div className="container mx-auto px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Suggestions & Complaints
          </h1>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Your Feedback Matters</h2>
              <p className="text-zinc-400">
                We value your input and are committed to improving our services. Please share your suggestions or concerns with us.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-zinc-300 mb-2">
                  Type of Feedback
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
                  required
                >
                  <option value="suggestion">Suggestion</option>
                  <option value="complaint">Complaint</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-zinc-100 text-zinc-900 px-8 py-3 rounded-full text-lg font-medium hover:bg-zinc-200 transition-colors"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
} 