# burger
Overview

In this assignment, you'll create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.


Important

Be sure to utilize the MYSQL Heroku Deployment Guide in order to deploy your assignment.


Before You Begin


Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.
Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.
Your app will store every burger in a database, whether devoured or not.
Check out this video of the app for a run-through of how it works.



Submission on BCS


Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!



Instructions


App Setup


Create a GitHub repo called burger and clone it to your computer.
Make a package.json file by running npm init from the command line.
Install the Express npm package: npm install express.
Create a server.js file.
Install the Handlebars npm package: npm install express-handlebars.
Install the body-parser npm package: npm install body-parser.
Install MySQL npm package: npm install mysql.

Require the following npm packages inside of the server.js file:


express
body-parser
