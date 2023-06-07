import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Startseite } from "./pages/Startseite"
import { ÜberUns } from "./pages/ÜberUns"
import { Kontakt } from "./pages/Kontakt"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Startseite />} />
        <Route path="/Startseite" element={<Startseite />} />
        <Route path="/ÜberUns" element={<ÜberUns />} />
        <Route path="/Kontakt" element={<Kontakt />} />
    </Routes>
    </>
  );
}

export default App;
