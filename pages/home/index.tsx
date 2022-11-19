import { useRouter } from "next/router";
import React, { useEffect } from "react";
import SolidBreadcrump from "../../components/layouts/breadcrumb/SolidBreadcrump";
import SidebarCustom from "../../components/layouts/sidebar/SidebarCustom";
import CheckboxTable from "../../components/table/CheckboxTable";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { getUser } from "../../redux/slices/authSlice";
import { RootState } from "../../redux/store";

const Homepage = () => {
  const authState = useAppSelector((state: RootState) => state.auth);

  const dispatch = useAppDispatch();
  const router = useRouter();

  // useEffect(() => {
  //   dispatch(getUser());
  // });

  return (
    <div className="grid grid-cols-5 shadow-sm min-h-[75vh] mt-5">
      <div className="border-[1px] border-gray-100">
        <SidebarCustom />
      </div>
      <div className="ml-5 col-span-4">
        <div className="">
          <SolidBreadcrump path={router.pathname} />
        </div>
        <div className="mt-5">
          <CheckboxTable />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
