// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  onSnapshot,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js"

// Your web app's Firebase configuration
const firebaseConfig = {
  //Aquí añadimos los datos de API que nos ha asignado FireBase
  apiKey: "AIzaSyAw0ULm5TusczAtAfUnToiyKF9Ue9IQZBI",
  authDomain: "iotproyecto-af576.firebaseapp.com",
  databaseURL: "https://iotproyecto-af576-default-rtdb.firebaseio.com",
  projectId: "iotproyecto-af576",
  storageBucket: "iotproyecto-af576.appspot.com",
  messagingSenderId: "28462243686",
  appId: "1:28462243686:web:92096ab00e5c82d289f2a7"

}

//Conectamos con la base de datos
const app = initializeApp(firebaseConfig)
const db = getFirestore()

//CRUD
export const updateDispositivo = (id, objeto) => updateDoc(doc(db, 'Dispositivos', id), objeto)
export const getDispositivo = (idDispositivo, callBack) => onSnapshot(doc(db,'Dispositivos', idDispositivo),callBack)
