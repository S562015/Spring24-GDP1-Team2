import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import JobPost from "./pages/jobpost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/jobpost" element={<JobPost />} />
      </Routes>
      {/*<Home />*/}
    </div>
  );
}

export default App;
