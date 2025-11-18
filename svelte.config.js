import adapterAuto from '@sveltejs/adapter-auto';
import adapterVercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const isVercel = process.env.VERCEL === '1';

const config = {
  kit: {
    // On Vercel → adapter-vercel
    // Locally → adapter-auto (no symlinks into .vercel/output)
    adapter: isVercel ? adapterVercel() : adapterAuto()
  },
  preprocess: vitePreprocess()
};

export default config;

