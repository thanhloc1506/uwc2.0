import { Breadcrumb } from "flowbite-react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { getTextPath } from "../../../utils/getTextPath";

interface IBreadcrumb {
  path: string;
}
const SolidBreadcrump: React.FC<IBreadcrumb> = ({ path }) => {
  let items = path.split("/");
  const router = useRouter();
  return (
    <Breadcrumb
      aria-label="Solid background breadcrumb example"
      className="bg-gray-50 py-3 px-5 dark:bg-gray-900"
    >
      {items.map((item) => (
        <Breadcrumb.Item
          className="cursor-pointer"
          icon={undefined}
          onClick={() => router.push(`/${item}`)}
        >
          {getTextPath(item)}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default SolidBreadcrump;
