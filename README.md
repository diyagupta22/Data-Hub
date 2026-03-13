# Data Hub REST API

This project is a simple Blog REST API built using Node.js and Express.  
It demonstrates the core concepts of backend development such as server creation, REST routing, CRUD operations, middleware usage and basic authentication handling.

# Features

- Express server running on port 5000
- REST API endpoints for Blog posts
- Create, Read, Update and Delete operations
- In-memory mock database using JavaScript array
- Custom middleware for logging request method, URL and timestamp
- Basic login route that returns a mock authentication token
- API testing performed using Postman

# API Endpoints

GET /  
Returns server status message.

GET /posts  
Returns all blog posts.

GET /posts/:id  
Returns a single post based on ID.

POST /posts  
Creates a new blog post.

PUT /posts/:id  
Updates an existing blog post.

DELETE /posts/:id  
Deletes a blog post.

POST /login  
Simulates user authentication and returns a mock token.

# Technologies Used

- Node.js  
- Express.js  
- REST API  
- Postman  

# How to Run the Project

1. Clone the repository
2. Open the project folder in terminal
3. Install dependencies:

   npm install

4. Start the server:

   node server.js

5. Open browser:

   http://localhost:5000

# Project Purpose

The purpose of this project is to understand backend fundamentals such as API development, routing, request handling and middleware implementation.

## Author

Diya Gupta
