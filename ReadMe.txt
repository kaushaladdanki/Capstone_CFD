# CFD sample generator Capstone project

## Project Submission Notes:

The main branch has the final version of the project that is being submitted. The other branches were not removed so grader can see brances and commits members worked on. All usefull code from these branches has been incorperated into the final submission.

At the expo there was an issue with browser compatability. This issue has been resolved; however, now the project will not list the proper max an min for each feature type.
This does not stop the application from being usable, but now the user will not be given accurate information on what the max and min range of the feature is. So a user could add a filter that does not affect the database or potentially remove all faces in the database. 
This information will be relayed to the user and it will be up to them to remove the filter that did it.

User class data values defined in the filter modal will be divided by 100 (as values are 0-1) so the user must provide a value between 0-100.

The project should be able to accomodate adding new faces to the repository.

The project will need to be updated to handle new features or feature categories.

As faces are added to the database, the time it takes to run k-means will increase. To reduce the time, the tolerance can be increased, or the maximum number of times k-means loops can be reduced.

Stratified sampling compares feature measurments of a given feature type. 
Example: feat type attributes will compare Attractiveness, Aggression, Dominance... etc

Attempting to add a filter or generate a sample before the database has been loaded will automatically call readCSV first to load the database.


## To Host on AWS Lightsail:

- Create an aws account: https://aws.amazon.com/
- Once on the console, click on 'view all services' and select 'Lightsail' under the Compute category
- Once on the Lightsail Console, click 'Create Instance', and under 'Apps + OS' select Node.js
- Click on the Instance, then under 'Networking', Create a Static-Ip with whatever name you want; this will be the ip you use to view the website once it is up: 'http://STATIC-IP:8080'
- Also under Networking, under 'IPv4 Firewall', click 'Add Rule' and under Port or Range enter 8080, then click create (This ensures that aws will allow traffic on port 8080)

REMAINING STEPS OCCUR INSIDE NODE INSTANCE TERMINAL:
- Under 'Connect', click 'Connect using SSH', this will bring up a terminal screen
- enter 'ls' to ensure htdocs is in the current directory, then enter 'cd htdocs'
- inside 'htdocs' enter 'rm -rf *' to remove any files in the folder
- Enter 'git clone https://github.com/TheHansHofmann/Capstone_CFD.git', or whichever https link is attached to the github repo
- PORT STUFF IMPORTANT:
  - enter 'vi /opt/bitnami/apache/conf/vhosts/myapp-http-vhost.conf', once in the text editor, press 'i' in order to start editing
  - Paste this into the editor by right clicking the terminal (ctrl+v doesnt work):
  
  <VirtualHost _default_:80>
    ServerAlias *
    DocumentRoot "/home/bitnami/htdocs/Capstone_CFD/server"
    <Directory "/home/bitnami/htdocs/Capstone_CFD/server">
      Require all granted
    </Directory>
    ProxyPass / http://localhost:8080/
    ProxyPassReverse / http://localhost:8080/
  </VirtualHost>
  
  - be mindful of indentations
  - Press :x! to save and quit from editing the file
  
  repeat this process for the https file 'vi /opt/bitnami/apache/conf/vhosts/myapp-https-vhost.conf'
  
  <VirtualHost _default_:443>
    ServerAlias *
    SSLEngine on
    SSLCertificateFile "/opt/bitnami/apache/conf/bitnami/certs/server.crt"
    SSLCertificateKeyFile "/opt/bitnami/apache/conf/bitnami/certs/server.key"
    DocumentRoot "/home/bitnami/htdocs/Capstone_CFD/server"
    <Directory "/home/bitnami/htdocs/Capstone_CFD/server">
      Require all granted
    </Directory>
    ProxyPass / http://localhost:8080/
    ProxyPassReverse / http://localhost:8080/
  </VirtualHost>
  
  - Remember to type :x! to save and quit the text editor
  - Finally, enter 'sudo /opt/bitnami/ctlscript.sh restart apache' to implement the changes made in the files
  
- Now, go to the directory /home/bitnami/htdocs/Capstone_CFD/server and enter 'forever start server.js'
  - This should keep the website running one you have exited the terminal
  - To stop it, simply go into this directory and enter 'forever stop server.js'
  
- Aside from that, AWS should be setup except for the Domain Name, which can be setup in the Domains tab in the Lightsail Console
  - I didn't do this particular step as it costs money


## Project scripts
See Z_client/README for more scripts than those listed below:

start: node server/index.js
dev: nodemon server/index.js

Added server folder w/ index.js file
- to tun via the server folder: node server.js
- runs on port 8080

To selfhost client and look at frontend: npm run serve (enter this in the terminal while in the Z_client folder.)
This will host to port 8080

