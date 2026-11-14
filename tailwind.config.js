/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        login: ['Arial', '"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'login-card': 'var(--shadow)',
      },
      colors: {
        login: {
          ink: 'var(--ink)',
          text: 'var(--text)',
          muted: 'var(--muted)',
          card: 'var(--card)',
          'card-line': 'var(--card-line)',
          field: 'var(--field-bg)',
          'field-line': 'var(--field-line)',
          placeholder: 'var(--placeholder)',
          btn: 'var(--btn)',
          'btn-hover': 'var(--btn-hover)',
          'btn-ink': 'var(--btn-ink)',
          gold: 'var(--gold)',
          header: 'var(--header-bg)',
          err: 'var(--err)',
          seg: 'var(--seg-bg)',
          'seg-active': 'var(--seg-active)',
          'seg-active-ink': 'var(--seg-active-ink)',
          'seg-ink': 'var(--seg-ink)',
          thumb: 'var(--thumb)',
          sun: 'var(--sun)',
          moon: 'var(--moon)',
        },
      },
    },
  },
};
