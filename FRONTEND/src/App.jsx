import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import PeopleGrid from "./pages/PeopleGrid";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#F8F9FA] font-sans antialiased">
        <Sidebar />
        <div className="flex-1 h-screen overflow-y-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/people" />} />
            <Route path="/people" element={<PeopleGrid />} />
            {/* Add second screen route here: <Route path="/team" element={<TeamManagement />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
