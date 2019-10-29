export default (req, res) => {
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
}
