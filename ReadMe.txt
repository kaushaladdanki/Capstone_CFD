How this was created.

npm init

dependancies: npm i express cors body-parser monmgodb

dev dependancy: npm i -D nodemon

altered scripts in package.json, made scripts for:
start: node server/index.js
dev: nodemon server/index.js

Added server folder w/ index.js file

note: index.js need to have the port number not hardcoded, but using ${port} did not act as a variable for the prot 8080

After this can run npm run dev for nodemon to host local server on port 8080

