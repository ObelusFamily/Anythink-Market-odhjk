# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

**[TODO 05/01/2018 @vanessa-cooper]:** _It's been a while since anyone ran a fresh copy of this repo. I think it's worth documenting the steps needed to install and run the repo on a new machine?_

- Install docker and docker-compose on your machine. You can check if the installation is successful by running `docker -v` and `docker-compose -v`

- `cd` into this folder, and run `docker-compose up`. (If you have an error message about supported version, try changing the version property of the `docker-compose.yml` file). This will start the postgres database, the frontend and the backend. You can check services are running correctly by pinging the api (`localhost:3000/api/ping`) and creating a user `localhost:3001/register`.
