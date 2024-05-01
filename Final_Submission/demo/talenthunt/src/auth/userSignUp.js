import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { setError } from "../redux/actions"; // Assuming there's a setUser action to set user data

const useSignUp = () => {
  const dispatch = useDispatch();

  const signUp = async (email, password, displayName) => {
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      // Extract user from userCredential
      const user = userCredential.user;

      // Update user profile with display name
      await updateProfile(user, { displayName: displayName });

      dispatch(setError(null));

      // Return user data
      return { email: user.email, displayName: user.displayName };
    } catch (err) {
      // Dispatch error to Redux store
      dispatch(setError(err));
      // Return null if signup fails
      return null;
    }
  };

  return signUp;
};

export default useSignUp;
