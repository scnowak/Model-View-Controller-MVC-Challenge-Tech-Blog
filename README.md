# Model-View-Controller-MVC-Challenge-Tech-Blog
Building a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.

## Table of Contents
* [Description](#description)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Installation and Usage](#installation-and-usage)
* [Project Demo](#project-demo)
* [In Conclusion](#in-conclusion)
* [Resources](#resources)
* [Contact](#contact)


## Description
This application is a backend application servicing front end routes and using MySQL database with Node.Js, Express, Sequelize and dotenv.



## User Story
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```


## Installation and Usage

Your application’s folder structure must follow the Model-View-Controller paradigm. You’ll need to use the [express-handlebars_package](https://www.npmjs.com/package/express-handlebars) to use Handlebars.js for your Views, use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for your Models, and create an Express.js API for your Controllers.

You’ll also need the [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables, the [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, and the [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.



## Project Demo
[Project Video Demo](        )

## In Conclusion

???????????????????????????????????????????????

I learned how to build a command-line application from scratch to manage an employee database using MySQL, Node.js, and Inquirer.
I learned how to creating a (CMS).
I created a walkthrough video to demonstrate my program and how to operate each of the routes in Insomnia.
??????????????????????????????????????????????


## Resources
* Uses the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).

* Uses the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to a MySQL database.

* My exceptional tutor, Bobbi Tarkany, was a great help to me and she explains things so well. 




## Contact
GITHUB: https://github.com/scnowak    
<BR>
EMAIL:  SHAN.NOWAK93@GMAIL.COM 