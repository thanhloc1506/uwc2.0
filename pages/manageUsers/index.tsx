import SidebarCustom from "../../components/layouts/sidebar/SidebarCustom";
import UsersTable from "../../components/table/UsersTable";

const ManageUserPage = () => {
  return (
    <div className="grid grid-cols-5 shadow-sm min-h-[75vh] mt-[5%]">
      <div className="border-[1px] border-gray-100">
        <SidebarCustom />
      </div>
      <div className="ml-5 col-span-4">
        <UsersTable />
      </div>
    </div>
  );
};

export default ManageUserPage;
