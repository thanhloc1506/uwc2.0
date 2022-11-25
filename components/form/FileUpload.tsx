import { FileInput, Label } from "flowbite-react";
import React from "react";

const FileUpload = () => {
  return (
    <div id="fileUpload" className="w-[50vw]">
      <div className="mb-2 block">
        <Label htmlFor="file" value="Upload file" />
      </div>
      <FileInput
        id="file"
        helperText="A route picture is useful to confirm your position for task"
      />
    </div>
  );
};

export default FileUpload;
