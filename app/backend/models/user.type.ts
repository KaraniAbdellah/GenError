import { Session } from "inspector/promises"

export interface User {
  name: string,
  email: string,
  password: string,
  Sessions?: Session[]
}

