import { Fragment } from "react"
import Base from "components/base"

export default function App({ pageProps, Component }) {
  return (
    <Fragment>
      <Base />
      <Component {...pageProps} />
    </Fragment>
  )
}
