import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import GlobalStyle from "./pages/GlobalStyles";
import Appointment from "./pages/Appointment";
import Hospital from "./pages/Hospital";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/hospital" element={<Hospital />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
