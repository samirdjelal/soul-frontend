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
import BuildingStartupPage from "./pages/blogs/building-startup-from-scratch";
import FutureTechStartupsPage from "./pages/blogs/the-future-of-tech-startups";

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
        <Route path="/blogs/building-startup-from-scratch" element={<BuildingStartupPage />} />
        <Route path="/blogs/the-future-of-tech-startups" element={<FutureTechStartupsPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
