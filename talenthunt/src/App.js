import "./App.css";
import "./Utilities.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import JobPost from "./pages/jobpost/jobpost";
import Search from "./pages/search/search";
import Profile from "./pages/profile/profile";
import Application from "./pages/application/application";
import PrivateRoutesLayout from "./PrivateRoutesLayout";
import Error from "./pages/Error/Error";
import { auth } from "./firebase";
import LandingPage from "./pages/home/LandingPage";
import NavBar from "./pages/search/NavBar";

function App() {
  console.log(auth.currentUser);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<NavBar />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Error />} />

        <Route element={<PrivateRoutesLayout auth={auth} />}>
          <Route path="/jobpost" element={<JobPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/application" element={<Application />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
