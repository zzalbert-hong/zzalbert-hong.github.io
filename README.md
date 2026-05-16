This repository contains the source code for my personal website, built using Jekyll and hosted with GitHub Pages.

```text
zzalbert-hong.github.io/
   ├─── .gitignore    # Prevents Jekyll-generated files appearing in my repo
   ├─── README.md     # About this repo
   ├─── CNAME         # Specifies my custom domain
   ├─── _config.yml   # Specifies Jekyll's main configuration options
   ├─── Gemfile       # Documents the intended Jekyll environment (GitHub Pages)
   │
   ├─── _latouts/
   │      ├─── default.html   # Layout of every page except standalone pages
   │      └─── plain.html     # Layout of standalone pages
   │
   ├─── _includes/   # Reusable modules or complex self-contained components
   │      ├─── ...
   │      ├─── og-tags.html
   │      ├─── navbar.html
   │      ├─── page-heading.html
   │      └─── page-closing.html
   │
   ├─── _data/                  # Data structures such as lists and dictionaries
   │      ├─── ...                that are referred to in html documents
   │      ├─── navigation.yml   # Structure of the site and key info about each page
   │      ├─── variables.yml    # Page variables for each of my custom collections
   │      └─── 404quotes.yml    # Fun quotes to display on the  404 error page
   │
   ├─── _standalones/   # My (custom) collection of standalone pages
   ├─── _projects/      # My (custom) collection of project documents
   ├─── _courses/       # My (custom) collection of course info documents
   ├─── _myposts/       # My (custom) collection of blog posts
   │      ├─── ...
   │      └─── [file-name].md
   │
   ├─── assets/
   │      ├─── css/
   │      │      ├─── default.css
   │      │      ├─── fancy-features.css
   │      │      └─── plain.css
   │      ├─── js/
   │      │      └─── basic.js
   │      ├─── images/
   │      │      ├─── ...
   │      │      ├─── logo.png
   │      │      ├─── portrait.jpg
   │      │      └─── me-on-tree.JPG
   │      ├─── pdfs/
   │      └─── ...
   │
   ├─── index.html                   # Main pages of my website
   ├─── profile/
   │      ├─── index.html
   │      ├─── education.html
   │      ├─── experiences.html
   │      ├─── projects.html
   │      └─── ...                   # Maybe I will add more stuff later
   ├─── courses/
   │      ├─── index.html
   │      ├─── mathematics.html
   │      ├─── philosophy.html
   │      └─── other.html
   ├─── blog/
   │      ├─── index.html
   │      ├─── mathematics.html
   │      ├─── philosophy.html
   │      └─── other.html
   ├─── extras/
   │      ├─── index.html
   │      ├─── resources.html
   │      ├─── literature.html
   │      ├─── fancy-features.html
   │      └─── ...                   # Maybe I will add more stuff later
   │
   └─── 404.html   # The page that is shown when there is a 404 error
```
