import type { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  // pages: {
  //   signIn: '/login',
  //   signOut: '/logout',
  //   newUser: '/register',
  // },
  secret: process.env.NEXTAUTH_SECRET as string,
  session: {},
  jwt: {},
  callbacks: {},
};
