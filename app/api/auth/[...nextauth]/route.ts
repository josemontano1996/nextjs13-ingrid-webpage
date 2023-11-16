import { checkOAuthUser } from "@/database/dbUsers";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {

      if (account) {
        switch (account.type) {
          case "oauth":
            token.user = await checkOAuthUser(
              user.email || "",
              user.name || "",
              user.image || "",
            );
            break;

          default:
            break;
        }
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
