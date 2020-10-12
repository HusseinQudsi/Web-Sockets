import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import config from './config'
import httpImport from 'http'
import socket from 'socket.io'

export const bootstrap = () => {

  try {

    const app = express()  
    const baseUrl = config.basePath + config.versioning
    const dir = __dirname
    const http = httpImport.createServer(app);
  
    app.disable('x-powered-by')
    app.use(cors())
    app.use(json())
    app.use(urlencoded({ extended: true }))
    app.use(morgan('dev'))
    app.use(express.static(dir + '/../public'))
  
    app.get('/', (req, res) => {
      res.sendFile(path.join(dir + '/../public/index.html'));
    })

    return {
      http,
      baseUrl,
      config
    }

  } catch (e) {

    config.log.error && console.error(e)
  }
}

export const setUpSocket = (appConfig) => {

  const io = socket(appConfig.http);
  const userSockets = [];

  io.on('connection', (socket) => {

    userSockets.push(socket);

    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
    
      setTimeout(() => {
    
        // Everyone:
        // io.emit('chat message', 'Hi Client');

        // Only that particualr client that just joined the socket:
        socket.emit("chat message", `Hi Client ${socket.id}`);
    
      }, 1000);
    });

    // Ad-hoc sending messages to client:
    setTimeout(() => {
      userSockets[0].emit("chat message", `Hi Client ${userSockets[0].id}`);
    }, 3000);
  });
}

export const startServer = async (appConfig) => {

  try {

    return appConfig.http.listen(appConfig.config.port, () => (
      config.log.logs && console.log(`REST API on http://localhost:${config.port}/api`))
    )
  } catch (e) {

    config.log.error && console.error(e)
  }
}
