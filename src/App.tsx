import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home"
import Canvas from "./Canvas";
import Interests from "./Interests";
function App() {
  return(
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/canvas" element={<Canvas></Canvas>} />
        <Route path="/interests" element={<Interests></Interests>} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/interests" element={<Interests />} /> */}
      </Routes>
    </Router>
  </div>
  );
}

export default App;