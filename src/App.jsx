import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import Chat from "./pages/Chat";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
