import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import AppRouter from "./router/Router";

function App() {
  return <AppRouter />;
}

export default App;
