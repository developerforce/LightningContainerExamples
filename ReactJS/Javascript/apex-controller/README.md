This is an example of an LCC that uses an apex controller to get account information.

This example was bootstrapped using Facebook's create-react-app tool.

To build, deploy and run this example:

1. Change directories to this directory
2. Run "npm install" to install all dependencies
3. Run "npm run build" to create a set of files in the "build" directory
4. Change directories to the "build" directory
5. Run "zip -r ApexController.zip *" to create an archive of the build
6. Log in to your Salesforce org
7. Use the Salesforce Static Resource setup UI to upload the "ApexController.zip" file to create a static resource named "ApexController"
8. Use the Salesforce Apex Class setup UI to create a new Apex class named "ApexController". Copy the contents of the file "metadata/classes/ApexController.cls" into the new Apex class in the setup UI.
9. Use the Salesforce Developer Console to create a new custom Lightning component named "ApexController". Copy the contents of the files in the "metadata/aura/ApexController" directory to the corresponding files in the Developer Console.
10. Use the Salesforce Lightning App Builder to create a new flexipage named "ApexController". Add the custom Lightning component "ApexController" to the new flexipage. Save and activate the flexipage.
11. Use the Salesforce App Launcher to view the menu of available apps and flexipages. Select the "ApexController" flexipage.