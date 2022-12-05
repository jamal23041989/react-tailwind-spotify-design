module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    screens: {
      sm: '500px',
      md: '700px',
      lg: '900px',
      xl: '1100px',
      '2xl': '1300px',
      '3xl': '1500px',
      '4xl': '1700px',
      '5xl': '1900px',
      '6xl': '2100px',
    },
    extend: {
      backgroundImage: {
        checkbox: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='111827' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`,
      },
      gridTemplateColumns: {
        'playlists-mobile': 'repeat(auto-fill, minmax(208px, 1fr))',
        'playlists-tablet': 'repeat(auto-fill, minmax(266px, 1fr))',
        'playlists-desktop': 'repeat(auto-fill, minmax(180px, 1fr))',
      },
      boxShadow: {
        '3xl': '0 16px 24px rgba(0, 0, 0, .3), 0 6px 8px rgba(0, 0, 0, .2)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')],
};
