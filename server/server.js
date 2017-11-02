// server.js

const express = require('express');
const uuid = require('uuid/v1');
const ws = require('ws');
const randomColor = require('randomcolor');

const SocketServer = ws.Server;

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
    // Make the express server serve static assets (html, javascript, css) from the /public folder
    .use(express.static('public'))
    .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${PORT}`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Broadcast to all.
wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        if (client.readyState === ws.OPEN) {
            client.send(data);
        }
    });
};

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
    console.log('Client connected');
    const serverState = {
        type: 'incomingServerState',
        activeUsers: wss.clients.size
    }
    const color = randomColor();

    wss.broadcast(JSON.stringify(serverState));

    ws.on('message', data => {

        const message = JSON.parse(data);
        message['type'] = message['type'].replace(/post/, 'incoming');
        message['id'] = uuid(); 
        message['usercolor'] = color;

        wss.broadcast(JSON.stringify(message));
    });

    // Set up a callback for when a client closes the socket. This usually means they closed their browser.
    ws.on('close', () => {
        console.log('Client disconnected')
        const serverState = {
            type: 'incomingServerState',
            activeUsers: wss.clients.size
        }

        wss.broadcast(JSON.stringify(serverState));
    });
});