export default function DocsPage() {
  return (
    <div className="mdx-content">
      <h1>Introduction</h1>
      <p>
        Welcome to UI Library Studio - a modern, accessible, and customizable component library built with React, TypeScript, and Tailwind CSS.
      </p>
      
      <h2>About</h2>
      <p>
        This library provides a comprehensive set of components designed with a focus on:
      </p>
      <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
        <li>Accessibility and semantic HTML</li>
        <li>Consistent design system</li>
        <li>TypeScript support</li>
        <li>Customizable styling with Tailwind CSS</li>
        <li>Status-based component variants</li>
      </ul>

      <h2>Design Philosophy</h2>
      <p>
        Our components are built with a status-first approach, making it easy to create interfaces that communicate state clearly to users. Each component includes variants for different states like Success, Failed, Pending, InProgress, and more.
      </p>

      <h2>Technology Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/20">
          <h3 className="text-white font-semibold mb-2">Frontend</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>React 18+</li>
            <li>TypeScript</li>
            <li>Next.js 15+</li>
            <li>Tailwind CSS 4</li>
          </ul>
        </div>
        <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/20">
          <h3 className="text-white font-semibold mb-2">Utilities</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>class-variance-authority</li>
            <li>tailwind-merge</li>
            <li>MDX for documentation</li>
            <li>System UI fonts</li>
          </ul>
        </div>
      </div>

      <h2>Getting Started</h2>
      <p>
        Ready to start building? Check out our installation guide to get up and running in minutes.
      </p>
      
      <div className="flex gap-4 mt-6">
        <a 
          href="/docs/installation" 
          className="inline-flex items-center px-4 py-2 border border-gray-700 rounded-md text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          Installation Guide
        </a>
        <a 
          href="/docs/button" 
          className="inline-flex items-center px-4 py-2 border border-gray-700 rounded-md text-sm font-medium text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
        >
          View Components
        </a>
      </div>
    </div>
  );
}
