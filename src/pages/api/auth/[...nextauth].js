import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";
import UserServices from "src/archives/services/UserServices";
import axios from "axios";

export default NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      type: "credentials",

      credentials: {
        registerEmail: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
        identifier: {
          label: "Username",
          type: "text",
        },
      },

      async authorize(credentials, req) {
        const { password, identifier } = credentials;
        const userData = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_JJMALL_URL}/auth/local`,
          {
            identifier,
            password,
          },
          { Accept: "application/json", "Content-Type": "application/json" }
        );

        if (userData) {
          const user = {
            username: userData.data.user.username,
            email: userData.data.user.email,
          };
          console.log("userData", userData.data);
          console.log(user);
          return user;
        } else {
          throw new Error("Échec de connexion");
        }
      },
    }),
  ],

  pages: {
    signIn: "/",
  },

  secret: "looselipssinkships",

  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.name = user.username;
        token.email = user.email;
      }
      return token;
    },
    // session: ({ session, token }) => {
    //   if (token) {
    //     session.id = token.id;
    //     session.username = token.name;
    //     session.email = token.email;
    //   }
    //   return session;
    // },
  },
});
