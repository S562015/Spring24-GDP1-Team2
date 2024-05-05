import "./App.css";
import "./Utilities.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import JobPost from "./pages/jobpost/jobpost";
import Search from "./pages/search/Search";
import Profile from "./pages/profile/profile";
import Application from "./pages/application/application";
import PrivateRoutesLayout from "./PrivateRoutesLayout";
import Error from "./pages/Error/Error";
import { auth } from "./firebase";
import AspirantHome from "./pages/home/AspirantHome";
import { useSelector } from "react-redux";
import EmployerHomePage from "./pages/home/EmployeerHome";
import { ASPIRANT } from "./redux/actionType";

function App() {
  const { UserType } = useSelector((state) => state.helperReducer);

  console.log(auth.currentUser, { UserType });

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Error />} />
        <Route element={<PrivateRoutesLayout auth={auth} />}>
          <Route path="/jobpost" element={<JobPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route
            path="/home"
            element={
              UserType === ASPIRANT ? <AspirantHome /> : <EmployerHomePage />
            }
          />
          <Route path="/application" element={<Application />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
