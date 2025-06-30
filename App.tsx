// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IncubationPage from "./pages/Incubation";
import FounderSchoolPage from "./pages/FounderSchool";
import MentorshipCirclePage from "./pages/MentorCycle";
import AccelerationPage from "./pages/Acceleration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incubation" element={<IncubationPage />} />
        <Route path="/founder-school" element={<FounderSchoolPage />} />
        <Route path="/mentor-circle" element={<MentorshipCirclePage />} />
        <Route path="/Acceleration" element={<AccelerationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
