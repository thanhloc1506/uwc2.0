import { Card, Pagination } from "flowbite-react";
import { useRouter } from "next/router";
import React from "react";
import HorizonCard from "../../components/card/HorizonCard";
import SolidBreadcrump from "../../components/layouts/breadcrumb/SolidBreadcrump";
import SidebarCustom from "../../components/layouts/sidebar/SidebarCustom";
let arr = [1, 2, 3, 4];
const AssginPage = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-5 shadow-sm min-h-[75vh] mt-5">
      <div className="border-[1px] border-gray-100">
        <SidebarCustom currentPage={""} />
      </div>
      <div className="ml-5 col-span-4">
        <div className="">
          <SolidBreadcrump path={router.pathname} />
        </div>
        <div className="mt-5">
          <div className="grid grid-cols-2 gap-6">
            {arr.map((item) => (
              <div key={item} className="ml-auto mr-auto">
                <HorizonCard />
              </div>
            ))}
          </div>
        </div>
        <Pagination
          className="float-right pt-4 pb-10 pr-8"
          currentPage={1}
          totalPages={100}
          onPageChange={() => {}}
        />
      </div>
    </div>
  );
};

export default AssginPage;
