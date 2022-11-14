import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import Loading from "../components/layouts/loading/Loading";
import { authentication, db } from "../config/firebase";
import { makeStore } from "../redux/store";
import "../styles/globals.css";

const LoginModal = dynamic(() => import("../components/auth/LoginModal"), {
  ssr: false,
});

function App({ Component, pageProps }: AppProps) {
  const [loginUser, loading, _error] = useAuthState(authentication);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  useEffect(() => {
    const setUSerInDb = async () => {
      try {
        await setDoc(
          doc(db, "users", loginUser?.email as string),
          {
            email: loginUser?.email,
            lastSeen: serverTimestamp(),
            photoURL: loginUser?.photoURL,
          },
          { merge: true }
        );
      } catch (error) {
        console.log(error);
      }
    };
    if (loginUser) {
      setUSerInDb();
    }
  });

  if (loading) return <Loading />;

  if (!loginUser)
    return (
      <LoginModal
        showLoginForm={showLoginForm}
        setShowLoginForm={setShowLoginForm}
        showRegisterForm={showRegisterForm}
        setShowRegisterForm={setShowRegisterForm}
      />
    );

  return (
    <Provider store={makeStore}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
