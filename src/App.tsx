// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IncubationPage from "./pages/Incubation";
import FounderSchoolPage from "./pages/FounderSchool";
import MentorshipCirclePage from "./pages/MentorCycle";
import AccelerationPage from "./pages/Acceleration";
import AmeniJoinSoulIncubatorPage from "./pages/events/amenijoin-soul-incubator";
import UAQFTZEventPage from "./pages/events/uaqftz-emerges-future-best-destination";
import SoulFirstIncubatorOpensPage from "./pages/events/soul-first-incubator-opens";
import SoulInauguratedUAQPage from "./pages/events/soul-inaugurated-as-uaq-new-hub";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incubation" element={<IncubationPage />} />
        <Route path="/founder-school" element={<FounderSchoolPage />} />
        <Route path="/mentor-circle" element={<MentorshipCirclePage />} />
        <Route path="/Acceleration" element={<AccelerationPage />} />
        <Route path="/events/amenijoin-soul-incubator" element={<AmeniJoinSoulIncubatorPage />} />
        <Route path="/events/uaqftz-emerges-future-best-destination" element={<UAQFTZEventPage />} />
        <Route path="/events/soul-first-incubator-opens" element={<SoulFirstIncubatorOpensPage />} />
        <Route path="/events/soul-inaugurated-as-uaq-new-hub" element={<SoulInauguratedUAQPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
