"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import axios from "axios";

function Provider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();

  useEffect(() => {
    user && VerifyUser();
    console.log(user);
  }, [user]);

  const VerifyUser = async () => {
    const dataResult = await axios.post("/api/verify-user", {
      user: user,
    });

    console.log(dataResult.data);
  };

  return <div>{children}</div>;
}

export default Provider;
