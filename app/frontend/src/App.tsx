import "./index.css";
import About from "./pages/About";
import Page from "./pages/Page";
import { BrowserRouter, Routes, Route } from "react-router";
import Trachs from "./pages/Trachs";
import Help from "./pages/Help";
import UpgradeToPro from "./pages/UpgradeToPro";
import Login from "./pages/Login";
import Account from "./pages/Account";

function App() {
  return (
    <div className="h-screen bg-zinc-800 w-full">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Page />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/trachs" element={<Trachs />}></Route>
            <Route path="/help" element={<Help />}></Route>
            <Route path="/upgrade" element={<UpgradeToPro />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/account" element={<Account />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
// https://ui.shadcn.com/blocks/sidebar

export default App;
