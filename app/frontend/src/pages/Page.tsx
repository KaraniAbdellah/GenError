import { SidebarLeft } from "@/components/sidebar-left";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Main from "@/buit_component/Main";
import { useEffect, useState } from "react";
import { CornerDownRight } from "lucide-react";
import { Link } from "react-router";
import GetUserInformation from "@/services/user/GetUserInformation";
import { Session, UserType } from "@/types/UserTypes";
import UserContext from "@/context/UserContext";
import SessionContext from "@/context/SessionContext";

export default function Page() {
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
    console.log("userData From Main", userData);
    return () => {};
  }, [userData]);

  return (
    <UserContext.Provider value={userData}>
      <SessionContext.Provider value={[sessionData, setSessionData]}>
        <SidebarProvider>
          <SidebarLeft />
          <SidebarInset>
            <div className="relative">
              <header className="bg-background sticky top-0 flex h-14 shrink-0 items-center gap-2 z-50 shadow">
                <div className="flex flex-1 items-center gap-2 px-3">
                  <SidebarTrigger />
                  <Separator
                    orientation="vertical"
                    className="mr-2 data-[orientation=vertical]:h-4"
                  />
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbPage className="line-clamp-1"></BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                  {!userData ? (
                    <Link to="/login">
                      <div className="flex items-center gap-2 bg-sky-100 border border-sky-300 text-sky-800 px-4 py-2 rounded-full shadow-sm hover:bg-sky-200 transition-all cursor-pointer">
                        <p className="flex">
                          <CornerDownRight className="mr-3" />
                          Login to save your prompts
                        </p>
                      </div>
                    </Link>
                  ) : (
                    "Welcome Again @" + userData.name
                  )}
                </div>
              </header>
              <Main />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </SessionContext.Provider>
    </UserContext.Provider>
  );
}
