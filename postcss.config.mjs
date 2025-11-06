/** @type {import('postcss-load-config').Config} */
// Use the standard PostCSS plugin names: `tailwindcss` and `autoprefixer`.
// The plugin name `@tailwindcss/postcss` can cause resolution issues in some
// environments (and isn't required for Tailwind v3+). Using these names works
// with the installed `tailwindcss` and `autoprefixer` packages.
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

export default config
