import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import GlobalStyle from "./pages/GlobalStyles";
import Appointment from "./pages/Appointment";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Hospital from "./pages/Hospital";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/home" element={<Main />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hospital" element={<Hospital />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
