import "./App.css";
import { Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
    </div>
    // <div className="App">
    //   <h1>Henry Videogames</h1>

    // </div>
  );
}

export default App;
