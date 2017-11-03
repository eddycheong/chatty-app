Chatty App
=====================

A minimal and simple clone of Slack written with ReactJS and Websockets.

### Usage

Clone this repository and ```cd``` to each directory to run the specified commands below:

#### Client Setup

Install the dependencies and startup the chatt app.
```
npm install
npm start
open http://localhost:3000

```

#### Server Setup

Install the dependencies and start the websocket server.

```
npm install
npm start
```

### Client Dependencies

* React
* React-DOM
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

### Server Dependencies

* express
* ws
* uuid