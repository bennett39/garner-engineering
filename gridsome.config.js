module.exports = {
  siteName: "Garner Engineering",
  siteDescription:
    "Garner Enginnering is a firm in Asheville, NC specializing in dam engineering",
  siteUrl: "https://garner-eng.com",
  titleTemplate: "%s | Garner Engineering",
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-27563839-1'
      }
    }
  ],
};
