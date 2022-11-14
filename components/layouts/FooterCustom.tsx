import { Footer } from "flowbite-react";
import Link from "next/link";
import React from "react";

const FooterCustom = () => {
  return (
    <div>
      <Footer container={true}>
        <Footer.Copyright href="#" by="UWC 2.0™" year={2022} />
        <Footer.LinkGroup>
          <Link passHref href="/about" className="px-4">
            <Footer.Link href="/about">About</Footer.Link>
          </Link>
          <Link passHref href="/about" className="px-4">
            <Footer.Link href="#">Privacy Policy</Footer.Link>
          </Link>
          <Link passHref href="/about" className="px-4">
            <Footer.Link href="#">Licensing</Footer.Link>
          </Link>
          <Link passHref href="/about" className="px-4">
            <Footer.Link href="#">Contact</Footer.Link>
          </Link>
        </Footer.LinkGroup>
      </Footer>
    </div>
  );
};

export default FooterCustom;
