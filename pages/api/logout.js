export default (req, res) => {
  req.session.decodedToken = null
  res.json({ status: true })
}
