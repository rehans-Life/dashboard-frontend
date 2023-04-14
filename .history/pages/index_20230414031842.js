/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard");
  }, []);
  return (
    <div className="">
      <Head>
        <title>Admin Dashboard Panel</title>
        <meta name="description" content="dashboard panel for admins" />
        <link rel="icon" href="/dashboard-logo.jpg" />
      </Head>
    </div>
  );
}
