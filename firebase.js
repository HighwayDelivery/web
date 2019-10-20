import config from "./credentials/client"
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
