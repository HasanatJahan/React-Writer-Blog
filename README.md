# Simple React Blog App

This is a simple blog application built with React that demonstrates basic CRUD (Create, Read, Update, Delete) functionality using a local JSON server. The app allows users to view, create, and delete blog posts, and it features client-side routing using `react-router-dom`.

## Features

- View a list of blog posts
- Create new blog posts
- View detailed information for a single blog post
- Delete blog posts
- Custom 404 page for invalid routes

## Technologies Used

- **Frontend**: React, React Router
- **Backend**: JSON Server (for mock data)
- **Languages**: JavaScript, HTML, CSS

## Project Structure

```bash
├── data
│   └── db.json                 # Mock database for blog posts (JSON Server)
├── node_modules                # Node.js dependencies
├── public                      # Public assets
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src                         # Source code for the application
│   ├── App.js                  # Main App component with routing
│   ├── App.test.js             # Unit tests for the App
│   ├── BlogDetails.js          # Component for displaying individual blog details
│   ├── BlogList.js             # Component for displaying a list of blogs
│   ├── Create.js               # Component for creating a new blog post
│   ├── Home.js                 # Home component showing all blogs
│   ├── Navbar.js               # Navigation bar component
│   ├── NotFound.js             # 404 Not Found component
│   ├── useFetch.js             # Custom hook for fetching data
│   ├── index.css               # CSS for styling
│   ├── index.js                # Entry point for the React app
│   ├── logo.svg                # Logo asset
│   └── setupTests.js           # Test setup configuration
├── .gitignore                  # Git ignore file
├── package.json                # Project configuration and dependencies
├── package-lock.json           # Lock file for dependencies
└── README.md                   # Project documentation (this file)
``` 
## Getting Started 

Follow these instructions to run the project locally:
1. Clone the Repository
 ```
    bash

    git clone https://github.com/your-username/react-blog-app.git
    cd react-blog-app
```
2. Install Dependencies

Run the following command in the project directory to install all the necessary packages:
```
    bash

    npm install
```

3. Run the JSON Server

If you don't have JSON Server installed globally, run:

```
    bash

    npm install -g json-server
```
Start the JSON server with the provided db.json file:

```
    bash

    json-server --watch data/db.json --port 3000
```

4. Start the React App

In a separate terminal, start the React development server:

bash

npm start

The React app will run on http://localhost:3001 and will communicate with the JSON Server on http://localhost:3000.

5. Access the App

    Home Page: Lists all the available blog posts (/)
   
    Create Page: Form to create a new blog post (/create)
   
    Blog Details Page: View the details of a selected blog (/blogs/:id)
   
    404 Page: Displays a custom 404 error message for any invalid routes.

Example JSON Data

Here’s a sample of the blog data stored in data/db.json:
```
{
  "blogs": [
    {
      "title": "The Princess Diaries",
      "body": "Woman gets turnt",
      "author": "Mia",
      "id": "1"
    },
    {
      "title": "Sex and the City",
      "body": "Mr.Big",
      "author": "Carrie Bradshaw",
      "id": "2"
    },
    {
      "title": "Lord of the Rings",
      "body": "Hobbit gets out of Rangpur",
      "author": "My boy Tolkien",
      "id": "3"
    },
    {
      "title": "Cooking",
      "body": "Let me tell you about my mother for 50 pages then get to the recipe",
      "author": "Becky",
      "id": "4"
    }
  ]
}
```
