"use client";


import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-white">UI Library</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/docs" 
                className="text-gray-400 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Documentation
              </Link>
              <a 
                href="https://github.com/mridul891/uilibrary" 
                className="text-gray-400 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Beautiful UI
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}Components
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            A modern React component library built with TypeScript and Tailwind CSS. 
            Create stunning user interfaces with our collection of customizable, accessible components.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/docs"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              View Documentation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link 
              href="/docs/button"
              className="inline-flex items-center px-8 py-4 border border-gray-700 text-lg font-medium rounded-lg text-gray-400 bg-black hover:bg-gray-900 transition-all shadow-lg"
            >
              Try Components
            </Link>
          </div>
        </div>
      </div>

      {/* Component Preview Section */}
   
   



      {/* Features Section */}
     
      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 fixed bottom-0 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-500">
              © 2025 UI Library. Built with ❤️ for developers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
