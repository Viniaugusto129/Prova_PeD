# IBGE Data Query Application

This project demonstrates how to develop an interactive web application using Angular to query and display information related to the regions, Federative Units (UFs), and cities of Brazil.

## Overview

The frontend of this project is built with Angular and consumes a RESTful API that contains information about Brazilian regions, UFs, and cities.

## Features

- View the total number of regions in Brazil and their names.
- View the Federative Units of Brazil by region and their names.
- Query cities within a selected UF.
- Simple and intuitive user interface.

## Environment Setup

### Prerequisites

Make sure you have the following tools installed on your system:

- Node.js and npm: [Node.js Installation](https://nodejs.org/)
- Angular CLI: Run `npm install -g @angular/cli` to install it globally.

### Configuring the Frontend (Angular)

1. Open the Angular project in your IDE.
2. In the Angular project directory, run `ng serve` to start the development server. The application will be available at `http://localhost:4200`.

## Usage

1. Upon accessing the application, you will see the Brazilian regions (Norte, Nordeste, Sudeste, Sul, Centro-Oeste).
2. Click on a region to display the Federative Units (UFs) of that region.
3. Click on a UF to display the list of cities in that UF.
4. You can expand and collapse the lists of UFs and cities by clicking on the titles.
