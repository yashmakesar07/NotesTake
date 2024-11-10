// src/App.jsx
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/Home";

function App() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  // Redirect to Home page after successful login
  if (isAuthenticated) {
    navigate("/home");
  }

  return (
    <div>
      {isAuthenticated ? <Home /> : <LoginPage />}
    </div>
  );
}

export default App;
