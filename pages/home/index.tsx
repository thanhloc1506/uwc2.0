import React, { useEffect } from "react";
import SidebarCustom from "../../components/layouts/sidebar/SidebarCustom";
import CheckboxTable from "../../components/table/CheckboxTable";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { getUser } from "../../redux/slices/authSlice";
import { RootState } from "../../redux/store";

const Homepage = () => {
  const authState = useAppSelector((state: RootState) => state.auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
    console.log(authState);
  }, []);

  return (
    <div className="grid grid-cols-5 shadow-sm min-h-[75vh] mt-[5%]">
      <div className="border-[1px] border-gray-100">
        <SidebarCustom />
      </div>
      <div className="ml-5 col-span-4">
        <CheckboxTable />
      </div>
    </div>
  );
};

export default Homepage;
