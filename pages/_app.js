import React from "react"
import { default as NextApp } from "next/app"
import axios from "axios"
import firebase from "firebase-client"
import redirect from "utils/redirect"
import Base from "components/base"

export default class App extends NextApp {
  static async getInitialProps(appContext) {
    const {
      ctx: { req, res, asPath }
    } = appContext
    const auth = firebase.auth()
    const user = req && req.session ? req.session.decodedToken : auth.currentUser
    if (user && asPath === "/") redirect(`/account/${user.uid}`, res)
    if (!user && asPath !== "/") redirect("/", res)
    const appProps = await NextApp.getInitialProps(appContext)
    return { ...appProps }
  }

  state = { user: this.props.user }

  async componentDidMount() {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        this.setState({ user })
        try {
          const token = await user.getIdToken()
          return await axios.post("/api/login", { token })
        } catch (err) {
          console.log(err)
        }
      } else {
        this.setState({ user: null })
        console.log(await axios.post("/api/logout"))
      }
    })
  }

  render() {
    const { Component, pageProps } = this.props
    const { user } = this.state
    return (
      <>
        <Base />
        <Component user={user} {...pageProps} />
      </>
    )
  }
}
