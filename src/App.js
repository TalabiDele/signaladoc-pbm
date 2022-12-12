import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import AddPharamcy from "./pages/AddPharamcy";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/signup" ||
      location.pathname === "/signin" ||
      location.pathname === "/forgot-password" ? (
        <></>
      ) : (
        // <Nav />
        <></>
      )}

      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add_pharmacy" element={<AddPharamcy />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
