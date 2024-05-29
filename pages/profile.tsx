import RecentModal from "@/components/RecentModal";
import { db } from "@/config/firebase";
import { Button } from "@nextui-org/react";
import { doc, getDoc } from "firebase/firestore";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Profile = () => {
  const router = useRouter();
  const [user, setUser] = useState<any>({});
  const { status, data } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      getUser();
    } else if (status === "unauthenticated") {
      router.push('/'); // Redirect to login page if not authenticated
    }
  }, [status]);

  const getUser = async () => {
    try {
      if (data?.user?.email) {
        const newUser = await getDoc(doc(db, "users", data.user.email));
        if (newUser.exists()) {
          setUser({ ...newUser.data(), id: newUser.id });
        } else {
          toast.error("User data not found");
        }
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div
      className="w-full flex h-screen justify-between pl-10 pr-20 py-24"
      style={{
        backgroundImage: "url(/img/profileBg.svg)",
        backgroundSize: "60%", // Keeps aspect ratio while covering the entire element
        backgroundPosition: "left top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col">
        <h1 className="text-[42px] font-bold text-[#0c104e]">
          Readings
        </h1>
        <div className="flex justify-start pl-0">
          <RecentModal />
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-[42px] font-bold text-[#0c104e] mb-6">
          My Profile
        </h1>
        <div className="flex gap-2 mb-4">
          <span className="text-xl text-[#0c104e] font-semibold">Name:</span>
          <span className="text-xl text-[#0c104e] font-semibold">
            {user?.id?.slice(0, 8)}...
          </span>
        </div>
        <div className="flex gap-2 mb-4 cursor-pointer" onClick={() => router.push("/reading")}>
          <span className="text-xl text-[#0c104e] font-semibold">
            Reading
          </span>
        </div>
        <div className="flex gap-2 mb-4 cursor-pointer" onClick={() => router.push("/blog")}>
          <span className="text-xl text-[#0c104e] font-semibold">
            Blog
          </span>
        </div>
        <div className="flex gap-2 mb-4 cursor-pointer" onClick={() => router.push("/pricing")}>
          <span className="text-xl text-[#0c104e] font-semibold">
            Pricing
          </span>
        </div>
        <Button
          className="text-lg text-[#0c104e] font-semibold"
          onClick={handleSignOut}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Profile;
