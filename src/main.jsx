import { Auth0Provider } from "@auth0/auth0-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./Pages/Home";  // Import Home page

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-rg2ky7go4fkdqqgw.us.auth0.com"
      clientId="CXVIqdOj9BtZaRaIT9BjitF9iekUwhd0"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />  {/* Define the route for Home */}
        </Routes>
      </Router>
    </Auth0Provider>
  </StrictMode>
);
