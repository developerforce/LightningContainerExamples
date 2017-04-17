This is an example of an LCC that accepts a custom attribute from Lightning App Builder.

This example was bootstrapped using Facebook's create-react-app tool.

To build, deploy and run this example:

1. Change directories to this directory
2. Run "npm install" to install all dependencies
3. Run "npm run build" to create a set of files in the "build" directory
4. Change directories to the "build" directory
5. Run "zip -r CustomAttribute.zip *" to create an archive of the build
6. Log in to your Salesforce org
7. Use the Salesforce Static Resource setup UI to upload the "CustomAttribute.zip" file to create a static resource named "CustomAttribute"
8. Use the Salesforce Developer Console to create a new custom Lightning component named "CustomAttribute". Copy the contents of the files in the "metadata/aura/CustomAttribute" directory to the corresponding files in the Developer Console.
9. Use the Salesforce Lightning App Builder to create a new flexipage named "CustomAttribute". Add the custom Lightning component "CustomAttribute" to the new flexipage. Use the Lightning App Builder properties pane to set the value of the "Greeting" custom attribute. Save and activate the flexipage.
10. Use the Salesforce App Launcher to view the menu of available apps and flexipages. Select the "CustomAttribute" flexipage.