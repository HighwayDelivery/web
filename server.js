require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const session = require("express-session")
const FileStore = require("session-file-store")(session)
const next = require("next")
const admin = require("firebase-admin")
const atob = require("atob")
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handler = app.getRequestHandler()

const credentials = JSON.parse(atob(process.env.SERVER_CREDS))

const firebase = admin.initializeApp(
  {
    credential: admin.credential.cert(credentials)
  },
  "server"
)

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json({ extended: true }))
  server.use(
    session({
      secret: "avail",
      saveUninitialized: true,
      store: new FileStore({ secret: "avail" }),
      resave: false,
      rolling: true,
      httpOnly: true,
      cookie: { maxAge: 604800000 }
    })
  )

  server.use((req, res, next) => {
    req.firebaseServer = firebase
    next()
  })

  server.post("/api/login", (req, res) => {
    console.log("log in")
    if (!req.body) return res.sendStatus(400)
    const token = req.body.token
    firebase
      .auth()
      .verifyIdToken(token)
      .then(decodedToken => {
        req.session.decodedToken = decodedToken
        res.json({ status: true, decodedToken })
      })
      .catch(error => res.json({ error }))
  })

  server.post("/api/logout", (req, res) => {
    console.log("log out")
    req.session.decodedToken = null
    res.json({ status: true })
  })

  server.all("*", handler)

  server.listen(port, err => {
    if (err) throw err
    if (dev) console.log(`> Ready on http://localhost:${port}`)
  })
})
