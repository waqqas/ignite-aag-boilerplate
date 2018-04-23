# Waqqas Jabbar AAG Boilerplate

## The latest and greatest boilerplate

This is the boilerplate that [Waqqas Jabbar](https://waqqasjabbar.com) uses as a way to make his next best app based on React Native stack.

Currently includes:

* React Native 0.55.2 (but you can change this if you want to experiment)
* React Navigation
* Redux
* Redux Sagas
* And more!

## Quick Start

When you've installed the [Ignite CLI](https://github.com/infinitered/ignite), you can get started with this boilerplate like this:

```
ignite new MyLatestCreation
```

You can also change the React Native version, just keep in mind, we may not have tested this just yet.

```sh
ignite new MyLatestCreation --react-native-version 0.46.0-rc.2
```

By default we'll ask you some questions during install as to which features you'd like.  If you just want them all, you can skip the questions:

```sh
ignite new MyLatestCreation --max
```

If you want very few of these extras:

```sh
ignite new MyLatestCreation --min
```

## Boilerplate walkthrough

Your `App` folder is where most of the goodies are found in an Ignite Next app. Let's walk through them in more detail. Start with `Containers/App.js` (described below) and work your way down the walkthrough in order.

### Containers

Containers are (mostly) full screens, although they can be sections of screens or application containers.

* `App.js` - your main application. We create a Redux store and configure it here
* `RootContainer.js` - main view of your application. Contains your status bar and navigation component
* `LaunchScreen.js` - this is the first screen shown in your application. It's loaded into the Navigation component
* `LoginScreen.js` - an example login screen. Read the comments in there to learn more!
* `Styles` - styling for each of the above containers and screens

To generate a new Container or Screen you can use the following generator commands:

* `ignite g container New` - Will create a `New.js` and also a `Styles/NewStyle.js`.
* `ignite g list New` - The same as the `container` command, but it will give you a walkthrough to generate a ListView screen. Allowing you to even pick `FlatList` or not, grid, and some other options. 
* `ignite g screen New` - Will create a `NewScreen.js` and also a `Styles/NewScreenStyle.js`. Important to mention that the `screen` generator will add the `Screen` on the file/class name to make easier to identify.

Those commands will also add the new container to the navigations file.

### Navigation

Your primary and other navigation components reside here.

* `AppNavigation.js` - loads in your initial screen and creates your menu(s) in a StackNavigation
* `Styles` - styling for the navigation
* `ReduxNavigation.js` - This file contains the core navigation of your application. If you ever change your launch screen, make sure to change it also at `if (nav.routes.length === 1 && (nav.routes[0].routeName === 'LaunchScreen')) {`, otherwise you may encounter navigation problems with the Android back button!

### Components

React components go here...pretty self-explanatory. We won't go through each in detail -- open each file to read the comments and view the code.

To generate a new Component you can use the following generator commands:

* `ignite g component New` - Will create a `New.js` and also a `Styles/NewStyle.js`.
* `ignite g component path/New` - The same as above, but will use a relative path
* `ignite g component --folder path` - An alternative to `ignite g component path/index`
* `ignite g component --folder path new ` - An alternative to `ignite g component relativePath/New`

### Themes

Styling themes used throughout your app styles.

* `ApplicationStyles.js` - app-wide styles
* `Colors.js` - defined colors for your app
* `Fonts.js` - defined fonts for your app
* `Images.js` - loads and caches images used in your app
* `Metrics.js` - useful measurements of things like navBarHeight

### Config

Initialize and configure things here.

* `AppConfig.js` - simple React Native configuration here
* `DebugConfig.js` - define how you want your debug environment to act
* `ReduxPersist.js` - configures Redux Persist (Note: this [will be extracted](https://github.com/infinitered/ignite/issues/780) into a plugin in the future)

### Redux, Sagas

Contains a preconfigured Redux and Redux-Sagas setup. Review each file carefully to see how Redux interacts with your application.

Here again we have generators to help you out. You just have to use one of the following:

* `ignite g redux Amazing` - Will generate and link the redux for `Amazing`.
* `ignite g saga Amazing` - The same as above, but for the Sagas

_TODO: explain more about Redux & Redux Sagas here_

### Services

Contains your API service and other important utilities for your application.

* `Api.js` - main API service, giving you an interface to communicate with your back end
* `ImmutablePersistenceTransform.js` - part of the redux-persist implementation (will be removed)
* `RehydrationServices.js` - part of the redux-persist implementation (will be removed)

### Lib

We recommend using this folder for modules that can be extracted into their own NPM packages at some point.

### Images

Contains actual images (usually png) used in your application.

## Premium Support

[Ignite CLI](https://waqqasjabbar.com) and [Aag Boilerplate](https://github.com/waqqas/ignite-aag-boilerplate), as open source projects, are free to use and always will be. Email us at [waqqas.jabbar@gmail.com](mailto:waqqas.jabbar@gmail.com) to get in touch with me for more details.
