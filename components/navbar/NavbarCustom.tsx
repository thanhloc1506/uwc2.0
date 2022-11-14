import { Avatar, Navbar } from "flowbite-react";
import Link from "next/link";
import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { authentication } from "../../config/firebase";
import dynamic from "next/dynamic";
import { useAuthState } from "react-firebase-hooks/auth";
import RecipientAvatar from "../chat/RecipientAvatar";

const LoginModal = dynamic(() => import("../auth/LoginModal"), {
  ssr: false,
});

export default function NavbarCustom() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const logout = async () => {
    try {
      await signOut(authentication);
    } catch (error) {
      console.log(error);
    }
  };

  const [loginUser, loading, _error] = useAuthState(authentication);

  return (
    <div className="shadow-sm py-3">
      <Navbar fluid={true} rounded={true}>
        <Link href="/home" passHref>
          <Navbar.Brand
            href="https://flowbite.com/"
            className="mt-auto mb-auto"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              UWC 2.0
            </span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {!loginUser ? (
            <nav>
              <LoginModal
                showLoginForm={showLoginForm}
                setShowLoginForm={setShowLoginForm}
                showRegisterForm={showRegisterForm}
                setShowRegisterForm={setShowRegisterForm}
              />
            </nav>
          ) : (
            <>
              <nav className="flex">
                <nav className="mt-auto mb-auto">
                  <Avatar
                    img={
                      loginUser?.photoURL ??
                      "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    }
                    rounded={true}
                    size="md"
                  />
                </nav>
                <nav className="mt-auto mb-auto ml-2">
                  {loginUser?.email?.split("@")[0]}
                </nav>
              </nav>
              <nav className="mt-auto mb-auto">
                <p className="cursor-pointer" onClick={logout}>
                  Logout
                </p>
              </nav>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
