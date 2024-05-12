import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  callbacks: {
    session({ session }) {
      return session // The return type will match the one returned in `useSession()`
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
        }
      }
    })

  ],
  secret: process.env.NEXTAUTH_SECRET || "QfFAIT7JTnNOPXSl9+7A5Bc4OrzZnHlXAGNjX0JDEOw="
})