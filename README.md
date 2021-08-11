CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Requirements
 * Installation
 * Configuration
 * Maintainers


INTRODUCTION
------------

This is my submission for the Fetch Back End developer test. It uses NodeJS and
a PostgreSQL database with a number of npm packages for support.
The web service is easy to get up and running. You may use curl or
Postman to make HTTP calls in addition to being able to view
some of the data using the navigation links on the side.


REQUIREMENTS
------------

This web service uses the following npm modules:
 * express
 * pg
 * nodemon
 * async
 * cookie-parser
 * morgan
 * http-errors
 * debug
 * pug


INSTALLATION
------------

Download this repository onto your machine. Open the project folder
in terminal, VS Code, or editor of your choosing. Run the below commands
to install all necessary modules/packages.

Commands:
 * npm install
 * npm i express pg
 * npm i nodemon async
 * npm i cookie-parser morgan
 * npm i http-errors debug
 * npm i pug

Once all of the modules/packages have been downloaded, start the
web service with 'node index.js', and the service will
begin running at http://localhost:3000


CONFIGURATION
-------------

    1. Navigate to Administration > Extend and enable the module. The system
       breadcrumb block has now been updated.
    2. Navigate to Administration > Configuration > User Interface > Easy
       Breadcrumb for configurations. Save Configurations.

Configurable parameters:
 * Include / Exclude the front page as a segment in the breadcrumb.
 * Include / Exclude the current page as the last segment in the breadcrumb.
 * Use the real page title when it is available instead of always deducing it
   from the URL.
 * Print the page's title segment as a link.
 * Make the language path prefix a segment on multilingual sites where a path
   prefix ("/en") is used.
 * Use menu title as fallback instead of raw path component.
 * Remove segments of the breadcrumb that are identical.
 * Use a custom separator between the breadcrumb's segments. (TODO)
 * Choose a transformation mode for the segments' title.
 * Make the 'capitalizator' ignore some words.


Contributors
-----------

 * Riley Nadwodny
