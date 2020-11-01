# E-commerce MEAN App

The E-commerce MEAN App combines the power of MongoDB, ExpressJS, Angular, and Node.js with the design and user interaction principles of Google's Material Design spec. E-commerce functionality is made possible through integration with Snipcart.

## Installation and Setup

To get started, `git clone` the project into the desired location on your machine. Once cloned, `cd` into the directory and run `npm install` to install the required production and development dependencies. Running `npm install` will also trigger a postinstall `ng build --prod --output-path dist` script which will build the Angular front-end and put it into a new "dist" directory within your project. Once these scripts complete, run `npm start` to run the development server. Once the development server has started and is connected to the MongoDB database, open your preferred browser and navigate to "localhost:8080" to use the app.

## MongoDB Configuration

MongoDB connection string is stored in process.env.MONGODB_URI.

## Angular Configuration

In development, all Angular components, modules, and services are located in the "src" directory. All Material Design components used in this app are collected into a "Material" module located at "src/app/material.module.ts". The app has three main components: Home, Products, and Product Detail. The Home component contains the home page, which is just static HTML serving as the landing page for the app. The Products component uses the data service to retrieve all products and programmatically display them as Material Design cards. Finally, the Product Detail component uses the data service and the URL-supplied Product ID parameter to dynamically build a page with more detail on the specific product requested.