# wisp.bio - Link-in-bio clone app using Next js 13 new features, Typescript and Prisma.
The purpose of this app is to explore and gain hands-on experience with the latest concepts and features of Next.js 13. In this case with this tool, simply the management of your social media links by allowing users to create a profile page with a profile image, username, and a collection of links to various social media platforms and websites. It offers a seamless and straightforward way to centralize all your online presence in one place.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [Running the App Locally](#running-the-app-locally)
  - [Development](#development)
  - [Production](#production)
- [Running the App with Docker](#running-the-app-with-docker)
  - [Development Mode](#development-1)
  - [Production Mode](#production-1)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

To run the app locally, you'll need the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Setup

1. Clone the repository:

```bash
git clone https://github.com/alberpeb/wisp.bio
cd wisp.bio
```

2. install dependencies:

```bash
npm install
```

## Running the App Locally

### Development
To run the app in development mode locally, use the following commands:

```bash
npm run dev
```
The app will start at http://localhost:3000. You can access the app in your web browser.

### Production
To build and run the app in production mode locally, use the following commands:
```bash
npm run build
npm run start
```
## Running the App with Docker
If you have Docker installed, you can run the app using Docker containers. There are separate Docker Compose files for development and production scenarios.

### Development
To run the app in development mode with Docker, use the following command:
```bash
docker compose --env-file .env.development -f docker-compose.yml -f docker-compose.dev.yml up
```
The app will start in a Docker container and can be accessed at http://localhost:3000 in your web browser.

### Production
To run the app in production mode with Docker, use the following command:
```bash
docker compose --env-file .env.production -f docker-compose.yml -f docker-compose.prod.yml up
```
The app will start in a Docker container and can be accessed at http://localhost:3000 in your web browser.

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests. We welcome any improvements or bug fixes.

## License

Do what you want
