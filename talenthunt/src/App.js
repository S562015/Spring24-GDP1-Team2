import "./App.css";
import { Link, Route } from 'react-router-dom';
import Home from "./components/home/home";
function App() {
  return (
    <div className="App">
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <Route exact path="/" component={Home} />
        {/*<Route path="/about" component={About} />*/}
        {/*<Route path="/contact" component={Contact} />*/}
    </div>
  );
}



export default App;
