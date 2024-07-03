import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nowplaying from "./components/pages/nowplaying";
import UpComing from "./components/pages/upComing";
import TopRated from "./components/pages/topRated";
import Popular from "./components/pages/popular";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Nowplaying />} />
        <Route path="/upcoming" element={<UpComing />} />
        <Route path="/top_rated" element={<TopRated />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </div>
  );
}

export default App;
