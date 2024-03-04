import { auth } from "../firebase";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";

let error = null;

const login = async (email, password) => {
  error = null;

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    error = null;
    console.log(res.user);
    return res;
  } catch (err) {
    error = err.message;
    console.log(err.message);
  }
};

const userLogin = () => {
  return { error, login };
};

export default userLogin;
