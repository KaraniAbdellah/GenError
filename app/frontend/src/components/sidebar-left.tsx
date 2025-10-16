import * as React from "react";
import {
  Command,
  Home,
  User,
  MessageCircleQuestion,
  Sparkles,
} from "lucide-react";

import { NavUser } from "@/components/nav-user";
import { NavFavorites } from "@/components/nav-favorites";
import { NavMain } from "@/components/nav-main";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useContext } from "react";
import userContext from "@/context/UserContext";
import { Session, UserType } from "@/types/UserTypes";

// This is sample data.

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const userData: UserType | null = useContext(userContext);
  const sessions: Session[] | null = userData?.Sessions || null;
  const userInfo = {
    name: userData?.name || "John",
    email: userData?.email || "john123@gmail.com",
    avatar: "https://avatar.iran.liara.run/public",
    isExit: userData ? true : false,
  };

  const data = {
    teams: [
      {
        name: "GenError V0.1",
        logo: Command,
      },
    ],
    navMain: [
      {
        title: "Ask AI",
        url: "#",
        icon: Sparkles,
      },
      {
        title: "Home",
        url: "/",
        icon: Home,
        isActive: true,
      },
      {
        title: "About",
        url: "/about",
        icon: User,
        badge: "10",
      },
      {
        title: "Help",
        url: "/help",
        icon: MessageCircleQuestion,
      },
    ],
    favorites: sessions,
  };

  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>

      <SidebarContent>
        <NavFavorites favorites={data.favorites} />
      </SidebarContent>

      <SidebarRail />

      <SidebarHeader className="border-sidebar-border h-16 border-b">
        <NavUser user={userInfo} />
      </SidebarHeader>
    </Sidebar>
  );
}
