IBGE Data Query Application
This is a project that demonstrates how to develop a interative web application using Angular to query and display information related to the Regions, Federative Units (UFs) and cities from of Brazil.

Overview
The frontend of this project is built with Angular and consumes a RESTful API , which contains information about Brazilian Regions, UFs and cities.

Features
Viewing the total amount of regions of Brazil and which ones they are.
Viewing the Federative Units of Brazil by region and wich ones they are.
Querying cities of a selected UF.
Simple and intuitive user interface.

Environment Setup
Prerequisites
Make sure you have the following tools installed on your system:

Node.js and npm: Node.js Installation
Angular CLI: Run npm install -g @angular/cli to install it globally.

Configuring the Frontend (Angular)
Open the Angular project in your IDE.
In the Angular project directory, run ng serve to start the development server. The application will be available at http://localhost:4200.

Usage
Upon accessing the application, you will see the Brazilian regions (North, Northeast, Southeast, South, Central-West).
Click on a region to display the Federative Units (UFs) of that region.
Click on a UF to display the list of cities in that UF.
You can expand and collapse the lists of UFs and cities by clicking on the titles.