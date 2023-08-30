# LuminaLife Blog - README

LuminaLife Blog is a web application designed as a blogging platform to share insightful articles and stories. This README provides an overview of the project structure, technology stack, and key features of the application.

## Technology Stack
LuminaLife Blog is built using the following technologies:
- [Next.js 13 ](https://nextjs.org/): A popular React framework for building server-rendered applications.
- [TypeScript](https://www.typescriptlang.org/): A statically typed superset of JavaScript, enhancing code quality and maintainability.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for creating responsive and customizable designs.
- [Redux Toolkit](https://redux-toolkit.js.org/): A simplified state management library for managing application-wide state.

## Project Structure
The project's folder structure is organized as follows:

- app: The route pages implemented using Next.js.
- assets: All assets used in the application.
- components: Base components used across multiple pages.
- constants: Global constants used throughout the application.
- helpers: Global helper functions utilized in different parts of the app.
- hooks: Global custom hooks created for various functionalities.
- routes: Fundamental page components invoked from the `app` folder.
- redux: Configuration and setup of Redux using Redux Toolkit.
- types: Global TypeScript types used across different parts of the application.


## Features
LuminaLife Blog offers four main routes with distinct features:

- Dashboard (Root Route - '/'): Users are greeted with a dashboard page upon entering the website. The dashboard showcases headline sections and recommended blog posts. Users can click on each card to view the detailed content of the respective blog post.
- Blog List ('/blog'): This route displays a list of blog posts in card format. Pagination functionality allows users to navigate through multiple pages of blog posts. Integrated search feature facilitates users in finding specific blog posts.
- Blog Detail ('/blog-detail/:blog_id'): Users can access this route to view the detailed content of a selected blog post. The blog detail page provides information such as the title, author, and description of the blog. Additionally, a list of comments along with the usernames of the commenters is displayed.
- Users ('/users'): The page used to show, add, update, and delete user data. This page also provide search and pagination feature.

## Getting Started
To set up and run the LuminaLife Blog application locally, follow these steps:
- Clone the repository: git clone <repository_url>
- Install dependencies: `npm install` or `yarn install`
- Start the development server: `npm run dev` or `yarn dev`
- Access the application in your browser: http://localhost:3000

## Conclusion
LuminaLife Blog is a Next.js-based web application that enables users to explore and engage with a variety of blog posts. With its well-structured codebase, intuitive user interface, and seamless navigation, the application provides an enjoyable experience for both readers and writers.