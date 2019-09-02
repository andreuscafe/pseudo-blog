import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyAbVMip1NQSbEkN4L_S6oaZoQPgryU2Rfg',
    authDomain: 'the-pseudo-blog.firebaseapp.com',
    databaseURL: 'https://the-pseudo-blog.firebaseio.com',
    projectId: 'the-pseudo-blog',
    storageBucket: 'the-pseudo-blog.appspot.com',
    messagingSenderId: '975321409992',
    appId: '1:975321409992:web:664965fe0bd93af0'
  }
  firebase.initializeApp(config)
}

const fireDb = firebase.firestore()
export { fireDb }
