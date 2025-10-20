import "./index.css";
import About from "./pages/About";
import Page from "./pages/Page";
import { BrowserRouter, Routes, Route } from "react-router";
import Help from "./pages/Help";
import UpgradeToPro from "./pages/UpgradeToPro";
import Login from "./pages/Login";
import Account from "./pages/Account";
import PrivateRoutes from "./routes/PrivateRoutes";
import UserContext from "@/context/UserContext";
import SessionContext from "@/context/SessionContext";
import { useEffect, useState } from "react";
import { Session, UserType } from "./types/UserTypes";
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
    // main();
    return () => {};
  }, []);
  return (
    <UserContext.Provider value={userData}>
      <SessionContext.Provider value={[sessionData, setSessionData]}>
        <div className="h-screen bg-zinc-800 w-full">
          <BrowserRouter>
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path="/" element={<Page />}></Route>
              </Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/help" element={<Help />}></Route>
              <Route path="/upgrade" element={<UpgradeToPro />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/account" element={<Account />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </SessionContext.Provider>
    </UserContext.Provider>
  );
}
export default App;
