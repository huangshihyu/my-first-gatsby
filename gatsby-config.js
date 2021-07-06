module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'My Gatsby Site 🚀',
    description: 'Welcome to this page',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
  ],
};
