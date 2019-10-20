import Router from "next/router"

export default function redirect(path, res) {
  res
    ? res
        .writeHead(302, {
          Location: path
        })
        .end()
    : Router.push(path)
}
