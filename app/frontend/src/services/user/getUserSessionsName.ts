import { UserType } from "@/types/UserTypes";

export default function getUserSessionsName(userData: UserType | null) {
  let sessionsName: string[] = [];
  if (userData) {
    sessionsName = userData.Sessions.map((session) => {
      return session.session_name;
    });
  }
  return sessionsName; // {session_name: 'session1', 'id'}
}
