import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import Home from "./Pages/Home";

function App() {
  const { logout, loginWithRedirect, user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();  // Initialize navigate function

  // Redirect to Home page after successful login
  if (isAuthenticated) {
    navigate("/home");
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome to Notes!</h2>
        {isAuthenticated ? (
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Hello, {user.name}!</h3>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="w-full py-3 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-all focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-600 mb-4">Please login to continue.</p>
            <button
              onClick={() => loginWithRedirect()}
              className="w-full py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login/Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
