import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <div className="App">
        <Routes>
          <Route></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
