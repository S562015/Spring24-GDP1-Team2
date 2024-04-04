import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { setError } from "../redux/actions";

const useLogout = () => {
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      await auth.signOut();
      dispatch(setError(null));
    } catch (err) {
      dispatch(setError(err));
    }
  };

  return logout;
};

export default useLogout;
