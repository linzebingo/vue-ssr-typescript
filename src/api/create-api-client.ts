import Firebase from 'firebase/app'
import 'firebase/database'
// import Firebase from './mock-firebase'


export function createAPI ({ config, version }) {
  Firebase.initializeApp(config)
  return Firebase.database().ref(version)
}
