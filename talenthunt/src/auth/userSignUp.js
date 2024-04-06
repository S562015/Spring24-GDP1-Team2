import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { setError } from "../redux/actions";

const useSignUp = () => {
  const dispatch = useDispatch();

  const signUp = async (email, password, displayName) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log({ res });

      if (!res) {
        throw new Error("Something went wrong, try again!");
      }
      dispatch(setError(null));
      // include the display name in the user profile
      await updateProfile(res.user, { displayName: displayName });
    } catch (err) {
      dispatch(setError(err));
    }
  };

  return signUp;
};

export default useSignUp;
