import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDy8SVYihK61wrz4wuUKItlxqf33DRmjEA",
  authDomain: "auth-a00a9.firebaseapp.com",
  projectId: "auth-a00a9",
  storageBucket: "auth-a00a9.appspot.com",
  messagingSenderId: "986357724766",
  appId: "1:986357724766:web:1dd85e39262597fcaf26cf",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res);
        const user = {
          name: res.user.displayName,
          profilePic: res.user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(user));
    })
    .catch((error) => {
      console.log(error);
    });
};
