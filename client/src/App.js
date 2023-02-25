import "./App.css";
import { Route, useLocation } from "react-router-dom";
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import Form from "./views/Form/Form";
import NavBar from "./views/NavBar/NavBar";

function App() {
  const location = useLocation;
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/form" component={Form} />
    </div>
  );
}

export default App;
