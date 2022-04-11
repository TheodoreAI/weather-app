# weather-app

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Lints and fixes files

```
yarn lint
```

## Dev Progress

### Day 1

### What I did -

- [x] Making the weather app view is done
- [x] Download and add Axios to make the API Calls
- [x] Make sure API keys are stored in an untracked/uncommitted .env file

### Any Issues -

- [ ] ~~Insight Weather API is out of service~~ have to use Mars Curiosity CSV data

### What I learned -

- You have to start .env variables with `VUE_APP_` in Vue
- axios `get` -> `then` -> `catch`

### Day 2

### What I did -

- [x] **Make the weather app sol components is currently in progress**
- [x] There are other APIs, so continue with the Mars Image API to add images to the weather sol cards
- [x] Use Bootstrap to style the Navbar
- [ ] Build the Detail View for the cards
- [ ] Add images to the detail view and the cards

### Any Issues -

- [ ] ~~Not all Sols (Martian Days) have images~~

### What I learned -

- Using the Rover Photos API to pull different types of images from different instruments

### Day 3

### What I will do -

- [x] Add Weather man component
- [x] Add weather svg component
- [x] Store image URL's in JSON file

### Any Issues -

- using localStorage with Vuex is difficult almost got it

### What I learned -

Learned how localStorage _might_ work with Vuex

### Customize configuration

### Day 4

### What I will do -

- [x] Added a modal component to the cards
- [x] address the localStorage branch - fix bugs and complete the object instantiation to store image urls
- [x] Added a background-image and changed the layout of the cards

### Any Issues -

- Bugs when using localStorage and setting a timer so that the API gets called every 24 hours to get new data - made that a stretch goal

### What I learned -

- You can only store strings in localStorage, making async calls to api, storing them

### Day 5

### What I will do -

- [x] Edit the modal component to fit the needs of each card
- [x] Get calls to fill up the other page

### Any Issues -

- [x] some of the sols don't have images, have to adjust that and added a feature to let users know

### What I learned -

- Building a search-like functionality using a database, not accepting strings to avoid cross site scripting. (Only accept numbers for the sols.)

### Day 6

### What I will do -

- []
- []

### Any Issues -

### What I learned -

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Resources

[Weather SVG](https://www.amcharts.com/free-animated-svg-weather-icons/)

[NASA MARS Rover API](https://api.nasa.gov/)

[NASA Curiosity Selfie JPL](https://www.jpl.nasa.gov/images/pia22486-curiositys-dusty-selfie)
