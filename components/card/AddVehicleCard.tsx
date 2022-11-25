import React from "react";
import addVehicle from "../../assets/addVehicle.png";

const AddVehicleCard = () => {
  return (
    <div className="max-w-md w-52 h-60 bg-white rounded-md hover:border-2 hover:border-blue-300 shadow-md cursor-pointer">
      <div className="h-[80%] w-full flex">
        <div className="m-auto">
          <img
            src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.15752-9/313915890_1546596222524236_4539263218323636077_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=GdXWdLUq5-YAX_bc-Ge&_nc_ht=scontent.fsgn5-5.fna&oh=03_AdTup0jM3ej6R-gDJJeaQP1nXE4418dAYmM1qubxuQvUdw&oe=63A7E8D4"
            alt="vehicle"
          />
        </div>
      </div>
      <div className="flex h-[20%] w-full border-t-2 border-t-gray-200">
        <p className="m-auto hover:text-black text-gray-700 uppercase font-medium">
          Add Vehicle
        </p>
      </div>
    </div>
  );
};

export default AddVehicleCard;
