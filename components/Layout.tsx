import React from "react";
import FooterCustom from "./layouts/FooterCustom";
import SidebarCustom from "./layouts/sidebar/SidebarCustom";
import dynamic from "next/dynamic";

const NavbarCustom = dynamic(() => import("./navbar/NavbarCustom"), {
  ssr: false,
});

export default function Layout({ children }: any) {
  return (
    <div className="flex flex-col h-screen justify-between mx-[5%]">
      <NavbarCustom />
      <div className="mb-auto pb-5">
        <main className="">{children}</main>
      </div>
      <FooterCustom />
    </div>
  );
}
