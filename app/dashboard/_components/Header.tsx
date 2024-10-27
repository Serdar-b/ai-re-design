"use client";
import { useUserDetailContext } from "@/app/_context/userDetailContext";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function Header() {
  const { userDetail } = useUserDetailContext();

  // Use JSON.stringify to see a formatted object structure
  // console.log("Current userDetail:", JSON.stringify(userDetail, null, 2));

  return (
    <div className="flex justify-between items-center p-5 shadow-md">
      <div className="flex items-center gap-4">
        <Image src={"/logo.svg"} width={40} height={40} alt={""} />
        <div className=" font-bold text-2xl ">AI Re-Design</div>
      </div>
      <Button
        variant="ghost"
        className="rounded-full text-purple-600 mr-[60px]"
      >
        Buy more credits!
      </Button>
      <div className=" mr-5 flex gap-7 items-center">
        <div className=" flex p-1 gap-2 items-center bg-slate-200 px-3 rounded-full ">
          <Image src={"/star.png"} width={20} height={20} alt={""} />
          <h2>{userDetail.credits}</h2>
        </div>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
