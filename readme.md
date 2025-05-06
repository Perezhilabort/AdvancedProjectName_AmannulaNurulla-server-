FairWatch - A simple site to provide courses or other paid video resources with a limited amount of device which user can access.

## Introduction

FairWatch is a web application that allows users to create and manage courses with video resources. The application is designed to provide a simple and efficient way for users to access and enroll in courses, while also ensuring that the content is protected from unauthorized access.

## Problem statement

The problem we are trying to solve is the unauthorized access to paid video resources. Many users share their login credentials with others, which leads to a loss of revenue for course creators. FairWatch aims to provide a solution to this problem by limiting the number of devices that can access a course.

## Objectives

- Create a web application that allows users to create and manage courses with video resources.
- Implement a system that limits the number of devices that can access a course.

## Technology stack

- Frontend: React, Redux, Tailwind CSS
- Backend: Node.js, Express, PostgresSQL
- Integrations: Vimeo
- External libraries: Fingerprint js

## Installation instructions

1.Create PostgresSQL database and add the connection string to the `.env` file
or write database name, user and password in the `.env` file

2.Clone the repository

```bash
git clone https://github.com/Perezhilabort/AdvancedProjectName_AmannulaNurulla-server-.git
```
3.Install dependencies

```bash
npm install
```
4.Fill the `.env` file with the following variables:

```bash
Required environment variables examples:
DB_HOST=localhost
DB_PORT=5432
DB_NAME=fairwatch
DB_USER=postgres
DB_PASSWORD=gazizorda101
PORT=8000
JWT_SECRET=your_jwt_secret
```
5.Run the application

```bash
npm run start
```
6. Clone the frontend repository

```bash
git clone https://github.com/Perezhilabort/project.git
```
7. Install dependencies

```bash
cd project
npm install
```
8. In axios.js file, change the baseURL to your backend URL

```javascript
const axios = require('axios');
const instance = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
});
```

9. Run the frontend application

```bash
npm start
```

## Usage guide
- To create a course, go to the "Create Course" page and fill out the form with the course details.
- You need manually enroll every user to the course.
- All details showed in screenshots.pdf file

## Testing

There is no unit tests in the project.

## Incomplete features

- There is no unit tests in the project.
- There is no email verification
- There is no password recovery
- There is no payment system

## Team members

Amannula Nurulla - 230103093@sdu.edu.kz