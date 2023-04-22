# CC_project
Deployment of Web App Using AWS Cloud

This problem statement has the following objectives:

--- Create web applications and seamlessly integrate them with cloud services for optimal performance and scalability.

--- Acquire expertise in deploying databases to the cloud and harness the benefits of cloud-based data management for enhanced reliability, accessibility, and cost-efficiency.

#Description

This is a Hotel Rooms management System which takes in room number, name, phone number and email address of the customer and stores it to a database. 

CRUD operations can be performed on this database using the web app. 

The frontend for the web app is made using React Js and deployed on an EC2 instance. 

The backend is implemented using Express Js and MySQL.

The MySQL server is running on aws RDS and we access it in the React app using an API call.

#Installations
1) Python version 2.6 and above
2) node.js and npm

#Usage

Step-01: Ensure that the 'Amazon RDS' has it's databse running and also check your EC2 instance is up and running.

Step-02: Go to the client directory in command line and run "npm start"

Step-03: Go to server directory and run "nodemon index.js"

Step-04: Paste this in any browser for the system to run "https://3.27.155.242:3000"

A window will pop-up in your browser which will show about the 'Hotel Rooms management'.

You can add,edit or delete entries.
