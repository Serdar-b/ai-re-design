"use client";
import React, { useState } from "react";
import ImageSelection from "./_components/ImageSelection";
import RoomType from "./_components/RoomType";
import DesignType from "./_components/DesignType";
import AdditionalReq from "./_components/AdditionalReq";
import { Button } from "@/components/ui/button";

function CreateNew() {
  const [formData, setFormData] = useState([]);

  const onHandleInputChange = (
    value: File | string | React.ChangeEvent<HTMLTextAreaElement>,
    fieldName: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

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
          <DesignType
            selectedDesignType={(value) =>
              onHandleInputChange(value, "designType")
            }
          />
          <AdditionalReq
            additionalRequirementsInput={(value) =>
              onHandleInputChange(value, "additionalReq")
            }
          />
          <Button className="w-full mt-5">Generate</Button>
          <p className="text-sm text-grey-400 mb-52 mt-3">
            NOTE: 1 Credit will be used to redesign your room!
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateNew;
