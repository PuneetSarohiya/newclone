import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCgvT_psS_ul8Dl0wT974w5Op1v8wKE8rk",
  authDomain: "netflix-clone-ed32f.firebaseapp.com",
  projectId: "netflix-clone-ed32f",
  storageBucket: "netflix-clone-ed32f.firebasestorage.app",
  messagingSenderId: "1083306049488",
  appId: "1:1083306049488:web:745101ccaecc4e55b783d5",
  measurementId: "G-KSWJRS54QD"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBqWq8WFmOb_t2-KmO4yacs3Ki0cc4HTuA",
//   authDomain: "netflixx-clone-8282.firebaseapp.com",
//   projectId: "netflixx-clone-8282",
//   storageBucket: "netflixx-clone-8282.appspot.com",
//   messagingSenderId: "1093442970123",
//   appId: "1:1093442970123:web:b9385f6b2ebbd6eeda9d0e",
//   measurementId: "G-5LNYW6BYZE"
// };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth,provider };
export default db;
