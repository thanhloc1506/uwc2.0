import { Sidebar } from "flowbite-react";
import Link from "next/link";
import React from "react";

const SidebarCustom = () => {
  return (
    <div>
      <div className="w-fit shadow-sm h-[75vh]">
        <Sidebar aria-label="Sidebar with logo branding example">
          <Sidebar.Items>
            <Sidebar.ItemGroup className="">
              <Link href="/home" passHref>
                <Sidebar.Item icon={undefined}>Dashboard</Sidebar.Item>
              </Link>
              <Link href="/home" passHref>
                <Sidebar.Item icon={undefined}>Asign task</Sidebar.Item>
              </Link>
              <Link href="/home" passHref>
                <Sidebar.Item icon={undefined}>Creat route</Sidebar.Item>
              </Link>
              <Link href="/chatbox" passHref>
                <Sidebar.Item icon={undefined}>Conversation</Sidebar.Item>
              </Link>
              <Link href="/manageUsers" passHref>
                <Sidebar.Item icon={undefined}>Manage users</Sidebar.Item>
              </Link>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
};

export default SidebarCustom;
