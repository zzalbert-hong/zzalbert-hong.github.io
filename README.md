This repository contains the source code for my personal website, built using Jekyll and hosted with GitHub Pages.

```text
zzalbert-hong.github.io/
   ├─── README.md           # About this repo
   ├─── DOCUMENTATION.txt   # Conventions I use and design decisions I made
   ├─── TODO.txt            # Tasks and ideas to do or consider doing
   │
   ├─── .gitignore    # Prevents Jekyll-generated files appearing in my repo
   ├─── CNAME         # Specifies my custom domain
   ├─── Gemfile       # Documents the intended Jekyll environment ("github-pages")
   ├─── _config.yml   # Specifies Jekyll's main configuration options
   │
   ├─── _latouts/
   │      ├─── default.html   # Layout of every page except private pages
   │      └─── plain.html     # Layout of private pages
   │
   ├─── _includes/   # Reusable modules or complex self-contained components
   │      ├─── ...
   │      ├─── navbar.html
   │      ├─── subnav.html
   │      ├─── content-heading.html
   │      └─── content-closure.html
   │
   ├─── _data/                  # Data structures such as lists and dictionaries
   │      ├─── ...                that are referred to in html documents
   │      ├─── variables.yml    # Page variables for each of my custom collections
   │      ├─── navigation.yml   # Structure of the site and key info about each page
   │      ├─── socials.yml      # List of social media links and contact info
   │      └─── 404quotes.yml    # Fun quotes to display on the  404 error page
   │
   ├─── _privates/   # My (custom) collection of private pages
   ├─── _projects/   # My (custom) collection of project documents
   ├─── _courses/    # My (custom) collection of course info documents
   ├─── _myposts/    # My (custom) collection of blog posts
   │      ├─── ...
   │      └─── [file-name].md
   │
   ├─── assets/
   │      ├─── css/
   │      │      ├─── default.css
   │      │      ├─── plain.css
   │      │      └─── fancy.css
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
   │      ├─── movies.html
   │      ├─── books.html
   │      └─── ...                   # Maybe I will add more stuff later
   │
   └─── 404.html   # The page that is shown when there is a 404 error
```
