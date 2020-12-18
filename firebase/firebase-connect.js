const firebase = require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyCFyUMczzBct7Q-kxgN3v0Xjen5_yf0i7w",
  authDomain: "smer-project.firebaseapp.com",
  databaseURL: "https://smer-project-default-rtdb.firebaseio.com",
  projectId: "smer-project",
  storageBucket: "smer-project.appspot.com",
  messagingSenderId: "861493173906",
  appId: "1:861493173906:web:372623b864aa7489e7504b",
  measurementId: "G-XY31WZ7XS9"
};
      
module.exports = firebase.initializeApp(firebaseConfig);