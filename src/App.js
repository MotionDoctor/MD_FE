import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import GlobalStyle from "./pages/GlobalStyles";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
