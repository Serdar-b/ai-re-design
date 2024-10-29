"use client";
import React from "react";
import ImageSelection from "./_components/ImageSelection";
import RoomType from "./_components/RoomType";
import DesignType from "./_components/DesignType";

function CreateNew() {
  const onHandleInputChange = (value: File | string, fieldName: string) => {};

  return (
    <div>
      <h2 className="font-bold text-4xl text-purple-600 text-center">
        Experience The Magic of AI Remodeling
      </h2>
      <p className="text-center text-gray-500">
        Transform any room with a click. Select a space, choose a style and
        watch as AI instantly reimagines your envvironment.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
        <ImageSelection
          selectedImage={(value) => onHandleInputChange(value, "image")}
        />
        <div>
          <RoomType
            selectedRoomType={(value) => onHandleInputChange(value, "roomType")}
          />
          <DesignType selectedDesignType={(value) => onHandleInputChange(value, "designType")} />
        </div>
      </div>
    </div>
  );
}

export default CreateNew;
