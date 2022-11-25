import { Label, TextInput } from "flowbite-react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import CreateRouteForm from "../../components/form/CreateRouteForm";
import InputRow from "../../components/form/InputRow";
import SolidBreadcrump from "../../components/layouts/breadcrumb/SolidBreadcrump";
import SidebarCustom from "../../components/layouts/sidebar/SidebarCustom";
import { mail } from "../../icons/UWCIcons";

const CreateRoutePage = () => {
  const router = useRouter();
  const [collector, setCollector] = useState("");
  const onClickFindCollector = () => {
    setCollector("Nguyen Thi B");
  };
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
          <CreateRouteForm />
        </div>
      </div>
    </div>
  );
};

export default CreateRoutePage;
