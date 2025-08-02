export default function InstallationPage() {
  return (
    <div className="mdx-content">
      <h1>Installation</h1>
      <p>Get started with the UI Library by installing the components you need.</p>
      
      <h2>Prerequisites</h2>
      <p>Make sure you have the following installed:</p>
      <ul className="list-disc list-inside text-gray-400 space-y-2">
        <li>Node.js 18.0 or later</li>
        <li>React 18.0 or later</li>
        <li>Next.js 13.0 or later</li>
        <li>Tailwind CSS 3.0 or later</li>
      </ul>

      <h2>Setup</h2>
      
      <h3>1. Install Dependencies</h3>
      <div className="rounded-lg border border-gray-800 bg-gray-950 mt-4">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
          <span className="text-sm font-medium text-gray-400">bash</span>
        </div>
        <div className="p-4">
          <pre className="text-sm text-gray-300"><code>{`npm install class-variance-authority tailwind-merge`}</code></pre>
        </div>
      </div>

      <h3>2. Configure Tailwind CSS</h3>
      <p>Make sure your Tailwind CSS configuration includes the component paths:</p>
      <div className="rounded-lg border border-gray-800 bg-gray-950 mt-4">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
          <span className="text-sm font-medium text-gray-400">js</span>
        </div>
        <div className="p-4">
          <pre className="text-sm text-gray-300"><code>{`// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './registry/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // ... rest of your config
}`}</code></pre>
        </div>
      </div>

      <h3>3. Add Components</h3>
      <p>Copy the components you need from the registry to your project:</p>
      <div className="rounded-lg border border-gray-800 bg-gray-950 mt-4">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
          <span className="text-sm font-medium text-gray-400">bash</span>
        </div>
        <div className="p-4">
          <pre className="text-sm text-gray-300"><code>{`# Create the directory structure
mkdir -p components/ui

# Copy the component files
cp registry/default/ui/button.tsx components/ui/button.tsx`}</code></pre>
        </div>
      </div>

      <h2>Icons Setup</h2>
      <p>Some components use icons. Make sure to add the required icon files to your public directory:</p>
      <div className="rounded-lg border border-gray-800 bg-gray-950 mt-4">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
          <span className="text-sm font-medium text-gray-400">bash</span>
        </div>
        <div className="p-4">
          <pre className="text-sm text-gray-300"><code>{`# Copy icon files to your public directory
cp -r public/icons/ your-project/public/icons/`}</code></pre>
        </div>
      </div>

      <h2>Usage</h2>
      <p>Once installed, you can start using the components in your project:</p>
      <div className="rounded-lg border border-gray-800 bg-gray-950 mt-4">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
          <span className="text-sm font-medium text-gray-400">tsx</span>
        </div>
        <div className="p-4">
          <pre className="text-sm text-gray-300"><code>{`import Button from '@/components/ui/button'

export default function MyComponent() {
  return (
    <Button name="Click me" variant="Success" />
  )
}`}</code></pre>
        </div>
      </div>
    </div>
  );
}
