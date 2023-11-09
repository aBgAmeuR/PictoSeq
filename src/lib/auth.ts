import type { Account, NextAuthOptions, Profile, Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import jwt from 'jsonwebtoken';
import GithubProvider, { GithubProfile } from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider<GithubProfile>({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,
          login: profile.login,
        };
      },
    }),
  ],
  // pages: {
  //   signIn: '/login',
  //   signOut: '/logout',
  //   newUser: '/register',
  // },
  secret: process.env.NEXTAUTH_SECRET as string,
  jwt: {
    async encode({ secret, token }) {
      if (!token) {
        throw new Error('No token to encode');
      }

      return jwt.sign(token, secret);
    },
    async decode({ secret, token }) {
      if (!token) {
        throw new Error('No token to decode');
      }
      const decodedToken = jwt.verify(token, secret);
      if (typeof decodedToken === 'string') {
        return JSON.parse(decodedToken);
      } else {
        return decodedToken as JWT;
      }
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async jwt({ token, profile }: any) {
      if (profile) {
        token.login = profile.login as string;
      }
      return { ...token };
    },
    async session({ session, token, user }: { session: Session; token: JWT; user: User }) {
      if (session.user) {
        session.user.login = token.login;
      }
      return session;
    },
  },
};
