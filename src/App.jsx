import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="w-5/6 mx-auto">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
