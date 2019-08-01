module.exports = {
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-drupal",
      options: {
        baseUrl: "https://dev-gatsby-drupal-demo-lwj.pantheonsite.io",
        // preview: true
      },
    },
  ],
}
