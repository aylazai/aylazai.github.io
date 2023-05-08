module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    // siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Ayla Khan',
    // Main Site Title
    title: `Ayla Khan | Software Engineer`,
    // Description that goes under your name in main bio
    description: "Software Engineer from Canada.",

    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/aylazai`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/ayla-khan-1b089a1aa/`,
    // Content of the About Me section
    about:`An innovative and driven software developer dedicated to creating sustainable and scalable systems that drive social and technical impact.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Web3 Crowdfunding Application (Kickstarter)',
        description: 'A decentralized application built on the Ethereum blockchain that allows users to create, view, and donate to crowdfunding campaigns directly through the blockchain.',
        link: 'https://roaring-basbousa-6b5bbf.netlify.app/',
      },
      {
        name: 'Sumz',
        description: "A web application that allows users to summarize articles using OpenAI's GPT model. It is built using ReactJS and Vite, and features a responsive and visually appealing UI/UX with glass morphism effects created using Tailwind CSS.",
        link: 'https://jade-travesseiro-76dd55.netlify.app/',
      },
      {
        name: 'Stock Trend Prediction WebApp',
        description:'a Python-based web application that predicts stock trends using a multi-layer LSTM recurrent neural network.',
        link: 'https://github.com/aylazai/Stock-Recommendation-Engine',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Acme Corp',
        description: 'Full-Stack Developer, February 2020 - Present',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Globex Corp',
        description: 'Full-Stack Developer, December 2017 - February 2020',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Hooli',
        description: 'Full-Stack Developer, May 2015 - December 2017',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
