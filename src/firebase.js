import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyB-DOzJLK2Exr14srVmbe-kHCe5kLXi09M",
    authDomain: "yogesh-95002.firebaseapp.com",
    projectId: "yogesh-95002",
    storageBucket: "yogesh-95002.appspot.com",
    messagingSenderId: "1026770358412",
    appId: "1:1026770358412:web:1931237d4448b46e1f2ba9",
    measurementId: "G-1B84EVT19V"
};


firebase.initializeApp(firebaseConfig);
let auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };