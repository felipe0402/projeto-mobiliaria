import Header from "../src/components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
function App() {
  return (
    <div className="App">
      <div className="white-gradient" />
      <div>
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
