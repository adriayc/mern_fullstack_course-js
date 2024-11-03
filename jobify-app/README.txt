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
      - Axios
        $ npm install axios
      - React Toastify
        $ npm i react-toastify
      - Day.JS
        $ npm i dayjs

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
      * Express Validator
        $ npm i express-validator
      * Bcrypt.js
        $ npm i bcryptjs
      * JSON Web Token
        $ npm i jsonwebtoken
      * Cookie Parser
        $ npm i cookie-parser
      * Concurrently
        $ npm i concurrently
      * Multer (Uploading files)
        $ npm i multer
      * Cloudinary
        $ npm i cloudinary
    + Run app
      $ npm run setup-project   // Install all dependencies (Client and Server)
      $ npm run dev             // Run app (nodemon app.js)
      $ npm run watch           // Run app (node --watch app.js)
      $ node server.js          // Run a file (optional)
      $ node populate           // Run a file (populate jobs)
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
  - Cloudinary
    * Sign Up/Log In
    * API Keys [Settings -> API Keys]
    * Getting Started [Programmable Media -> Getting Started]
  - Mockaroo (URL:https://www.mockaroo.com/)
    * Remove all fields
    * Click '+ Add Another Field'
      Field Name        Type              Options
      > company         Company Name
      > position        Job Title
      > jobLocation     City
      > jobStatus       Custom List       pending, declined, interview
      > jobType         Custom List       full-time, part-time, internship
      > createdAt       Datetime          01/01/2023 to 03/11/2024 format: ISO 8601 (UTC)
        > # Rows: 50    Format: JSON    [true] Array    [false] include null values
      Click 'Preview' and 'Generate Data'
