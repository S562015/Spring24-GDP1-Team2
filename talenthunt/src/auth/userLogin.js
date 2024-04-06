import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { setError } from "../redux/actions";

const useLogin = () => {
  const dispatch = useDispatch();

  const login = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setError(null));
      return res;
    } catch (err) {
      dispatch(setError(err));
      return null;
    }
  };

  return login;
};

export default useLogin;
