/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['*.html'],
  corePlugins: {
    preflight: false,

  },
  prefix: 'tw-',
  important: true,
  theme: {
    extend: {},
  },
  plugins: [],
}

