// Utility Types: Omit Type
/*
    The Omit<Type, Keys>:
        in simple way Omit help to Contractor Certain Type with Omit Some properties.
*/

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

type Admin = Omit<User, "id">; // this type wihout id

// namespace in typescipt
/*
  is like way to group classes interfaces, ...
*/
namespace Auth {
  export interface User {
    id: string;
    name: string;
  }

  export class Service {
    login(user: User) {
      /*...*/
    }
  }
}
