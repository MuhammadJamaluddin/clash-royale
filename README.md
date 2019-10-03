# Clash Royale

## How to start the game:

* clone the repository
* run `npm run build` to transpile the components
* run `npm start` to start the server
* open the browser & hit `localhost:3000` & Voila...
* run `npm run test` to initialize the tests

## Design decisions & choices:

### Redux

I used `Redux` as a state management system on top of `React` to leverage its easy access of the centralized state across the component hierarchy & to separate the logic from within the components. It also makes changing the state much easier, manageable & readable since it's made with pure functions (reducers) which accept actions that explicitly express the intention behind the change required to happen in the state. It worked really well in the hierarchy I had since the current deck of cards had to be accessed from components deep down the components hierarchy.

### Material-UI

It makes it really convenient to import different built-in, consistent, elegant & accessible components inspired by Google's Material Design. And it worked really well to get icons, build the information modal & implement the select mode related components.

### react-horizontal-stacked-bar-chart npm package

This package almost perfectly fit the main requirements of the statistics component. It's really amazing how the `npm` package can get your back & save your time instead of trying to reinvent the wheel otherwise.

### Airbnb style guide

This by far my favorite linting style. It's easy to integrate & using it with the `ESlint` extension in VSCode, makes development much leaner & easier.

### Jest

It's simply the perfect testing companion for `React`-based applications. I used it for unit tests, but its real power is in the snapshots feature.

### CSS Grid

It perfectly fits the card deck requirements making the deck easy to manipulate & responsive across different devices.
