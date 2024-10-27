import React from "react";
import Header from "./_components/Header";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="pt-14 px-10 md:px-20 lg:px-40 xl:px-60 ">{children}</div>
    </>
  );
}

export default DashboardLayout;
