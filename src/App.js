import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/layout.jsx";
import Entertainment from "./pages/entertainment/entertainment.jsx";
import Sports from "./pages/sports/sports.jsx";
import PageNotFound from "./pages/pagenotfound/pagenotfound.jsx";
import Home from "./pages/home/home.jsx";
import Science from "./pages/science/science.jsx";
import Technology from "./pages/technology/technology.jsx";
import Health from "./pages/health/health.jsx";
function App() {
  return (
    <Router>
      <div>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/health" element={<Health />} />
            <Route path="/science" element={<Science />} />
            <Route path="/technology" element={<Technology />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
