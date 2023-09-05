import "./App.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
