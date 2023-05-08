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
    author: `https://drive.google.com/file/d/11XWX8quH6D7NJotEEWfuGoov1Co2dfmd/view?usp=sharing`,
    // Optional: Github account URL
    github: `https://github.com/aylazai`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/ayla-khan-1b089a1aa/`,
    // Content of the About Me section
    about:`An innovative and driven software developer dedicated to creating sustainable and scalable systems that drive social and technical impact.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Summize',
        description: "Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear concise summaries using using OpenAI's GPT model.",
        link: 'https://jade-travesseiro-76dd55.netlify.app/',
      },
      {
        name: 'CrowdFunding Web 3.0 App (Kickstarter)',
        description: 'A decentralized application built on the Ethereum blockchain that allows users to create, view, and donate to crowdfunding campaigns directly through the blockchain.',
        link: 'https://roaring-basbousa-6b5bbf.netlify.app/',
      },
      {
        name: 'Stock Trend Prediction Web App',
        description:'A Python-based web application that predicts stock trends using a multi-layer LSTM recurrent neural network.',
        link: 'https://github.com/aylazai/Stock-Recommendation-Engine',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Acrylic Robotics | Backend Software Engineer ',
        description: "January 2023 - April 2023",
        link: 'https://acrylicrobotics.ca/',
      },
      {
        name: 'Quanergy | Software Developer',
        description: 'May 2022 - August 2022',
        link: 'https://quanergy.com/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'C, C++, JavaScript (ES6+), Node.js, React, Tailwind CSS, Solidity, Python',
      },
      {
        name: 'Technologies',
        description: 'Pandas, Scikit-Learn, Matplotlib, SciPy, Keras, NumPy, MySQL, SQLite, Jenkins, AWS, Qt',
      },
    ],
    // Optional: List your Education, they must have `name` 
    education: [
      {
        name: 'BSE. Honours Software Engineering',
        description: 'University of Waterloo',
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
