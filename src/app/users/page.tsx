"use client";
import PageLayout from "@/components/PageLayout";
import UsersComponent from "@/routes/Users";
import Head from "next/head";

const Users = () => {
  document.title = "LuminaLife Blog | Users";
  
  return (
    <>
      <Head>
        <title>LuminaLife Blog | Users</title>
      </Head>
      <PageLayout isSSR={false}>
        <UsersComponent />
      </PageLayout>
    </>
  );
};

export default Users;
