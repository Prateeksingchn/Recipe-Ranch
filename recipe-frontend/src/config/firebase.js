import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBh19CB3rvoNO5ZC_WKvIbk0WHcQZqut_o",
  authDomain: "recipe-application-2e710.firebaseapp.com",
  databaseURL: "https://recipe-application-2e710-default-rtdb.firebaseio.com",
  projectId: "recipe-application-2e710",
  storageBucket: "recipe-application-2e710.appspot.com",
  messagingSenderId: "46332284032",
  appId: "1:46332284032:web:cbd5a86c212c381183aa65",
  measurementId: "G-30DLSD3TEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Configure Google Auth Provider
provider.setCustomParameters({
  prompt: 'select_account'
});

export { auth, provider, analytics };
export default app; 