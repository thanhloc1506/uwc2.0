import { useRouter } from "next/router";
import SolidBreadcrump from "../../components/layouts/breadcrumb/SolidBreadcrump";
import SidebarCustom from "../../components/layouts/sidebar/SidebarCustom";
import UsersTable from "../../components/table/UsersTable";

const ManageUserPage = () => {
  const router = useRouter();
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
          <UsersTable />
        </div>
      </div>
    </div>
  );
};

export default ManageUserPage;
