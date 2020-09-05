# Easy User Authentication for React Apps

This repository hosts a React project that defines a Single-Page Application (SPA). You'll secure access to some of its routes using Auth0 User Authentication.

## Get Started

Install the client project dependencies:

```bash
yarn
```

Create `.env` file under the project directory:

```bash
touch .env
```

Populate `.env` as follows:

```bash
REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
REACT_APP_AUDIENCE=
REACT_APP_API_URL=http://localhost:7000
```

Get the values for `REACT_APP_AUTH0_DOMAIN` and `REACT_APP_AUTH0_CLIENT_ID` from your Auth0 Application in the Auth0 Dashboard.

The value of `REACT_APP_AUDIENCE` is the Auth0 Identifier of the secured API that you want to access from your React app.

For this application, you can use the [Auth0 Express Sample](https://github.com/auth0-blog/auth0-express-sample) to practice making API calls.

Run the client project:

```bash
yarn start
```
