MERN JOBIFY

* Frontent
  - Initialize the app
    + Create react app (VITE)
      $ npm create vite@latest client -- --template react
        > Ok to proceed? (y) y
      $ cd client
      $ code .              // Open VSCode
      $ npm install
      $ npm run dev
    + Install packages
      - React Router
        $ npm i react-router-dom
      - Styled Components
        $ npm install styled-components
      - React Icons
        $ npm install react-icons --save

* Backend
  - Initialize the app
    + Create package.json
      $ npm init
        > package name: (jobify) ENTER
        > version: (1.0.0) ENTER
        > description: ENTER
        > entry point: (index.js) server.js ENTER
        > test command: ENTER
        > git repository: ENTER
        > keywords: ENTER
        > author: ENTER
        > license: (ISC) ENTER
        Is this OK? (yes) ENTER
      $ npm init -y
    + Install dependencies
      * Express
        $ npm install express --save
      * Nodemon
        $ npm install --save-dev nodemon
      * Morgan (HTTP request logger middleware)
        $ npm i morgan
      * DotEnv
        $ npm i dotenv
      * Nano ID
        $ npm i nanoid
      * Mongoose
        $ npm install mongoose --save
      * ExpressJS Async Errors
        $ npm i express-async-errors
      * Http Status Codes
        $ npm i http-status-codes
    + Run app
      $ npm run setup-project   // Install all dependencies (Client and Server)
      $ npm run dev             // Run app (nodemon app.js)
      $ npm run watch           // Run app (node --watch app.js)
      $ node server.js          // Run a file (optional)
  - MongoDB Atlas
    * Sign up/Sign in
    * Create a cluster [DATABASE | Clusters -> Click 'Build a Cluster']
      > Deploy your cluster
        > M0 Free
        > Name: Ax2CDev
        > Provider: AWS
        Click 'Create Deployment'
      Click 'Close'
    * Add new DB user [SECURITY | Database Access -> Click 'Add New Database User']
    * COPY [DATABASE | Clusters -> Click 'Connect' -> 'Drivers' -> Copy Connection String]
