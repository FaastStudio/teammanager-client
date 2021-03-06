import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// firebase init
var config = {
  apiKey: 'AIzaSyDYexeb3IlQrJDP07F9JfArIrxCcEYJUNI',
  authDomain: 'team-admin.firebaseapp.com',
  databaseURL: 'https://team-admin.firebaseio.com',
  projectId: 'team-admin',
  storageBucket: 'team-admin.appspot.com',
  messagingSenderId: '787016448448'
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// firebase collections
const usersCollection = db.collection('Users')
const teamsCollection = db.collection('Teams')
const playersCollection = db.collection('Players')

export {
  db,
  auth,
  currentUser,
  usersCollection,
  teamsCollection,
  playersCollection
}
