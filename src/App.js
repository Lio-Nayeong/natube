import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Subscription from "./pages/Subscription";
import Trending from "./pages/Trending";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/music" element={<Music />} />
    </Routes>
  );
}

export default App;
