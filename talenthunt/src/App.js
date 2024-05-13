import "./App.css";
import "./Utilities.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/home/home";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import JobPostingPage from "./pages/jobpost/JobPostingPage";
import Search from "./pages/search/Search";
import Profile from "./pages/profile/profile";
import Application from "./pages/application/application";
import PrivateRoutesLayout from "./PrivateRoutesLayout";
import Error from "./pages/Error/Error";
import { auth } from "./firebase";
import AspirantHome from "./pages/home/AspirantHome";
import { useDispatch, useSelector } from "react-redux";
import EmployerHomePage from "./pages/home/EmployeerHome";
import { ASPIRANT } from "./redux/actionType";
import AspirantApplied from "./pages/jobpost/AspirantApplied";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { getAspirant, getEmployer } from "./pages/signup/signupActions";
import { getJobs } from "./pages/home/homeActions";

function App() {
  const { UserType } = useSelector((state) => state.helperReducer);
  const [userData, setUserData] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        console.log({ data });
        setUserData(data);
        // navigate("/home", { replace: true });
      } else {
        // alert("Not Logged In");
        console.log("logged out");
      }
    });
    dispatch(getJobs());
  }, []);
  console.log(auth.currentUser, { UserType });

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Error />} />
        <Route element={<PrivateRoutesLayout auth={userData} />}>
          <Route path="/jobpost" element={<JobPostingPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route
            path="/home"
            element={
              UserType === ASPIRANT ? <AspirantHome /> : <EmployerHomePage />
            }
          />
          <Route path="/application" element={<Application />} />
          <Route path="/joblist" element={<AspirantApplied />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
