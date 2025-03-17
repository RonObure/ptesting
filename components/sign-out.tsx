"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react"

const SignOut = () => {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="flex justify-center">
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition" onClick={handleSignOut}>
        Sign Out
      </button>
      
      {/*Other style*/}
      {/*<Button variant="destructive" onClick={handleSignOut}>
        Sign Out
      </Button>*/}
    </div>
  );
};

export { SignOut };