# README

Below are the sent instructions with my comments/problems/speculations/conclusions etc, I will prefice these with "**R:**". Where appropriate I will add a checkbox to note what is and is not done. I will try to update this file regularly. At the very very end there is a summary.

---

# Frontend Test

### Intro

We want you to create a development ready environment and that will serve a small application that will have initial data saved in localstorage that are managable through public API.

**R:** I usually divide my project in two folders, client and server. In this case, it appears I can do everything and never leave the client folder, if I understand localstorage to mean the [Web API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and not the machine I'm working on. Speaking of which, some technical details:
* Working on an UBUNTU 16.04
* Editing in Sublime Text 3
* App written in Vue.js
* Vue will pretty much take care of the build system
* Styles written in SCSS
* I am using the standard JS style with ESLint, which means no semicolons among other things
* I'm viewing the result in Google Chrome with the vue dev tools addon

### Requirements

All your codebase should be available in git repository with a history of your work progress.

#### Build system

**R:** As I mentioned Vue (webpack) will take care of ~~most of the things~~ everything regarding the build. Vue setup:

```bash
# to install the environment (assuming vue-cli is installed)
vue init webpack

# for state management (dependency)
npm i -S vuex

# for using and compiling SCSS (dev dependencies)
npm i -D sass-loader node-sass style-loader
```


1. [x] Create a development ready build system
2. [x] Your build tool should compile SCSS to CSS
3. [x] …should transform ES6 syntax
4. [x] …should create sourcemaps for JS/SCSS
5. [x] …should optimise assets
6. [x] …should be watching for a code changes and compile on save
7. [x] …should create a localhost environment

```bash
# for development (compilation/dev server/hot reload etc)
npm run dev

# for build (minification/optimisation/src maps etc)
# this creates a dist folder with an index.html file and static folder where CSS/JS lives
npm run build
```

#### Application

**R:** I am adding my own "TODO's" in this list to help see what needs to be done or where I'm experiencing problems.

1. [ ] Create application using provided PSD file
    * **R:** I was able to extract everything I need but in the process of placing everything had to conclude that I have very severe deficiencies when it comes to positioning things
    * [x] extract images
    * [x] extract SVG's
    * [x] get and set colors
    * [x] get and set fonts
    * [ ] do home view
        * [ ] add the purple banner
        * [ ] add profile pictures
    * [ ] do statistics view
        * [ ] fix scroller
        * [ ] make circle part
    * [ ] figure out and develop responsiveness for other screen sizes
2. [ ] You are allowed to use vanilla JavaScript or any framework of your choice
    * [x] setup vue
    * [x] organize file structure
    * [x] setup vue router
    * [x] setup vuex
3. [ ] Using your imagination create animations for various effects
    * **R:** didn't get to this part
    * [ ] transition animation for view change
4. [ ] Statistics data should be stored in localStorage
    * **R:** The data template I chose at the moment can be seen in client/src/store/data.js, the project is set up so that this data is saved to localStorage if it is not already there. 
    * [ ] organize data
    * [x] add data to localStorage
5. [ ] User should be able to check statistic for various months within the current year
    * **R:** not entirely sure if this is meant for the API or just the UI. If the API then I'm not sure how to do this with localStorage, as far as I know you can set expiration date to cookies but not localStorage. If UI then no problem. Didn't have time to do it, but I would be able to do it or would have a rough idea how to do it.
6. [ ] Application should have public methods to manage (create/delete) data entries
    * **R:** not entirely sure what would constitute "public" in this case or how one would design a "public" API differently. I believe I can setup GET routes with paramiters as getters and setters, but it wouldn't be very RESTful and if that is the point at all. Google needed. 
    * [ ] setup routes that manipulate localStorage data
7. [ ] You can extend the application as many functionality/layouts as you want

### Final words

Do as much as you can with the provided assets/information, use your imagination to create additional cool animations, interesting features, whatever you want. Don’t be afraid to send partial result if you are struggling with some step, describe issues you had and we will take it into consideration. In the of the day, your mindset and thoughts behind the implementation is what important.

Thank you and good luck!

### Messy Comments

**R:** this section is just meant for me. It's to quickly add some keywords or comments or points of interest for possible use later
* vue devtools
* components/views
* icon file
* CSS reset best practices/efficiency
* google fonts did not have Lato medium, and what is the most efficient way to add fonts
* SVG necessary attributes
* need linear-gradient just on background image not where the image ends (maybe img and z-index>)
* component naming is a mess, need system
* should have planned more carefully (see what components overlap)

# Summary

## Quick Overview Of The Project

I will layout the file structure here and comment what is where. The things I leave out are the build files for dev server linting etc

* index.html (starting html file) 
* src
    * App.vue (the top component, everything else is a child of this component)
    * main.js (setting up vue)
    * assets (images and svg, the svg are just for reference, I placed the actual svg code in a component, I think this is a good strategy because since it is in a component the messy SVG code doesn't break the beauty of an html layout and it's better to animate with)
    * components (building blocks of the website, all files include the markup (template tags), the logic (script tags) and appearance (style tags)
    * router (basic router, my intention was to place the API routes here and instead of rendering a view, they would return a JSON, not sure if this is possible)
    * scss (I placed a css reset, global settings and variables for colors and fonts here, to be used/shared by all components, otherwise each component has a scoped style tag, meaning that if I set the same class name to two different components, they will render as different names and not overwrite each other styles)
    * store (vue plugin called vuex for a humane state management is set here, if the scss folder has global styles then store has global logic or actions, instead of passing events and properties up and down the component tree, all components have access to whatever is placed here. In this case retrieving and manipulating data)
    * views (components that act as views are placed here, although I am not sure it's a good idea to seperate these from rest of the components)
    * dist (if npm run build is done then this folder generates an optimized version of the [roject])

## Self Criticism

The biggest problem I had in my opinion is my lack of standarts and practice in positioning and layout (at least in the beginning). I felt I was more solid but since I started this project with a fixed dimension (which was probably my first mistake) I started doing different types of laying out for different components, making a mess in other words. I see full day of nothing but positioning in my near future.

This ties with my next conclusion - have to plan things out beforehand. I did some planning, thought about whether to use Vue or VanillaJS, how to get stuff from the PSD file, how to organize files. But a lot of things I made up as I went along, it's probably fine for some things but it wasn't compatible with my intention to build the page from components. It is the current trend to think in components and I support this trend but ir requires more planning. My components here have messy names and not as modular as I would like or would try to make in the future. I think from now on I will devise a planning stage for projects where I write on paper exactly what kind of components is the site made out of and decide on the naming convention before hand.

Public API - I'm blank here. My intention was to use the vue router with dynamic paramiters to get the necessary data like website/get/:month, I'm sure I could get the data in the console log or on the screen but I don't know how one would make it return a JSON file. Without the use of a backend that is. Googling for it didn't help much either, most answers were related to consuming another API or making one that communicates your front end to backend and not a "public" one. So maybe this calls for REDDIT instead.

If I would start this project or a project like it from the beginning, I would devote more time to planning - determining the smallest components making up the page, deciding how I will lay them out, decide on a naming convention for everything (js, scss, vue components, custom html tags etc)