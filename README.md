# TypeScript + Node.js Movies REST API (WIP)

## :top: Project
An API to find your next movie or create your watch list. It include reviews, rating, actors and anything you need to know about the movie.

-   This application will help users find their next movie to watch by showing helpful stats

## :ballot_box_with_check: Requirements
-   [Node.js](https://nodejs.org/) installed, version 10.13 or later
-   [Docker](https://docs.docker.com/get-docker/) installed, version 19.03.12 or later
-   [Docker Compose](https://docs.docker.com/compose/install/) installed, version 1.24.1 or later

## :construction: Start Development Server
-   Copy env vars
```sh
$ cp .env.example .env
```

-   Start API
```sh
$ npm run dev
# OR DIRECTLY VIA DOCKER COMPOSE
$ docker-compose up
```

## :newspaper: API Documentation
-   Create Documentation
```sh
$ npm run doc:create
```

-   Open Documentation
```sh
$ npm run doc:open
```

## :pushpin: Routes
-   :heavy_exclamation_mark: IMPORTANT: All movies routes will be return [Movie entities](src/entity/Movie.ts).

| Method |      Path      | Type of Return |
|--------|:--------------:|---------------:|
| GET    | /v1/movies/    | Movie[]        |
| GET    | /v1/movies/:id | Movie          |

## :skull: Run Tests
#### Unit tests:
```sh
$ npm run test:unit
```

## :floppy_disk: Backlog
### User Stories
-   [X] User can see all movies on a page
-   [X] User can see all movies ordered by their release date
-   [X] User can see any movie on a separate page

### Bonus features
-   [ ] User can create an account
-   [ ] User can create their own watch list
-   [ ] User can make movie review
-   [ ] Authorization
    -   [ ] Admin user can create/update/delete a movie

## :computer: Author
-   **Rafael Dias** :snowman: - *Software Developer*

## :wrench: Contributing
![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)

If you find any problem or have a suggestion, please [open an issue](https://github.com/rafaeldias98/typescript-movies-api/issues/new).

## :bulb: Credits for the ideia
-   [APP Ideas - MovieDB](https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Movie-App.md)
