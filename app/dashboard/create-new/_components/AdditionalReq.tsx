import React from "react";
import { Textarea } from "@/components/ui/textarea";

function AdditionalReq({
  additionalRequirementsInput,
}: {
  additionalRequirementsInput: (
    text: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}) {
  return (
    <div className="mt-5">
      <label htmlFor="message" className="text-gray-500">
        Enter additional requirements (optional)
      </label>
      <Textarea
        className="mt-3"
        placeholder="Type your prompts here."
        id="message"
        onChange={(e) => additionalRequirementsInput(e)}
      />
    </div>
  );
}

export default AdditionalReq;
