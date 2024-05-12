import { db } from "@/config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function useAuth() {
    const [user, setUser] = useState<any>({});
    const { status, data } = useSession();

    async function updateUser(newData: any) {
        try {

            await setDoc(doc(db, 'users', user?.email ?? ""), {
                ...user,
                ...newData
            })


            setUser((prev: any) => ({
                ...prev,
                ...newData
            }))


        } catch (error: any) {
            toast.error(error.message)
        }
    }

    async function getUser() {
        try {
            let newUser = null;
            newUser = await getDoc(doc(db, 'users', data?.user?.email ?? ""));
            if (!newUser.exists()) {
                await setDoc(doc(db, 'users', data?.user?.email ?? ""), {
                    ...user,
                    ...data?.user,
                    plan: "free",
                    credits: 3
                })
            }
            newUser = await getDoc(doc(db, 'users', data?.user?.email ?? ""));
            setUser({ ...newUser.data(), id: newUser.id })
        } catch (error: any) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (status === 'authenticated') {
            getUser()
        } else {
            setUser({});
        }
    }, [status])

    return { user, updateUser };
}