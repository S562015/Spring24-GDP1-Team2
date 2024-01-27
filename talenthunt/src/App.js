import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/*<Home />*/}
    </div>
  );
}

export default App;
