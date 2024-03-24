const express = require("express")

// Import routes from the subsystems.
const userRoutes = require('./userAccountManagement/userRoutes')
const messagingRoutes = require('./messaging/messageRoutes')
const communicationRoutes = require('./communication/communicationRoutes')
const discoveryRoutes = require('./userDiscovery/discoveryRoutes')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB__J8Zdf5Ajjl-F92fs3q45UDAES51tnw",
  authDomain: "elective-ii-project.firebaseapp.com",
  projectId: "elective-ii-project",
  storageBucket: "elective-ii-project.appspot.com",
  messagingSenderId: "671063354670",
  appId: "1:671063354670:web:b3d798c46e011eb1f31ebf",
  measurementId: "G-FCNM0YP3ZZ"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const app = express()
const port = 3000

app.use('/users', userRoutes)
app.use('/discovery', discoveryRoutes)
app.use('/communication', communicationRoutes)
app.use('/message', messagingRoutes)

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})
