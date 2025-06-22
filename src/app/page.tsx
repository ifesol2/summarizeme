'use client'

import React, { useState } from 'react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-50 text-gray-900 flex flex-col">
  <header className="sticky top-0 bg-white bg-opacity-90 backdrop-blur-sm shadow-md z-30">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold text-indigo-700 select-none">SummarizeMe</h1>
      <div>
        <a href="#beta" className="inline-block px-5 py-2 rounded-full bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
          Join Beta
        </a>
      </div>
    </nav>
  </header>
  <main className="flex-grow">
    <section id="hero" className="container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 scroll-smooth">
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-indigo-800 drop-shadow-sm">Too Long? We Read It For You.</h2>
        <p className="text-lg sm:text-xl text-indigo-700 max-w-md mx-auto md:mx-0">Upload documents, PDFs, articles, or transcripts—get a crystal-clear summary in seconds.</p>
        <form className="mt-6 flex flex-col sm:flex-row items-center max-w-md mx-auto md:mx-0 gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            aria-label="Paste or type text or URL"
            placeholder="Paste text or URL here"
            className="flex-grow rounded-lg border border-indigo-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition"
          />
          <button
            type="submit"
            className="rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          >
            Get Instant Summary
          </button>
        </form>
        <label
          htmlFor="file-upload"
          className="mt-4 inline-flex items-center justify-center px-4 py-2 border-2 border-dashed border-indigo-400 rounded-lg text-indigo-600 cursor-pointer hover:border-indigo-600 hover:text-indigo-700 transition select-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4m0 0l-4 4m4-4v12" />
          </svg>
          Drop a file or click to upload
        </label>
        <input id="file-upload" type="file" accept=".pdf,.docx,.txt" className="hidden" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl ring-1 ring-indigo-100 overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 border-r border-indigo-100 p-6 overflow-y-auto max-h-[400px]">
            <h3 className="font-semibold text-indigo-700 mb-4 select-none">Uploaded Document</h3>
            <article className="prose prose-indigo max-w-none text-sm sm:text-base text-gray-700">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus. Cras lacinia magna vel molestie
                faucibus. Donec auctor et urna a sollicitudin. Morbi nec venenatis erat, sit amet tincidunt nunc.
              </p>
              <p>
                Vivamus euismod, velit vel ornare tincidunt, nibh nulla mattis enim, sit amet cursus sem purus ut orci. Sed tempus, urna nec
                ultrices tincidunt, libero metus cursus purus, eu facilisis erat felis vitae libero.
              </p>
              <p>
                Etiam sit amet nulla non arcu suscipit scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas.
              </p>
            </article>
          </div>
          <div className="md:w-1/2 bg-indigo-50 p-6 flex flex-col justify-center">
            <h3 className="font-semibold text-indigo-800 mb-4 select-none">AI Summary</h3>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              This document discusses the importance of concise communication. It highlights methods to reduce lengthy texts while preserving key
              information, helping readers save time and focus on essential points.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="how-it-works" className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-800 mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <article className="flex flex-col items-center space-y-4">
            <div className="p-5 rounded-full bg-indigo-100 text-indigo-600 shadow-md hover:bg-indigo-200 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-indigo-700">Upload or Paste</h3>
            <p className="text-gray-600 max-w-xs">Accepts DOCX, PDF, TXT, and URLs. Easily upload files or paste content for instant processing.</p>
          </article>
          <article className="flex flex-col items-center space-y-4">
            <div className="p-5 rounded-full bg-indigo-100 text-indigo-600 shadow-md hover:bg-indigo-200 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A2 2 0 013 15.382V6.618a2 2 0 011.553-1.894L9 2m6 18l5.447-2.724A2 2 0 0021 15.382V6.618a2 2 0 00-1.553-1.894L15 2m-6 18V6m6 0v14" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-indigo-700">AI Summarizes</h3>
            <p className="text-gray-600 max-w-xs">Trained to cut fluff and keep key points, providing clear and concise summaries quickly.</p>
          </article>
          <article className="flex flex-col items-center space-y-4">
            <div className="p-5 rounded-full bg-indigo-100 text-indigo-600 shadow-md hover:bg-indigo-200 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11M9 21V3m7 18l4-4m0 0l-4-4m4 4H10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-indigo-700">Skim Smarter</h3>
            <p className="text-gray-600 max-w-xs">Save hours reading. Focus only on what matters with summaries tailored for quick comprehension.</p>
          </article>
        </div>
      </div>
    </section>
    <section id="built-for" className="bg-indigo-50 py-20">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-800 mb-12">Built For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          <article className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center space-y-4 hover:shadow-xl transition">
            <span className="text-5xl" aria-hidden="true" role="img">🎓</span>
            <h3 className="text-xl font-semibold text-indigo-700">Students</h3>
            <p className="text-gray-700">Summarize research papers and lengthy study materials effortlessly.</p>
          </article>
          <article className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center space-y-4 hover:shadow-xl transition">
            <span className="text-5xl" aria-hidden="true" role="img">👨‍💼</span>
            <h3 className="text-xl font-semibold text-indigo-700">Professionals</h3>
            <p className="text-gray-700">Get quick meeting and action summaries to stay productive and informed.</p>
          </article>
          <article className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center space-y-4 hover:shadow-xl transition">
            <span className="text-5xl" aria-hidden="true" role="img">✍️</span>
            <h3 className="text-xl font-semibold text-indigo-700">Writers</h3>
            <p className="text-gray-700">Auto-outline long documents to streamline your writing process.</p>
          </article>
        </div>
      </div>
    </section>
    <section id="testimonials" className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-800 mb-12">User Feedback</h2>
        <figure className="bg-indigo-50 p-8 rounded-xl shadow-lg max-w-xl mx-auto hover:shadow-2xl transition">
          <blockquote className="text-lg italic text-indigo-700 leading-relaxed">
            “This saved me 3 hours of reading today.”
          </blockquote>
          <figcaption className="mt-4 font-semibold text-indigo-600">— Sarah, Law Student</figcaption>
        </figure>
      </div>
    </section>
    <section id="final-cta" className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 py-20">
      <div className="container mx-auto px-6 max-w-3xl text-center text-white space-y-8">
        <h2 className="text-4xl font-extrabold drop-shadow-lg">Cut your reading time in half.</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="#beta"
            className="inline-block bg-white text-indigo-700 font-semibold rounded-full px-10 py-4 shadow-lg hover:bg-indigo-100 focus:outline-none focus:ring-4 focus:ring-white transition"
          >
            Join the Beta
          </a>
          <a
            href="#beta"
            className="inline-block border-2 border-white text-white font-semibold rounded-full px-10 py-4 hover:bg-white hover:text-indigo-700 focus:outline-none focus:ring-4 focus:ring-white transition"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </section>
  </main>
  <footer className="bg-white border-t border-indigo-100 py-8">
    <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <nav className="flex space-x-6 text-indigo-700 font-semibold text-sm select-none">
        <a href="#contact" className="hover:text-indigo-900 focus:outline-none focus:underline">Contact</a>
        <a href="#terms" className="hover:text-indigo-900 focus:outline-none focus:underline">Terms</a>
        <a href="#privacy" className="hover:text-indigo-900 focus:outline-none focus:underline">Privacy</a>
      </nav>
      <div className="flex space-x-6">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-indigo-600 hover:text-indigo-800 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-indigo-600 hover:text-indigo-800 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 3a2 2 0 110 4 2 2 0 010-4z" />
          </svg>
        </a>
      </div>
    </div>
    <p className="mt-6 text-center text-indigo-600 text-sm select-none">Built with GPT + custom NLP magic</p>
  </footer>
</div>
  )
}