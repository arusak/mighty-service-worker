import express from 'express'
import fs from 'fs'
import https from 'https'
import cors from 'cors'
import {endpoints} from './endpoints.js'
import {loadEnv} from 'vite'
import path from 'path'

const {SSL_PRIVATE_KEY_PATH, SSL_PUBLIC_KEY_PATH} = loadEnv(
  'development',
  path.resolve(process.cwd(), '..'),
  '',
)

const app = express()
const port = 8787
app.use(express.json())
app.use(cors()) // Enable CORS for all routes

endpoints(app) // add endpoints

// HTTPS Configuration
const sslOptions = {
  key: fs.readFileSync(SSL_PRIVATE_KEY_PATH),
  cert: fs.readFileSync(SSL_PUBLIC_KEY_PATH),
}

https.createServer(sslOptions, app).listen(port, () => {
  console.log(`Server running at https://localhost:${port}`)
})
