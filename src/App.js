import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./pages/GlobalStyles";
import Appointment from "./pages/Appointment";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Hospital from "./pages/Hospital";
import Diag from "./pages/Diag";
import My from "./pages/My";
import Ing from "./pages/Ing";
import Result from "./pages/Result";

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
        <Route path="/diagnosis" element={<Diag />} />
        <Route path="/my" element={<My />} />
        <Route path="/diagnosis/ing" element={<Ing />} />
        <Route path="/diagnosis/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
