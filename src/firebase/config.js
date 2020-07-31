import * as firebase from 'firebase/app';
import 'firebase/storage'; // Image Storage
import 'firebase/firestore'; // Firebase Database

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCHQ5agYAw8G_0cbrh0ZhF6GHrp9jxzuBA',
  authDomain: 'bchen-firegram.firebaseapp.com',
  databaseURL: 'https://bchen-firegram.firebaseio.com',
  projectId: 'bchen-firegram',
  storageBucket: 'bchen-firegram.appspot.com',
  messagingSenderId: '519106817275',
  appId: '1:519106817275:web:9a24de658c6330efb9945e',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Services
const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// Export for Usage
export { projectStorage, projectFireStore, timestamp };
