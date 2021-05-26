# Next.js portfolio

LIVE VERSION [https://jarrodkane.com/](https://jarrodkane.com/).

Objective of this project is to use Next.js to create my own portfolio.
The Home page is meant to hold multiple sections, and the only other pages are Blog/Twitch/Youtube.
Blog pages will be populated by contentful.
The podcast grabs the staticProps from an RSS feed, then generates each page

The main reason behind this project is to try and use Tailwindcss.

The basic design for this site is made in [Figma](https://www.figma.com/file/wLqVYuYcdFWoMFCHxxqA1c/JarrodKane?node-id=1%3A982).
The structure of this project is using atomic design.
The stying is using Tailwindcss, I was going to used styled-components but decided to try something different.
Prototyping was done using Storybook.

This is using:

- [Tailwindcss](https://tailwindcss.com/)
- [Netlify](https://www.netlify.com/) (Site host)
- [Contentful](https://www.contentful.com/) (Blog CMS)
- [Pinecast](https://pinecast.com) (Podcast hosting)
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
- [Storybook](https://storybook.js.org/)

---

## TO RUN:

- Have nodejs installed, version 14.17.0 was used
- NPM installed
- git clone the repo
- Cd into the project
- `npm i` to install all the modules
- This is set up to grab contentful API information from a blog, you will need **CONTENTFUL_SPACE_ID & CONTENTFUL_ACCESS_KEY**
  that should be placed into an .env.local file
  - the fields are thumbnail, title, shortDesc, publishDate, type, slug
  - Look into the blog/index page for more information on what gets deconstructed from a normal blog post
- `npm run dev` to run the nextjs project

---

## TODO:

- [x] Create readme
- [x] Styling
- [x] Mobile view
- [x] Desktop view
- [ ] Convert to TypeScript

### Features

- [x] Storybook
- [x] CMS (Contentful)
- [ ] Dark/Light theme

### Pages/Content

- [x] Home
- [x] Blog
- [x] Podcast
- [x] Youtube
- [x] Twitch

### Testing

- [ ] Jest snapshot testing
- [ ] Jest unit tests
- [ ] Jest intergration tests

---
