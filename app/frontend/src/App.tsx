import "./index.css";
import About from "./pages/About";
import Page from "./pages/Page";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Help from "./pages/Help";
import UpgradeToPro from "./pages/UpgradeToPro";
import Login from "./pages/Login";
import Account from "./pages/Account";
import UserContext from "@/context/UserContext";
import SessionContext from "@/context/SessionContext";
import { useEffect, useState } from "react";
import { Session, UserType } from "./types/UserTypes";
import { Toaster } from "react-hot-toast";
import GetUserInformation from "./services/user/GetUserInformation";

function App() {
  const [userData, setUserData] = useState<UserType | null>(null);
  const [sessionData, setSessionData] = useState<Session[] | null>();
  async function main() {
    const reponseData: UserType | null = await GetUserInformation();
    if (reponseData) {
      setUserData(() => reponseData);
    } else {
      setUserData(() => null);
    }
  }
  useEffect(() => {
    main();
    return () => {};
  }, []);
  return (
    <BrowserRouter>
      <UserContext.Provider value={[userData, setUserData]}>
        <SessionContext.Provider value={[sessionData, setSessionData]}>
          <div className="h-screen bg-zinc-800 w-full relative">
            <Routes>
              {/* <Route index element={<Loading></Loading>} /> */}
              <Route path="/" element={<Page />} />
              <Route path="/about" element={<About />} />
              <Route path="/help" element={<Help />} />
              <Route path="/upgrade" element={<UpgradeToPro />} />
              <Route path="/account" element={<Account />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            <Toaster position="top-center" reverseOrder={false} />
          </div>
        </SessionContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
export default App;
