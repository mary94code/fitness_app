import { useState } from "react";
import Overview from "./Pages/Overview";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Energy from "./Pages/Energy";
import Calendar from "./Pages/Calendar";
import Distances from "./Pages/Distances";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <div className="App">
       {token ? (
        <Router>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/energy" element={<Energy />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/distances" element={<Distances />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout setToken={setToken} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
       ) : (
        <Router>
          <Routes>
            <Route path="*" element={<Login setToken={setToken} />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
