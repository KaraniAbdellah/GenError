"use client";

import { ArrowUpRight, Link, MoreHorizontal, Trash2 } from "lucide-react";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useContext } from "react";
import SessionContext from "@/context/SessionContext";
import { Session, UserType } from "@/types/UserTypes";
import UserContext from "@/context/UserContext";

const INITIAL_DISPLAY_COUNT = 3;

export function NavFavorites({ favorites }: { favorites: Session[] | null }) {
  const { isMobile } = useSidebar();
  const [userData] = useContext<UserType | null>(UserContext);
  const [sessionData, setSessionData] = useContext<Session | null>(
    SessionContext
  );
  const [showAll, setShowAll] = useState(false);

  const getSessionId = (item: Session) => {
    console.log("Session Clicked is: ", item);
    setSessionData(() => item);
    console.log(sessionData, "sessionData");
  };

  // Determine which favorites to display
  const displayedFavorites = favorites
    ? showAll
      ? favorites
      : favorites.slice(0, INITIAL_DISPLAY_COUNT)
    : [];

  const hasMore = favorites && favorites.length > INITIAL_DISPLAY_COUNT;

  return (
    <SidebarGroup
      className={
        favorites?.length
          ? `group-data-[collapsible=icon]:hidden`
          : "group-data-[collapsible=icon]:hidden hidden"
      }
    >
      <SidebarGroupLabel>Prompts</SidebarGroupLabel>
      <SidebarMenu>
        {displayedFavorites.map((item) => (
          <SidebarMenuItem key={item.id}>
            <SidebarMenuButton asChild className="cursor-pointer">
              {sessionData?.id === item.id ? (
                <button
                  className="bg-gray-200"
                  onClick={() => getSessionId(item)}
                  title={item.session_name}
                >
                  <span>{item.session_name}</span>
                </button>
              ) : (
                <button
                  onClick={() => getSessionId(item)}
                  title={item.session_name}
                >
                  <span>{item.session_name}</span>
                </button>
              )}
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="cursor-pointer">
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <Link className="text-muted-foreground" />
                  <span>Copy Link</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ArrowUpRight className="text-muted-foreground" />
                  <span>Open in New Tab</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Trash2 className="text-muted-foreground" />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        {hasMore && (
          <SidebarMenuItem>
            <SidebarMenuButton
              className="text-sidebar-foreground/70 cursor-pointer"
              onClick={() => setShowAll(!showAll)}
            >
              <MoreHorizontal />
              <span>
                {showAll
                  ? "Show Less"
                  : `More (${favorites.length - INITIAL_DISPLAY_COUNT})`}
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
}
