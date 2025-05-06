FairWatch - A simple site to provide courses or other paid video resources with a limited amount of device which user can access.

## How to start

Run npm run dev to start the development server.
Run npm run build to build the project for production.
Run npm run start to start the production server.

The same for frontend. https://github.com/Perezhilabort/project

## Features

- User authentication
- Course creation
- Course enrollment
- Add video resources
- Vimeo integration

## How we ensure fairness of our system?

- We use a unique device ID to limit the number of devices that can access a course.
To reach it we use a fingerprint library to generate a unique ID for each device.

## Technology stack used

- React.js
- Node.js
- Express.js
- PostgresSQL
- Fingerprint js