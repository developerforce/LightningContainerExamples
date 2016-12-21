# Lightning Container Components use of Lightning Design System and ReactJS 

This repository is the home of **Lightning Realty**, a reference application built with [React](http://facebook.github.io/react/) and the [Lightning Design System](http://www.lightningdesignsystem.com). 

Check out this video for a quick walkthrough:

[![Video](http://img.youtube.com/vi/UZtvQazYX8A/0.jpg)](http://www.youtube.com/watch?v=UZtvQazYX8A)

## Local Installation

Follow the instructions below if you prefer to install the application on your local machine:

1. Clone this repository or download and unzip [this](https://github.com/ccoenraets/lightning-react-app/archive/master.zip) zip file.

1. Navigate to the **lightning-react-app** directory and install the project dependencies:

    ```
    npm install
    ```

1. Type the following command to build the client application:

    ```
    npm run build
    ```
    
    The project is written using ECMAScript 6 including ECMAScript 6 modules.

1. Edit the package.json file to reference your force.com server, and to use your force.com username and password

1. Type the following command to deploy the client application and all supporting metadata to your force.com server:
    
    ```
    npm run deploy
    ```    

## Work in Progress

This project is work in progress. For example, here are some items that still need work:

- Provide data to populate objects
- Make components more robust and general purpose
- Fix React keys throughout the project to eliminate warnings


