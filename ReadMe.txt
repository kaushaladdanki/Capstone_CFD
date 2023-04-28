How this was created.

npm init

dependancies: npm i express cors body-parser monmgodb (if not using mongo we will add other dependancy later)

dev dependancy: npm i -D nodemon

altered scripts in package.json, made scripts for:
start: node server/index.js
dev: nodemon server/index.js

Added server folder w/ index.js file
- to tun via the server folder: node server.js
- runs on port 8080

Can run npm run dev in for nodemon to host local server on port 8000

To host client and look at frontend: npm run dev in the terminal while in the client folder. This will host to port 8080

To Host on AWS Lightsail:

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
    DocumentRoot "/opt/bitnami/projects/myapp"
    <Directory "/opt/bitnami/projects/myapp">
      Require all granted
    </Directory>
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/
  </VirtualHost>
  
  - Remember to type :x! to save and quit the text editor
  - Finally, enter 'sudo /opt/bitnami/ctlscript.sh restart apache' to implement the changes made in the files
  
- Now, go to the directory /home/bitnami/htdocs/Capstone_CFD/server and enter 'forever start server.js'
  - This should keep the website running one you have exited the terminal
  - To stop it, simply go into this directory and enter 'forever stop server.js'
  
- Aside from that, AWS should be setup except for the Domain Name, which can be setup in the Domains tab in the Lightsail Console
  - I didn't do this particular step as it costs money
