import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { setError } from "../redux/actions";
// import { useHistory } from "react-router-dom";

const useLogout = () => {
  const dispatch = useDispatch();
  // const history = useHistory();

  const logout = async () => {
    try {
      // dispatch(setLoading(true));
      await auth.signOut();
      dispatch(setError(null));
      // dispatch(clearUser());
      // dispatch(setLoading(false));
      alert("Logged out successfully!");
      // history.push("/login");
    } catch (err) {
      dispatch(setError(err));
      // dispatch(setLoading(false));
      alert("Logout failed. Please try again later.");
    }
  };

  return logout;
};

export default useLogout;
