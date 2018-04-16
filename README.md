# README

Below are the sent instructions with my comments/problems/speculations etc, I will prefice these with "**R:**". Where appropriate I will add a checkbox to note what is and is not done. I will try to update this file regularly.

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


1. [ ] Create a development ready build system
2. [ ] Your build tool should compile SCSS to CSS
3. [ ] …should transform ES6 syntax
4. [ ] …should create sourcemaps for JS/SCSS
5. [ ] …should optimise assets
6. [ ] …should be watching for a code changes and compile on save
7. [ ] …should create a localhost environment

#### Application

**R:** I am adding my own "TODO's" in this list to help see what needs to be done or where I'm experiencing problems.

1. [ ] Create application using provided PSD file
    * [ ] extract images
    * [ ] extract SVG's
    * [ ] get colors and fonts
2. [ ] You are allowed to use vanilla JavaScript or any framework of your choice
    * [ ] setup vue
    * [ ] organize file structure
    * [ ] setup vue router
    * [ ] setup vuex
3. [ ] Using your imagination create animations for various effects
4. [ ] Statistics data should be stored in localStorage
    * [ ] organize data
    * [ ] add data to localStorage
5. [ ] User should be able to check statistic for various months within the current year
6. [ ] Application should have public methods to manage (create/delete) data entries
    * **R:** not entirely sure what would constitute "public" in this case or how one would design a "public" API differently. I believe I can setup GET routes with paramiters as getters and setters, but it wouldn't be very RESTful and if that is the point at all. Google needed.
    * [ ] setup routes that manipulate localStorage data
7. [ ] You can extend the application as many functionality/layouts as you want

### Final words

Do as much as you can with the provided assets/information, use your imagination to create additional cool animations, interesting features, whatever you want. Don’t be afraid to send partial result if you are struggling with some step, describe issues you had and we will take it into consideration. In the of the day, your mindset and thoughts behind the implementation is what important.

Thank you and good luck!