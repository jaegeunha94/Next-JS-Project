const API_KEY = process.env.API_KEY;
module.exports = {
  // pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/old-blog/:path*',
        destination: '/new-sexy-blog/:path*',
        permanent: false,
      },
    ];
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/movies',
  //       // destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  //       destination: `/api/movies1/2/3`,
  //     },
  //   ];
  // },

  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files
        {
          source: '/movies/:path',
          destination: '/about/',
          // has: [{ type: 'query', key: 'overrideMe' }],
        },
      ],
      afterFiles: [
        // These rewrites are checked after pages/public files
        // are checked but before dynamic routes
        {
          source: '/movies/2',
          destination: '/movies/2',
        },
      ],
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        {
          source: '/movie/:path*',
          destination: `/movies/:path*`,
        },
      ],
    };
  },
};
