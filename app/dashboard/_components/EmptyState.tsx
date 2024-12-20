import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function EmptyState() {
  return (
    <div className="flex items-center justify-center flex-col">
      <Image width={250} height={250} src={"/house3.png"} alt={""} />
      <h2 className="font-medium text-lg text-gray-500">
        Create New AI Interior Design For Your Room
      </h2>
      <Link href={"/dashboard/create-new"}>
        <Button className="mt-5">+ Redesign Room</Button>
      </Link>
    </div>
  );
}

export default EmptyState;
