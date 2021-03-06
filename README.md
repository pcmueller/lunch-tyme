<h1 align="center">LUNCH TYME</h1>

<h3 align="center" style="font-style: italic;">A restaurant geolocation app made for the Bottle Rocket FED Coding Test</h2>
<br>

<p align="center">
  <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="javascript"/>
  <img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react"/>
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="react router"/>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" alt="html5"/>
  <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" alt="css3"/>
  <img src="https://img.shields.io/badge/SASS%20-hotpink.svg?&style=for-the-badge&logo=SASS&logoColor=white" alt="sass"/>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" alt="heroku"/>
  <img src="https://img.shields.io/badge/travisci%20-%232B2F33.svg?&style=for-the-badge&logo=travis&logoColor=white" alt="travisci"/>
  <img src="https://img.shields.io/badge/npm-%23cb0000.svg?logo=npm&logoColor=white&style=for-the-badge" alt="npm" />
  <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="git" />
</p>
<p align="center">
  <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="vscode" />
  <img src="https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=macos&logoColor=F0F0F0" alt="macOS"/>
  <img src="https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white" alt="chrome"/>
</p>

<br>

<p align="center">
  <img src="https://app.travis-ci.com/pcmueller/lunch-tyme.svg?token=G9yCJs12yhctP4AY4jEP&branch=main" alt="build badge"/>
</p>

## Features

- [Live page](https://lunch-tyme-app.herokuapp.com/) deployed on Heroku
- Functional, modular component structure using React and Hooks
- Styling and design using Sass/SCSS
- Continuous Integration using TravisCI
- Engineered and test driven using Mac OS Big Sur 11.6, VSCode, and Google Chrome OS browser and DevTools
- RESTful API data fetching
- "Detail View" displayed on same page as "List View" using sliding drawer animation
- Sliding drawer functionality and UI built using `react-sliding-pane` package
- Map UI and location data rendering using Mapbox SDK via `react-map-gl` package
- Locations pinpointed using Mapbox markers, which can be clicked to display restaurant Info Label popups
- "Active" restaurant marker distinguished from other location pins
- User geolocation enabled and displayable by clicking map icon in header navigation bar
- Mobile-first RWD with 1, 2, and 3-column flex displays, implemented using breakpoints for iPhone 5/SE, iPhone 6/7/8, iPad, iPad Pro, and laptop screen sizes
- Global footer anchored on mobile view and removed for larger screen sizes

## Screenshots


* iPhone 6/7/8 mobile view

|List View<!-- .element: style="text-align:center;" -->|Detail View<!-- .element: style="text-align:center;" -->|Geolocation View<!-- .element: style="text-align:center;" -->|
|-------|-------|-------|
|![](/src/assets/images/ListView-iPhone.png)<!-- .element: style="text-align:center;" -->|![](/src/assets/images/DetailView-iPhone.png)<!-- .element: style="text-align:center;" -->|![](/src/assets/images/Geolocation-iPhone.png)<!-- .element: style="text-align:center;" -->|

* iPad tablet view

|List View<!-- .element: style="text-align:center;" -->|Detail View<!-- .element: style="text-align:center;" -->|Geolocation View<!-- .element: style="text-align:center;" -->|
|-------|-------|-------|
|![](/src/assets/images/ListView-iPad.png)<!-- .element: style="text-align:center;" -->|![](/src/assets/images/DetailView-iPad.png)<!-- .element: style="text-align:center;" -->|![](/src/assets/images/Geolocation-iPad.png)<!-- .element: style="text-align:center;" -->|
