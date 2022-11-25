import { Label } from "flowbite-react";
import React, { useState } from "react";
import { assign, mail, map } from "../../icons/UWCIcons";

interface IInputRow {
  label: string;
}

const InputRow: React.FC<IInputRow> = ({ label }) => {
  const [collector, setCollector] = useState("");
  const onClickFindCollector = () => {
    setCollector("Nguyen Thi B");
  };
  switch (label) {
    case "Collector":
      return (
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email5" value={label} />
          </div>
          <div className="relative">
            <div className="absolute z-10 top-2.5 left-2.5">{mail}</div>
            <div className="absolute top-0">
              <input
                type="text"
                className="pl-10 w-[50vw] rounded-md outline-none border-2 border-gray-300 active:border-none focus:border-none"
                value={collector}
                placeholder="Click to find Collector"
                onClick={onClickFindCollector}
                onChange={() => {}}
                spellCheck={false}
              />
            </div>
          </div>
        </div>
      );

    case "Route Name":
      return (
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email5" value={label} />
          </div>
          <div className="relative">
            <div className="absolute z-10 top-2.5 left-2.5">{assign}</div>
            <div className="absolute top-0">
              <input
                type="text"
                className="pl-10 w-[50vw] rounded-md outline-none border-2 border-gray-300 active:border-none focus:border-none"
                value={collector}
                placeholder="Please field Route name..."
                onClick={onClickFindCollector}
                onChange={() => {}}
                spellCheck={false}
              />
            </div>
          </div>
        </div>
      );

    case "Address":
      return (
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email5" value={label} />
          </div>
          <div className="relative">
            <div className="absolute z-10 top-2.5 left-2.5">{map}</div>
            <div className="absolute top-0">
              <input
                type="text"
                className="pl-10 w-[50vw] rounded-md outline-none border-2 border-gray-300 active:border-none focus:border-none"
                value={collector}
                placeholder="Please field Address..."
                onClick={onClickFindCollector}
                onChange={() => {}}
                spellCheck={false}
              />
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default InputRow;
