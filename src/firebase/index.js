import firebaseApp from 'firebase';

require("firebase/firestore");

const config = {
    apiKey: "AIzaSyDro08cO83Vl-aeWJAH3n4HoPyqJJ5HW2Y",
    authDomain: "test-9e468.firebaseapp.com",
    databaseURL: "https://test-9e468.firebaseio.com",
    projectId: "test-9e468",
    storageBucket: "test-9e468.appspot.com",
    messagingSenderId: "972572164256"
};
firebaseApp.initializeApp(config);

export default firebaseApp;