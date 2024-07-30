# Project Setup and Local Development

This guide will help you set up and run the project locally.

## Prerequisites

Make sure you have the following installed on your machine:

- Docker
- Node.js

## Getting Started

### Backend Setup

Navigate to the `Hasura` directory:

```sh
cd Hasura
npm install
```

```sh
cd hasura-back
./reset.sh
```

It will load migrations and metadata and start up the containers.

### Frontend Setup

Create an .env file in the Front folder:
Navigate to the Front directory:

```sh
cd ../Front
```

Copy the contents from .env.example to your newly created .env file

```sh
cp .env.example .env
```

Next, fill in the values for any empty environment variables in the .env file."

Run this script:

```sh
./load.sh
```

Start the frontend development server:

```sh
npm run dev
```

You can now navigate to https://localhost:3000.
