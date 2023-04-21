How this was created.

npm init

dependancies: npm i express cors body-parser monmgodb (if not using mongo we will add other dependancy later)

dev dependency: npm i -D nodemon

altered scripts in package.json, made scripts for:
start: node server/index.js
dev: nodemon server/index.js

Added server folder w/ index.js file

Can run npm run dev in for nodemon to host local server on port 8000

To host client and look at frontend: npm run dev in the terminal while in the client folder. This will host to port 8080

