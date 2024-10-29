import Image from "next/image";
import React, { useState } from "react";

function DesignType({
  selectedDesignType,
}: {
  selectedDesignType: (string: string) => void;
}) {
  const Designs = [
    {
      name: "Modern",
      image: "/modern.png",
    },
    {
      name: "Industrial",
      image: "/industrial.png",
    },
    {
      name: "Bohemian",
      image: "/bohemian.png",
    },
    {
      name: "Traditional",
      image: "/traditional.png",
    },
    {
      name: "Rustic",
      image: "/rustic.png",
    },
    {
      name: "Minimalist",
      image: "/minimalist.png",
    },
  ];

  const [selectedOption, setSelectedOption] = useState<string>();
  return (
    <div className="mt-5">
      <label className="text-gray-500">Interior Design Type</label>
      <div className="grid grid-cols-3 mt-3 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {Designs.map((design, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedOption(design.name);
              selectedDesignType(design.name);
            }}
          >
            <Image
              src={design.image}
              width={110}
              height={110}
              alt={design.name}
              className={`${
                design.name === selectedOption &&
                "border-4 border-red-400 rounded-md"
              } h-[80px] rounded-md hover:scale-105 transition-all cursor-pointer`}
            />
            <h2 className="mt-2">{design.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignType;
