import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EditorPage from "./components/EditorPage";
import { Toaster } from "react-hot-toast";
import LandingPage from "./components/landingPage/LandingPage";

function App() {
  return (
    <>
      <div>
        <Toaster position="top-center"></Toaster>
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/editor/:roomId" element={<EditorPage />} />
      </Routes>
    </>
  );
}

export default App;
