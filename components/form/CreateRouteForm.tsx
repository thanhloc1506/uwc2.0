import { Button } from "flowbite-react";
import React from "react";
import FileUpload from "./FileUpload";
import InputRow from "./InputRow";

const CreateRouteForm = () => {
  return (
    <div className="ml-5">
      <div>
        <InputRow label="Route Name" />
      </div>
      <div className="mt-16">
        <InputRow label="Address" />
      </div>
      <div className="mt-16">
        <InputRow label="Collector" />
      </div>
      <div className="mt-16">
        <FileUpload />
      </div>
      <div className="mt-8 mr-auto w-[50vw] bg-red-100">
        <div className="float-right">
          <Button>Create Route</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateRouteForm;
