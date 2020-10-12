import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import config from './config'

export const app = express()

const baseUrl = config.basePath + config.versioning

app.disable('x-powered-by')
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const dir = __dirname// /Users/superuser500/Desktop/Development/dev-code/base-node-es2017/dist/server
app.use(express.static(dir + '/../public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(dir + '/../public/index.html'));
})

export const start = async () => {

  try {

    return app.listen(config.port, () => (
      config.log.logs && console.log(`REST API on http://localhost:${config.port}/api`))
    )

  } catch (e) { config.log.error && console.error(e) }
}
