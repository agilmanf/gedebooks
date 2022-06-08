import "./App.css";
import InputSection from "./components/InputSection";
import DataSection from "./components/DataSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <InputSection />
        <DataSection />
      </div>
    </div>
  );
}

export default App;
