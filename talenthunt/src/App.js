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
import JobApplication from "./pages/jobpost/JobApplication";
import JobDescription from "./pages/jobpost/JobDescription";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/jobpost" element={<JobPost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/application" element={<Application />} />
        <Route path="/jobappliction" element={<JobApplication />} />
        <Route path="/jobdescription" element={<JobDescription />} />
      </Routes>
      {/*<Home />*/}
    </div>
  );
}

export default App;
