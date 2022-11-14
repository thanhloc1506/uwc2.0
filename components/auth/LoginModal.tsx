import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { authentication } from "../../config/firebase";

interface ILoginForm {
  showLoginForm: boolean;
  setShowLoginForm: (show: boolean) => any;
  showRegisterForm: boolean;
  setShowRegisterForm: (show: boolean) => any;
}

const LoginModal: React.FC<ILoginForm> = ({
  showLoginForm,
  setShowLoginForm,
  showRegisterForm,
  setShowRegisterForm,
}) => {
  const [signInWithGoogle, _user, loading, _error] =
    useSignInWithGoogle(authentication);

  const createAccount = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
  };

  const goToSignIn = () => {
    setShowRegisterForm(false);
    setShowLoginForm(true);
  };
  return (
    <div>
      <React.Fragment>
        <p className="cursor-pointer" onClick={() => setShowLoginForm(true)}>
          Sign in
        </p>
        {/* Sign in form */}
        <Modal
          show={showLoginForm}
          size="md"
          popup={true}
          onClose={() => setShowLoginForm(false)}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  id="email"
                  placeholder="name@company.com"
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput id="password" type="password" required={true} />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <a
                  href="/"
                  className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
              <div className="w-full">
                <Button>Log in to your account</Button>
              </div>
              <div className="grid grid-cols-2">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{" "}
                  <p
                    onClick={createAccount}
                    className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </p>
                </div>
                <button
                  onClick={() => signInWithGoogle()}
                  className="w-fit h-fit p-2 bg-blue-400"
                >
                  Login with google
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        {/* Sign up form */}
        <Modal
          show={showRegisterForm}
          size="md"
          popup={true}
          onClose={() => setShowRegisterForm(false)}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign up
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  id="email"
                  placeholder="name@company.com"
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput id="password" type="password" required={true} />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="confirmPassword" value="Your password" />
                </div>
                <TextInput
                  id="confirmPassword"
                  type="password"
                  required={true}
                />
              </div>
              <div className="w-full">
                <Button>Sign up</Button>
              </div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Have account{" "}
                <p
                  onClick={goToSignIn}
                  className="text-blue-700 hover:underline dark:text-blue-500 cursor-pointer"
                >
                  Sign in
                </p>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    </div>
  );
};

export default LoginModal;
