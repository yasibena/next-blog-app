import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import User from "@/app/models/User"
import connect from "@/app/utils/db"
import bcrypt from "bcryptjs"

export const authOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: any) {
                await connect()
                try {
                    const user = await User.findOne({ email: credentials.email })
                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        )
                        if (isPasswordCorrect) {
                            return user;
                        }
                    }
                } catch (err: any) {
                    throw new Error(err)
                }
            },
        })
    ],
}

export const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

