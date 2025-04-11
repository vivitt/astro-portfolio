<div align='center'>
  <h1>viviyanez.dev</h1>    
</div>

This is my personal portfolio site. It includes a blog where I share what I’m learning, a projects page with things I’ve worked on, and a bit about me.

## Tech stack
* [Astro](https://astro.build/) for building fast static sites

* [Markdown](https://www.markdownguide.org/) for writing blog posts

* [SCSS](https://sass-lang.com/documentation/syntax/) & [BEM](https://getbem.com/) for styling

* [Husky](https://typicode.github.io/husky/) & [lint-staged](https://www.npmjs.com/package/lint-staged) for pre-commit checks

* [GitHub Actions](https://github.com/features/actions) for continuous integration workflows

* [Netlify](https://www.netlify.com/) for deployment

# Geting started

If you want to run it locally:

```
git clone git@github.com:vivitt/astro-portfolio.git
cd astro-portfolio
npm i
npm run dev
```
Open your browser and navigate to `http://localhost:4321`

## Features
* Blog & Projects page powered by markdown and [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)

* Clean, responsive layout

* Easy to maintain and extend

* Fast & accessible, lightweight, and SEO-friendly

<img width="972" alt="Screen Shot 2025-04-11 at 16 36 15" src="https://github.com/user-attachments/assets/8572d5ba-3a67-41de-8632-7df460ad0d7b" />

## Project Structure

A quick look at how the project is organized:

```
/
├── public/         
├── src/
│   ├── components/
|   |── data/
|   |     ├── blog
|   |     └── projects
│   ├── icons/
│   ├── images/
│   ├── layouts/
|   ├── pages/ 
|   ├── styles/  
|   ├── utils/
│   └── content.config.ts
├── test/
├── astro.config.mjs
└── package.json
```

## License
Feel free to use it as a reference, fork it, or build on top of it. Licensed under [MIT](https://github.com/vivitt/astro-portfolio/blob/main/LICENSE).
