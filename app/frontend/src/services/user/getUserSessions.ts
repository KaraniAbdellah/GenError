import { UserType } from "@/types/UserTypes";

export default function getUserSessions(userData: UserType | null) {
  let sessions: { name: string; id: string }[] = [];
  if (userData) {
    sessions = userData.Sessions.map((session) => {
      return { name: session.session_name, id: session.id };
    });
  }
  return sessions;
}
