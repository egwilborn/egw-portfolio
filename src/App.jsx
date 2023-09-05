import "./App.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <Routes>
      <Route path="/wilborn-portfolio/" element={<Home />} />
    </Routes>
  );
}

export default App;
