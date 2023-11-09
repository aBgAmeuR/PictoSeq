import { User } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface JWT {
    login: string;
  }
}

declare module 'next-auth' {
  interface User {
    login: string;
  }

  interface Session {
    user: User;
  }
}
