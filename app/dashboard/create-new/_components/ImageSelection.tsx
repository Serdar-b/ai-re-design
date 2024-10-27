"use client";
import Image from "next/image";
import React, { useState } from "react";

function ImageSelection({
  selectedImage,
}: {
  selectedImage: (file: File) => void;
}) {
  const [file, setFile] = useState<File | null>(null);

  const onFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      console.log(files[0]);
      setFile(files[0]);
      selectedImage(files[0]);
    }
  };

  return (
    <div>
      <label>Select Image of your room</label>
      <div className="mt-3">
        <label htmlFor="upload-image">
          <div
            className={`group p-28 border rounded-xl border-dotted flex justify-center items-center border-purple-600 
            bg-slate-200 cursor-pointer hover:shadow-xl transition duration-300 ${
              file && "p-0 bg-white"
            }`}
          >
            {!file ? (
              <Image
                src={"/uploadimage.png"}
                width={70}
                height={70}
                alt={""}
                className="transition-transform duration-300 transform group-hover:scale-110"
              />
            ) : (
              <Image
                src={URL.createObjectURL(file)}
                alt={""}
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover"
              />
            )}
          </div>
        </label>
        <input
          type="file"
          accept="image/*"
          id="upload-image"
          style={{ display: "none" }}
          onChange={onFileSelected}
        />
      </div>
    </div>
  );
}

export default ImageSelection;
