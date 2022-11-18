import { useRouter } from "next/router";
import { useEffect } from "react";
import DefaultSpinner from "../components/layouts/spinner/DefaultSpinner";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  });
  return (
    <div className="text-3xl font-bold underline">
      <DefaultSpinner />
    </div>
  );
}
