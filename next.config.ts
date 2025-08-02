
// next.config.mjs
import createMDX from '@next/mdx';
import rehypePrettyCode from 'rehype-pretty-code';

const withMDX = createMDX({
  extension: /\.mdx?$/, // Include .md if you use pure Markdown
  options: {
    // Any remark plugins (e.g., remark-gfm)
    remarkPlugins: [],
    // Rehype plugins for HTML transformation
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          // Theme options:
          theme: 'github-dark-dimmed', // Choose your desired theme!
          // Or you can specify different themes for light/dark mode:
          // theme: {
          //   dark: 'github-dark-dimmed',
          //   light: 'github-light',
          // },
          showLineNumbers: true, // Optional: show line numbers
        },
      ],
    ],
    format: 'mdx', // Or 'md',
    
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure your Next.js page extensions to include .mdx
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Other Next.js configurations
  // ...
};

export default withMDX(nextConfig);