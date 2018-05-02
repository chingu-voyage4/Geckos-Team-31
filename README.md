![Waffle.io](https://img.shields.io/badge/waffle-Inbox%200%20%7C%20Backlog%200%20%7C%20Next%200%20%7C%20In%20Progress%200%20%7C%20Review%200%20%7C%20Done%200-green.svg)

# Voyage-4 - Geckos-Team-31
## MEALACQUAINTANCE
Modified clone of Mealpal, a monthly subscription service that allows users to order online from a selection of lunches in their area. This project is built by a remote collaboration team as part of the Chingu Cohorts. 

## Table of Contents
* [MEALACQUAINTANCE](#mealacquaintance)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
    * [Pre-requisites](#pre-requisites)
    * [Installing](#installing)
    * [Contributing](#contributing)
    * [Testing](#testing)
    * [Deploying](#deploying)
* [Design and Architecture](#design-and-architecture)
    * [Priority Matrix](#priority-matrix)
    * [MVP](#mvp)
    * [Wireframes](#wireframes)
    * [App Components](#app-components)
    * [Issues/Resolutions](#issuesresolutions)
* [Credits](#credits)
* [License](#license)

## Tech Stack
* PostgreSQL
* ExpressJS
* ReactJS
* NodeJS


## Getting Started
This section details the steps to get started with the development and testing process

### Pre-requisites
[Git](https://git-scm.com/downloads) - version control system   
[npm](https://docs.npmjs.com/getting-started/installing-node) - package manager

### Installing
```
git clone https://github.com/chingu-voyage4/Geckos-Team-31.git
cd Geckos-Team-31.git
npm install
```

### Contributing 
IMPORTANT NOTE: Never ever push code into the master branch  

- Make sure you're in the development branch using `git branch`. If not, switch to it.    
`git checkout development`  

- Whenever you're working on a new feature or a fix, create a branch in the format 'feature/feature-name' or 'fix/fix-name'  
`git checkout -b fix/account-page-redesign` 

- Commit your new code or changes locally
```
git add *
git commit -m 'added links and modals to change account password'
```

- Push your local changes to Github in it's corresponding branch  
`git push origin fix/account-page-redesign`

- Create a pull request in Github. Make sure you're making a pull request to development.
![Pull Request Step 1](https://image.ibb.co/herEkH/Screenshot_from_2018_03_13_18_47_34.png)  
![Pull Request Step 2](https://image.ibb.co/fPvMzc/Screenshot_from_2018_03_13_18_32_13.png)

And that's it. You've contributed. Good job! Repeat the whole process again for a new feature of fix.

### Testing
Before you start the server, there's a few things you need to do.
 - Run webpack through the npm script. This is set to watch for any changes in your reactjs files, so once you run the script, it'll automatically transpile the reactjs files to plainjs when you save. Make sure to give webpack 10 or so seconds to transpile everytime.  
 `npm run webpack`

- Use the nodemon npm script to run the server in a development environment. This is set to watch for any changes in your server-side files.  
`npm run devstart`

- Great. Now the server is up and running. 

### Deploying
-to be added-


## Design and Architecture 
This sections details the whole process that went into building this web application 

### Priority Matrix
-to be added-

### MVP
-to be added-

### Wireframes
-to be added-

### App Components
-to be added-

### Issues/Resolutions
#### API for meals

We were able to find two public API for querying meals, but none perfectly suited our needs

**Locu API**  
New account registration no longer allowed as API was acquired by GoDaddy. We attempted to cheat by using the api_key in the documentation examples, but to no avail. We could not come to a conclusion whether it was the api_key or if the API itself has changed, but we were not able to use all of the options presented in the documentation. For example, we were unable to use the menu_items field, which is an important field.

**Zomato API**  
We found that the while Zomato API provided a user-friendly API to work with, it was not an optimal solution. Querying for restaurant, location, meals each required seperate requests with each depending on one another. Which meant that not only did we had to make multiple requests, but also had to query from one request, wait for its response, then query for another, then wait again, and query again, and so on. There are lots of requests nodejs module for the job, however, it was still a more complicated solution than it has to be. 

**Resolution**
So, we have decided to create our own meals API. As we don't have actual data, we've decided to fill the database with dummy data, and those data can be accessed through a simple RESTFUL API. The front-end engineer can easily get a list of restaurants by making a GET request to '/restaurants/' or create new meals by making a PUT request to '/meals/add'.  

---

## Credits
- [Sohel](https://github.com/Sohel-ASM)
- [Sujit Karki](https://github.com/Swoozeki) 
- [Shazi Rahim](https://github.com/shazrahim94)~~
- ~~[Rachel Parris](https://github.com/RachelParris)~~


## License
MIT License

Copyright (c) 2018 Geckos-Team-31
