import firebase from "firebase"

const config = {
    apiKey: "AIzaSyALM6lJChbWnOBpQFIW6VTNTOrhVepCzsw",
    authDomain: "budget-app-43e8f.firebaseapp.com",
    projectId: "budget-app-43e8f",
    storageBucket: "budget-app-43e8f.appspot.com",
    messagingSenderId: "1009352639496",
    appId: "1:1009352639496:web:03a0dd346b837069fdfdbd",
    measurementId: "G-T5QNXT8S88"
}

const fire = firebase.initializeApp(config)

export default fire