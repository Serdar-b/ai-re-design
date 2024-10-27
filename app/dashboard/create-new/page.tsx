"use client";
import React from "react";
import ImageSelection from "./_components/ImageSelection";

function CreateNew() {
  const onHandleInputChange = (_value: File, fieldName: string) => {};

  return (
    <div>
      <h2 className="font-bold text-4xl text-purple-600 text-center">
        Experience The Magic of AI Remodeling
      </h2>
      <p className="text-center text-gray-500">
        Transform any room with a click. Select a space, choose a style and
        watch as AI instantly reimagines your envvironment.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-10">
        <ImageSelection
          selectedImage={(value) => onHandleInputChange(value, "image")}
        />
      </div>
    </div>
  );
}

export default CreateNew;
