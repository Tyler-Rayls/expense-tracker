# Expense Tracker
>Created with [Shane Yen](https://github.com/ShaneYen)
A simple web application that allows users to track their credit card expenses and rewards. 

## About the Project
This project was our portfolio assignment for our Intro to Databases course. We were given a simple task to create a database backed website that solves a problem. Financial trackers interested both of us, so we elected to create an expense and reward tracker for our credit cards. 

The project requirements were simple, but we elected to create a more complete package that challenged us. We decided to branch out of our coursework to learn React to further our knowledge of fullstack web development. Learning React was fun and now we have a better understanding of developing component based web applications.

## Built With
* [React](https://reactjs.org)
* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com)
* [MySQL](https://www.mysql.com)
* [Bootstrap](https://getbootstrap.com)

## Installation 
1. Clone the repository
2. Navigate to the backend directory
```
cd backend
```
3. Install the NPM packages
```
npm install
```
4. Navigate to the frontend directory
```
cd ../frontend
```
5. Install the NPM packages
```
npm install
```

## Launching the Website
1. Navigate to the frontend directory
```
cd frontend
```
2. Launch the React app
```
npm start
```
3. Navigate to the backend directory
```
cd ../backend
```
4. Launch the Node server
```
node app.js
```


Grader can view GET/POST queries that are made to database in app.js

Code for pages are in the frontend/src folder.
Each page has its own folder: CreditCards, Expenses, Families, Login, ManageAccount, and Register. 
For each page, Main.js is the 'skeleton' and components of the page (such as tables and forms) are in their own .js files in the same folder.
