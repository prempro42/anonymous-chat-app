import { Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Page404 from "./pages/Page404";
import SignIn from "./pages/SignIn";
import "./App.css";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route
        path="/chat"
        element={
          <RequireAuth>
            <Chat />
          </RequireAuth>
        }
      />
      <Route path="/join/:invitedRoomName" element={<SignIn />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
