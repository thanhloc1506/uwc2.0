import { Pagination } from "flowbite-react";
import { useRouter } from "next/router";
import React from "react";
import AddVehicleCard from "../../components/card/AddVehicleCard";
import VerticalCard from "../../components/card/VerticalCard";
import SolidBreadcrump from "../../components/layouts/breadcrumb/SolidBreadcrump";
import SidebarCustom from "../../components/layouts/sidebar/SidebarCustom";

let arr = [1, 2, 3, 4];
const AddVehiclePage = () => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-5 shadow-sm min-h-[75vh] mt-5">
      <div className="border-[1px] border-gray-100">
        <SidebarCustom currentPage="home" />
      </div>
      <div className="ml-5 col-span-4">
        <div className="">
          <SolidBreadcrump path={router.pathname} />
        </div>
        <div className="mt-5">
          <div className="grid grid-cols-3 gap-8">
            <div className="ml-auto mr-auto">
              <AddVehicleCard />
            </div>
            {arr.map((item) => (
              <div key={item} className="ml-auto mr-auto">
                <VerticalCard />
              </div>
            ))}
          </div>
        </div>
        <Pagination
          className="float-right pt-6 pb-8 pr-8"
          currentPage={1}
          totalPages={100}
          onPageChange={() => {}}
        />
      </div>
    </div>
  );
};

export default AddVehiclePage;
