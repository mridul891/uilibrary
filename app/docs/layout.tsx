"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./docstyles.css"; // Ensure this handles .mdx-* classes properly

const components = [
  {
    name: "Button",
    href: "/docs/button",
    description:
      "Interactive button component with multiple variants and sizes",
    category: "Form",
  },
  {
    name: "Toast",
    href: "/docs/toast",
    description:
      "Interactive accordion component with multiple variants and sizes",

  },
  // Add more components here

];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white transition-colors">
      {/* Header */}
      <header className="bg-[#0a0a0a] border-b border-gray-800 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black text-xs font-bold">UI</span>
              </div>
              <span className="text-sm font-medium text-white">
                ui.Crezium
              </span>
            </Link>

            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="sm:hidden text-white rounded-md"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/docs" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
                Components
              </Link>
              <Link href="/blocks" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
                Blocks
              </Link>
              <button className="text-gray-400 hover:text-white">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4 0-6.6-5.4-12-12-12z" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Layout Grid */}
      <div className="flex flex-row min-h-screen">
        {/* Sidebar */}
        {sidebarOpen ? (
          <aside className="absolute sm:relative sm:w-64 w-64 z-30 sm:z-auto flex-shrink-0 border-r border-gray-800 bg-[#0a0a0a] h-full transition-all duration-400">
            <div className="sidebar-nav h-full overflow-y-auto px-3 py-6">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Introduction</h3>
                  <button onClick={() => setSidebarOpen(false)} className="hidden sm:block text-white rounded-md">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
                <nav className="space-y-1">
                  <Link href="/docs" className="block px-3 py-1.5 text-sm text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </nav>
              </div>

              <div className="mb-8">
                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Components</h3>
                <nav className="space-y-1">
                  {components.map((component) => (
                    <Link
                      key={component.href}
                      href={component.href}
                      className={`block px-3 py-1.5 text-sm transition-colors ${
                        pathname === component.href
                          ? "text-white bg-gray-800/50 rounded-md"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {component.name}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="mb-8">
                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Getting Started
                </h3>
                <nav className="space-y-1">
                  <Link
                    href="/docs/installation"
                    className={`block px-3 py-1.5 text-sm transition-colors ${
                      pathname === "/docs/installation"
                        ? "text-white bg-gray-800/50 rounded-md"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Installation
                  </Link>
                  <Link
                    href="/docs/usage"
                    className={`block px-3 py-1.5 text-sm transition-colors ${
                      pathname === "/docs/usage"
                        ? "text-white bg-gray-800/50 rounded-md"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Usage
                  </Link>
                </nav>
              </div>
            </div>
          </aside>
        ) : (
          <aside className="hidden sm:flex w-14 flex-shrink-0 border-r border-gray-800 bg-[#0a0a0a] transition-all duration-400 justify-center items-start pt-5">
            <button onClick={() => setSidebarOpen(true)} className="text-white rounded-md">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 w-full max-w-full overflow-x-hidden">
          <div className="p-4 sm:px-10 sm:py-8 max-w-screen-xl mx-auto">
            <div className="transition-colors mdx-content">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
