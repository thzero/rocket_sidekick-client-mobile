![GitHub package.json version](https://img.shields.io/github/package-json/v/thzero/rocket_sidekick-client-mobile)
![David](https://img.shields.io/david/thzero/rocket_sidekick-client-mobile)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# RocketTools

A web based mobile application with some tools for rocketry.  The client application is a VueJS single page application leveraging [Capcitor](https://capacitorjs.com).  The following features are available currently

* Social login authentication via Google

## Requirements

RocketSidekick client requires the companion server application (https://github.com/thzero/rocket_sidekick-server) installed and running first.  The server application provides the API for use by the SPA.

### NodeJs

Requires [NodeJs ](https://nodejs.org) version 18+.

### Firebase

Google Firebase (https://firebase.google.com) provides the social based authentication; currently only Google social accounts are supported.

* Add a new project
  * If not already completed when setting up the server application
* Setup **Authentication**, enabled Google in the **Sign-in method**.
  * If not already completed when setting up the server application
* Get the Firebase SDK configuration
  * Go to Project Overview->Settings->General
  * Click **Add App** and select **Web**
    * Click *Firebase SDK snippet*, select **Config*
    * Select the JSON object and store it for later use.

### Installation

[![NPM](https://nodei.co/npm/@thzero/rocket_sidekick-client.png?compact=true)](https://npmjs.org/package/@thzero/rocket_sidekick-client)

### NPM Dependencies

Install the NPM dependencies for the server.

```
npm install
```

### Submodules

Install the submodule dependencies for the client.

```
git submodule add https://github.com/thzero/rocket_sidekick-common "common"
```

## Project setup

* Setup the configuration found in the config\development.json
  * Note that this is ignored in the .gitignore
* Configuration looks like the following

```
{
	"backend": [
		{
			"key": "backend",
			"apiKey": "<apikey required by the server component>",
			"baseUrl": "<base url for the api of the server component>"
		}
	],
	"external": {
		"firebase": <firebase key JSON object from above goes here>
	}
}
```

## Development

### Compiles and hot-reloads for development

Run the application locally using the VueJs development server; requires the server component.

```
npm run serve
```

## Build

### Compiles and minifies for production

Compiles the application for deployment to device.

```
npm run build
```

## Device

TBD