// // components/LoginButton.jsx
"use client";
// import axios from "axios";
// // components/LoginButton.jsx

// import { useState } from "react";
// // import axios from "axios";

// const LoginButton = () => {
//   const [loading, setLoading] = useState(false);
//   const provider = "github";
//   const handleLogin = async () => {
//     setLoading(true);
//     try {
//       // Make a POST request to your API route
//       const response = await axios.post(`/api/auth/${provider}`, {
//         provider: provider,
//       });
//       // await signIn("github");
//       // Handle response if needed
//       console.log("Login successful:", response.data);
//     } catch (error) {
//       console.error("Error logging in:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <button onClick={handleLogin} disabled={loading}>
//       {loading ? "Logging in..." : `Login with ${provider}`}
//     </button>
//   );
// };

// export default LoginButton;

import { useState } from "react";
import axios from "axios";

const LoginButton = () => {
  const [loading, setLoading] = useState(false);
  const provider = "github";

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`/api/auth/${provider}`, { provider });
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Error logging in:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleLogin} disabled={loading}>
      {loading ? "Logging in..." : `Login with ${provider}`}
    </button>
  );
};

export default LoginButton;
