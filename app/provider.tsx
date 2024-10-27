"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserDetailContext } from "./_context/userDetailContext";

export interface UserDetail {
  id: number;
  name: string;
  email: string;
  imageURL: string;
  credits: number;
}

const defaultUserDetail: UserDetail = {
  id: 0,
  name: "",
  email: "",
  imageURL: " ",
  credits: 0,
};

function Provider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState<UserDetail>(defaultUserDetail);

  useEffect(() => {
    if (user) VerifyUser();
  }, [user]);

  const VerifyUser = async () => {
    try {
      const dataResult = await axios.post("/api/verify-user", {
        user: user,
      });
      setUserDetail(dataResult.data.result);
    } catch (error) {
      console.error("Error in VerifyUser:", error);
    }
  };

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div>{children}</div>
    </UserDetailContext.Provider>
  );
}

export default Provider;
