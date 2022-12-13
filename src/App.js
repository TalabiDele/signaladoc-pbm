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
import Consulatations from "./pages/Consulatations";
import Inventory from "./pages/Inventory";
import Orders from "./pages/Orders";
import Transactions from "./pages/Transactions";
import Settings from "./pages/Settings";
import AuthContext from "./Context/AuthContext";
import { useContext } from "react";

function App() {
  const location = useLocation();

  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <div className="App">
      {location.pathname === "/signup" ||
      location.pathname === "/signin" ||
      location.pathname === "/forgot-password" ? (
        <></>
      ) : (
        <Nav />
      )}
      <Routes>
        <Route
          path="/signin"
          element={
            user !== null ? <Navigate to="/dashboard" replace /> : <Signin />
          }
        />
        <Route
          path="/signup"
          element={
            user !== null ? <Navigate to="/dashboard" replace /> : <Signup />
          }
        />
        <Route
          path="/add_pharmacy"
          element={
            user !== null ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <AddPharamcy />
            )
          }
        />
        <Route
          path="/forgot-password"
          element={
            user !== null ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <ForgotPassword />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            user === null ? <Navigate to="/signin" replace /> : <Dashboard />
          }
        />
        <Route
          path="/consultations"
          element={
            user === null ? (
              <Navigate to="/signin" replace />
            ) : (
              <Consulatations />
            )
          }
        />
        <Route
          path="/inventory"
          element={
            user === null ? <Navigate to="/signin" replace /> : <Inventory />
          }
        />
        <Route
          path="/orders"
          element={
            user === null ? <Navigate to="/signin" replace /> : <Orders />
          }
        />
        <Route
          path="/transactions"
          element={
            user === null ? <Navigate to="/signin" replace /> : <Transactions />
          }
        />
        <Route
          path="/settings"
          element={
            user === null ? <Navigate to="/signin" replace /> : <Settings />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
