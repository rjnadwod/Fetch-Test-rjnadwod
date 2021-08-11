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

After hours of trying to make mongoose and mongoDB work, I found the most
success using pg and PostgreSQL. This is a stripped down web sevice
that does not utilize routes, controllers, or models in order to
reduce complexity and time spent reviewing the code.


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

Install nodeJS and npm if they are not already installed
on your machine. You can find an installer at https://nodejs.org/en/download/

Download this repository onto your machine. Open the project folder
in terminal, VS Code, or editor of your choosing. 

Once all of the repository and all of the modules/packages
have been downloaded, start the web service 
with 'node index.js', and the service will
begin running at http://localhost:3000

Instructions
-----------

All instructions shown here and also listed at http://localhost:3000/

To begin, first add the transactions to the pgSQL database using the curls provided below.
To add a transaction, curl the data into the database. You can also use Postman with a POST request. Curls provided below
 * curl --data "timestamp=2020-11-02T14:00:00Z&points=1000&payer=DANNON" http://localhost:3000/add_transaction
 * curl --data "timestamp=2020-10-31T11:00:00Z&points=200&payer=UNILEVER" http://localhost:3000/add_transaction
 * curl --data "timestamp=2020-10-31T15:00:00Z&points=-200&payer=DANNON" http://localhost:3000/add_transaction
 * curl --data "timestamp=2020-11-01T14:00:00Z&points=10000&payer=MILLER COORS" http://localhost:3000/add_transaction
 * curl --data "timestamp=2020-10-31T10:00:00Z&points=300&payer=DANNON" http://localhost:3000/add_transaction

To get all payer balances, navigate to localhost:3000/transactions/payers, use the curl provided below, or click the link to the left
 * curl localhost:3000/transactions/payers'

To spend points, curl the service. Example curl is provided below, taken from the test guide.
 * curl -X PUT -d "pointsToSpend=5000" http://localhost:3000/spendpoints

Contributors
-----------

 * Riley Nadwodny
