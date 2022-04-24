import withMDX from '@next/mdx';
import remarkPrism from 'remark-prism';
import remarkGfm from 'remark-gfm';


const config = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkPrism],
    rehypePlugins: [],
  },
})

export default config({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
  images: {
    domains: ['github.com'],
  },
});
