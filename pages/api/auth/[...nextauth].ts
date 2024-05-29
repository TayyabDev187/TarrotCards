import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleAuthProvider from "next-auth/providers/google";


export default NextAuth({
  callbacks: {
    async session({ session }) {
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Email", type: "text", placeholder: "abc@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, _req) {
        return {
          ...credentials,
          id: credentials?.username ?? "",
          email: credentials?.username ?? "",
        };
      }
    }),
    GoogleAuthProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    })
  ],
  secret: process.env.NEXTAUTH_SECRET || "QfFAIT7JTnNOPXSl9+7A5Bc4OrzZnHlXAGNjX0JDEOw="
});
