import { Sidebar } from "flowbite-react";
import Link from "next/link";
import {
  assign,
  conversation,
  create,
  home,
  manageUser,
  vehicle,
} from "../../../icons/UWCIcons";

const SidebarCustom = () => {
  return (
    <div>
      <div className="w-fit shadow-sm h-[75vh]">
        <Sidebar aria-label="Sidebar with logo branding example">
          <Sidebar.Items>
            <Sidebar.ItemGroup className="">
              <Link href="/home" passHref className="flex">
                <nav className="mb-auto mt-auto">{home}</nav>
                <Sidebar.Item
                  icon={undefined}
                  className="active:bg-transparent active:text-blue-500"
                >
                  Dashboard
                </Sidebar.Item>
              </Link>
              <Link href="/home" passHref className="flex">
                <nav className="mb-auto mt-auto">{assign}</nav>
                <Sidebar.Item icon={undefined}>Assign task</Sidebar.Item>
              </Link>
              <Link href="/home" passHref className="flex">
                <nav className="mb-auto mt-auto">{create}</nav>
                <Sidebar.Item icon={undefined}>Creat route</Sidebar.Item>
              </Link>
              <Link href="/home" passHref className="flex">
                <nav className="mb-auto mt-auto">{vehicle}</nav>
                <Sidebar.Item icon={undefined}>Add vehicle</Sidebar.Item>
              </Link>
              <Link href="/chatbox" passHref className="flex">
                <nav className="mb-auto mt-auto">{conversation}</nav>
                <Sidebar.Item icon={undefined}>Conversation</Sidebar.Item>
              </Link>
              <Link href="/manageUsers" passHref className="flex">
                <nav className="mb-auto mt-auto">{manageUser}</nav>
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
