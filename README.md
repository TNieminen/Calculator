# Description

This is a monorepo introducing a calculator backend and frontend service where 
we can send string based calculations to our API and receive the response as a string.


## Project structure

- `./backend` backend node.js express api service deployed to Heroku
- `./frontend` simple frontend to communicate with the API written in Vue 2 and deployed to Netlify

Both services use Github Actions for running tests on pr open, update and merge.
Netlify deployments happen on merge to main when updates concern files in frontend service.
Heroku deployments happen similarly on changes to backend service.

## Test the project

- Access the frontend [here](https://badger-calculator.netlify.app/)
- Test the API (via Swagger) [here](https://badger-calculator.herokuapp.com/)

## Project Goal

=== Description ==

	Your task is to setup a simple web service to implement a calculator. The service offers an endpoint that reads a string input and parses it. It should return either an HTTP error code, or a solution to the calculation in JSON form.

	An example calculus query:

	Original query: 2 * (23/(3*3))- 23 * (2*3)
	With encoding: MiAqICgyMy8oMyozKSktIDIzICogKDIqMyk

=== API Description ==

	Endpoint:

	GET /calculus?query=[input]
	The input can be expected to be UTF-8 with BASE64 encoding
	Return:
	On success: JSON response of format: { error: false, result: number }
	On error: Either a HTTP error code or: { error: true, message: string }
	Supported operations: + - * / ( )

== Technical constraints ==

	There are some constraints that you need to follow. These are followed by some tips and ideas that you can choose to follow if you wish.

	Required:
  Use a programming language of your choice.
  The API needs to be testable online from Futurice office.
  Consider adding automated tests where it makes sense.
  When writing your code, imagine the service is meant to be released to production (with a low-to-moderate expected load).
  Heroku or AWS might be a good place to publish your service. Please document your deployment process.
  The source code should be shared, either on public repository or a repository that Futurice can access. For example, GitHub is a good option.



## TODO

- [x] Finish up frontend
- [x] Create backend
- [x] Create integration tests for backend
- [x] Create github actions testing pipeline for backend
- [x] Create github actions testing pipeline for frontend
- [x] Create a deployment for backend // heroku with auto scaling
- [x] Create a deployment for frontend // netlify static site
- [x] Add unit tests to frontend
- [x] Add unit tests to backend
- [x] Clean up backend
- [x] Clean up frontend
- [x] Add test on push on both repos
- [x] Add Scaling to backend
- [x] Update backend README
- [x] Update frontend README
- [x] Update project README

## Optimizations

- [ ] Add proper unit tests for frontend
- [ ] Add unit tests for backend services
- [ ] Add pages and routing to frontend
- [ ] Add commitlint
- [ ] Add linting on commit (per repo)
- [ ] Dockerize app



