/*
npm install tells the Node Package Manager (npm) to install the dependencies specified in your project’s package.json file.

How It Works
Reads package.json:

It looks for a file named package.json in the root of your project directory.
Reads the dependencies and devDependencies sections of the file to determine which packages to install.
Installs Dependencies:

Downloads the listed packages from the npm registry.
Saves them to the node_modules folder in your project directory.
Generates/Updates package-lock.json:

Creates or updates a package-lock.json file, which locks the exact version of each dependency for reproducibility.
Common Usage Scenarios
First-time setup for a project:

Run npm install to download all the dependencies listed in package.json after cloning a repository or starting work on a project.
Installing a single package:

Example: npm install lodash installs the lodash package and adds it to the dependencies in package.json.
Installing as a development dependency:

Example: npm install eslint --save-dev installs eslint as a development tool.
Variations
npm install -g <package>:

Installs the package globally, making it available system-wide.
npm install --save:

Adds the installed package to the dependencies in package.json.
npm install --save-dev:

Adds the installed package to the devDependencies in package.json.
Benefits
Quickly sets up your project with all required libraries.
Manages versioning of dependencies, ensuring stability and consistency across environments.
Simplifies dependency management for larger projects.
In short, npm install is a critical step to set up and manage Node.js projects efficiently.


NOTE => 1. the informaation of generating the node modules comes under the package.json
       2. meaning of npm install (shortform "i" for install) meaning that the node js will search inside the package.json and 
       download  the node modules form the dependencies

*/
// required package 
var pdf = require("pdf-node");
var fs = require("fs");

// read html template
var html = fs.readFileSync("template.html","utf8");

var options = {
       format: "A3",
       orientation: "portrait",
       border: "10mm",
       header: {
           height: "45mm",
           contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
       },
       footer: {
           height: "28mm",
           contents: {
               first: 'Cover page',
               2: 'Second page', // Any page number is working. 1-based index
               default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
               last: 'Last Page'
           }
       }
   };
   var users = [
       {
         name: "tom",
         age: "21",
       },
       {
         name: "dick",
         age: "23",
       },
       {
         name: "harry",
         age: "29",
       },
     ];
     var document = {
       html: html,
       data: {
         users: users,
       },
       path: "./output.pdf",
       type: "pdf",
     };

     pdf(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

  /*
  How the Code Works
1.The template.html file is read into a string (html).
2.The options object specifies the layout, headers, and footers for the PDF.
3.User data (users) is passed into the document object, where it is dynamically injected into the HTML template.
4.The pdf function processes the document and options:
5.Combines the HTML, dynamic data, and options to generate the PDF.
6.Saves the PDF to the specified path (./output.pdf).
7.If successful, a success message or result (res) is logged.
8.If there’s an error, it is logged in the catch block.
Use Case
This code is ideal for dynamically generating PDFs with content such as:

Reports.
Invoices.
User-specific documents (e.g., resumes, certificates).
Output
A PDF file (output.pdf) is created in the project directory.
The file will include:
Content based on the template.html file.
Dynamic user data (users).
Custom headers and footers as defined in options
  
  */