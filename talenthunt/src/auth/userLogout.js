import { auth } from "../firebase";

let error = null;

const logout = async () => {
  error = null;

  try {
    await auth.signOut();
  } catch (err) {
    error = err.message;
  }
};

const userLogout = () => {
  return { logout, error };
};

export default userLogout;
