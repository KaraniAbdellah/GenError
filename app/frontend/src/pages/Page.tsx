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
import { useEffect } from "react";
import { CornerDownRight } from "lucide-react";

import { Link } from "react-router";

export default function Page() {
  useEffect(() => {
    // Get User Data With Axios
    return () => {};
  }, []);
  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset>
        <div>
          <header className="bg-background sticky top-0 flex h-14 shrink-0 items-center gap-2">
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
              <Link to="/login">
                <div className="flex items-center gap-2 bg-sky-100 border border-sky-300 text-sky-800 px-4 py-2 rounded-full shadow-sm hover:bg-sky-200 transition-all cursor-pointer">
                  <p className="flex">
                    <CornerDownRight className="mr-3" />
                    Login to save your prompts
                  </p>
                </div>
              </Link>
            </div>
          </header>
          <Main />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
