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

- [ ] Build the Detail View for the cards
- [ ] Make photo component to render each Instrument category on a column
  - FHAZ
  - RHAZ
  - NAVCAM
  - MAST

### Any Issues -

### What I learned -

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Resources

[Weather SVG](https://www.amcharts.com/free-animated-svg-weather-icons/)

[NASA MARS Rover API](https://api.nasa.gov/)

[NASA Curiosity Selfie JPL](https://www.jpl.nasa.gov/images/pia22486-curiositys-dusty-selfie)
