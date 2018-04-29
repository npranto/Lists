<h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="./src/assets/favicons/android-icon-192x192.png" alt="Lists" width="192"></a>
  <br>
  Lists
  <br>
</h1>

<h4 align="center">Quickly draught down your todos, groceries, chores or any other lists of items quickly <a href="https://github.com/npranto/lists" target="_blank">#powerOfLists</a>.</h4>

## Table of Contents

* [Table of Contents](#table-of-contents)
* [Key Features](#key-features)
* [Getting Started](#getting-started)
* [How To Use and Contribute](#how-to-use-and-contribute)
* [Credits](#credits)
* [Support](#support)
* [You May Also Like](#you-may-also-like)
* [License](#license)
* [Authors](#authors)

<div align="center">
	<img src="https://media.giphy.com/media/3o6MbhbYBsqTrbP2qQ/giphy.gif" alt="Screenshot" />
</div>

## Key Features

* Quickly get to your local lists without having to sign up/in to any third party accounts
* Manage your list of todos, groceries, chores, homeworks, or any other daily tasks in the most simplest way
* Track different lists and their todos as plain old checklists
* Provides very simple and fast user interface for navigating lists all around
* Use your lists on your local computer only as Lists uses your computer's local storage 
* Compatible with most, if not all screen sizes and resolutions as long as they are connected to the internet

## Getting Started

* Start using [**Lists**](https://github.com/npranto/lists)

## How To Use and Contribute

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/npranto/lists.git

# Go into the repository
$ cd lists

# Install dependencies
$ npm install

# Run the app on development
$ npm run dev
```

Note: Although Lists was built with plain JavaScript, the structure of the source code can feel fairly uncommon. Still, take a look, explore and contribute if you wish. Just for a little simplicy sake, refer to the [source tree](#source-tree) as needed. 

## Source Tree

```bash	
├── LICENSE																# Documentation (table of contents, key features, source tree)
├── README.md																								
├── package-lock.json
├── package.json
├── public																# Static (index.html)
|  └── index.html
├── src																		# Source directory (contains root starter file, assets, feature components, events, state and helper utilities)
|  ├── assets															# Assets directory (contains favicons, images and other media contents)
|  |  └── favicons
|  |     ├── android-icon-144x144.png
|  |     ├── android-icon-192x192.png
|  |     ├── android-icon-36x36.png
|  |     ├── android-icon-48x48.png
|  |     ├── android-icon-72x72.png
|  |     ├── android-icon-96x96.png
|  |     ├── apple-icon-114x114.png
|  |     ├── apple-icon-120x120.png
|  |     ├── apple-icon-144x144.png
|  |     ├── apple-icon-152x152.png
|  |     ├── apple-icon-180x180.png
|  |     ├── apple-icon-57x57.png
|  |     ├── apple-icon-60x60.png
|  |     ├── apple-icon-72x72.png
|  |     ├── apple-icon-76x76.png
|  |     ├── apple-icon-precomposed.png
|  |     ├── apple-icon.png
|  |     ├── browserconfig.xml
|  |     ├── favicon-16x16.png
|  |     ├── favicon-32x32.png
|  |     ├── favicon-96x96.png
|  |     ├── favicon.ico
|  |     ├── manifest.json
|  |     ├── ms-icon-144x144.png
|  |     ├── ms-icon-150x150.png
|  |     ├── ms-icon-310x310.png
|  |     └── ms-icon-70x70.png
|  ├── classes														# Classes directory (contains blueprints for different objects)
|  |  ├── ListCategory.js
|  |  ├── ListItem.js
|  |  └── index.js
|  ├── components													# Components directory (Feature and user interface components, similar to React components, of course functions differently)
|  |  ├── AddListCategory
|  |  |  ├── AddListCategory.css
|  |  |  └── AddListCategory.js
|  |  ├── AddListItem
|  |  |  ├── AddListItem.css
|  |  |  └── AddListItem.js
|  |  ├── App.css	
|  |  ├── App.js
|  |  ├── ContextMenu
|  |  |  ├── ContextMenu.css
|  |  |  └── ContextMenu.js
|  |  ├── Header
|  |  |  ├── Header.css
|  |  |  └── Header.js
|  |  ├── List
|  |  |  ├── List.css
|  |  |  └── List.js
|  |  ├── ListCategories
|  |  |  ├── ListCategories.css
|  |  |  └── ListCategories.js
|  |  ├── ListCategory
|  |  |  ├── ListCategory.css
|  |  |  └── ListCategory.js
|  |  ├── ListItem
|  |  |  ├── ListItem.css
|  |  |  └── ListItem.js
|  |  ├── ListItems
|  |  |  ├── ListItems.css
|  |  |  └── ListItems.js
|  |  └── MaterialCheckbox
|  |     ├── MaterialCheckbox.css
|  |     └── MaterialCheckbox.js
|  ├── events															# Events directory (contains different functions to call on user interactions and events)
|  |  ├── addNewCategory.js
|  |  ├── addNewItemToCurrentCategory.js
|  |  ├── deleteCategory.js
|  |  ├── deleteItemFromCurrentCategory.js
|  |  ├── enableCustomContextMenuOnCategory.js					
|  |  ├── handleNewItemInputOnChange.js
|  |  ├── index.js
|  |  ├── renameCategory.js
|  |  ├── toggleDeleteIconOnItemHover.js
|  |  ├── toggleItemComplete.js
|  |  └── updateActiveCategoryIdOnClick.js
|  ├── index.css													# Root styles
|  ├── index.js														# Root starter script that bootstraps and renders content to DOM
|  ├── state															# State directory (setup for localStorage and default starter state)
|  |  └── index.js
|  └── utils															# Provides utility functions that are used across the entire source code
|     ├── askForConfirmation.js
|     ├── getUniqueId.js
|     ├── index.js
|     ├── logger.js
|     ├── mapRender.js
|     └── render.js
├── webpack.common.js											# Shared Webpack bundler setup
├── webpack.dev.js												# Development Webpack bundler setup
└── webpack.prod.js												# Production Webpack bundler setup
```

## Credits

Source code makes use of several open source packages, a few keys ones include...

- [Babel](https://babeljs.io/) - To transpile ES6+ syntax to ES5, in order to run source code inside browser
- [Webpack](https://webpack.js.org/) - For module bundling and generating distributing assets
- [Webpack](https://webpack.js.org/) - For module bundling and generating distributing assets
- [ESLint](https://eslint.org/) - To lint source code for better readability, syntax consistency and proper formatting
- [SweetAlert](https://sweetalert.js.org/) - For smooth, playful interactive alerts 
- [uniqid](https://www.npmjs.com/package/uniqid) - To generate unique ids for list categories and items

## Support

<a href="https://www.buymeacoffee.com/nsplovescoffee" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## You May Also Like...

- [focus](https://github.com/npranto/focus) - A simple, elegant task manager application to help students and computer savvy workers get their work done efficiently and on time
- [weatherion](https://github.com/npranto/weatherion) - A simple clone of the Apple Weather application - quickly check weather for current location and by city

## License

[MIT](https://tldrlegal.com/license/mit-license)

## Authors

* **Nazmuz Shakib Pranto** [[GitHub](https://github.com/npranto) | [LinkedIn](https://www.linkedin.com/in/npranto/)]
