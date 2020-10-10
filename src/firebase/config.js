import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDV166WvmgTLLzcQFLBOKzdO52YD9ASs4w",
  authDomain: "expo-bpc.firebaseapp.com",
  databaseURL: "https://expo-bpc.firebaseio.com",
  projectId: "expo-bpc",
  storageBucket: "expo-bpc.appspot.com",
  messagingSenderId: "821622959328",
  appId: "1:821622959328:web:519f19ec9eb5d7805df485",
  measurementId: "G-2MXN30BQER"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
