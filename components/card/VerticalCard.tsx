import { Card } from "flowbite-react";
import React from "react";

const VerticalCard = () => {
  return (
    <div className="max-w-md w-52 h-60 bg-white rounded-md shadow-md hover:border-2 hover:border-blue-300">
      <div className="h-[50%]">
        <img
          src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.15752-9/314669382_1151421612427439_3727511937442058014_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=dKxCECIKONYAX97YLck&_nc_oc=AQn3wU0NcXc6uw_bd7lSipdr8oqOBWYEF5uH_LN3y0PKs9yuzC-vzBJEA8EZSoJvXvk&_nc_ht=scontent.fsgn5-8.fna&oh=03_AdSsUqR8u1mntCx9CxUG-KNZMSZadjenufFJdASPAksssg&oe=63A7C684"
          alt="Vehicle"
          className="py-2 rounded-md"
        />
      </div>
      <div className="h-[50%] w-full border-t-[1px]">
        <p className="mt-5 font-normal text-gray-700 dark:text-gray-400">
          <span className="ml-2">Vehicle Id:</span> 1
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="ml-2">Employee:</span> Nguyen Van A
        </p>
        <p>
          <span className="font-normal text-gray-700 dark:text-gray-400 ml-2">
            Status:
          </span>{" "}
          <span className="text-blue-500">Using</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default VerticalCard;
