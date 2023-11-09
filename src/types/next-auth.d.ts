import { User } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface JWT {}
}

declare module 'next-auth' {
  interface User {}

  interface Session {}
}
