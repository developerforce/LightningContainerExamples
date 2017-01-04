# Lightning Container Components use of Lightning Design System and ReactJS 

This repository is the home of **Lightning Realty**, a reference application built with [React](http://facebook.github.io/react/) and the [Lightning Design System](http://www.lightningdesignsystem.com).

This application is a force.com adaptation of the **Lightning Realty** example application written by Christophe Coenraets and that is available at https://github.com/ccoenraets/lightning-react-app 

This application is written using ECMAScript 6 including ECMAScript 6 modules.

Check out this video for a quick walkthrough:

[![Video](http://img.youtube.com/vi/UZtvQazYX8A/0.jpg)](http://www.youtube.com/watch?v=UZtvQazYX8A)

## Local Installation

Follow the instructions below if you prefer to install the application on your local machine:

1. Enable Lightning Experience in your org

1. Enable a My-Domain for your org

1. Clone this repository

1. Navigate to the **lightning-react-app** directory and install the project dependencies:

    ```
    npm install
    ```

1. Type the following command to build the client application:

    ```
    npm run build
    ```

1. Edit the package.json file to reference your force.com server, and to use your force.com username and password

1. Type the following command to deploy the client application and all supporting metadata to your force.com server:
    
    ```
    npm run deploy
    ```    

1. Use your org's setup UI to assign either the AdminPermissions or SalesPermissions permission set to your org username

1. Use your org's setup UI to activate the Realty flexipage and make it available in your org's navigation menus.

1. Type the following command to upload some sample data to your force.com server:
    
    ```
    npm run load
    ```    

## Work in Progress

This project is work in progress. For example, here are some items that still need work:

- Make components more robust and general purpose


