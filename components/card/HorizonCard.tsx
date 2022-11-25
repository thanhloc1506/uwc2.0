import { Card } from "flowbite-react";
import React from "react";

const HorizonCard = () => {
  return (
    <div className="max-w-md pb-5">
      <Card
        horizontal={true}
        imgSrc="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.15752-9/314931703_533057025380929_4579237396219837155_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Ta_OsL5puhIAX-VGUxV&_nc_ht=scontent.fsgn5-5.fna&oh=03_AdTFFzjW-m-jEhDceG29WuxG3hXfkeDuzsNyZRPCiQ8V1w&oe=63A7B380"
        className="h-56 max-h-fit"
      >
        <h5 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white">
          Ly Thuong Kiet
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-medium">Janitor:</span> Nguyen Van A
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-medium">Collector:</span> Nguyen Thi B
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-medium">Status:</span>{" "}
          <span className="text-blue-500">Processing</span>
        </p>
      </Card>
    </div>
  );
};

export default HorizonCard;
