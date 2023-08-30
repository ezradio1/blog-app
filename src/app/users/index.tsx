"use client";
import PageLayout from "@/components/PageLayout";
import UsersComponent from "@/routes/Users";

const Users = () => {
  return (
    <PageLayout isSSR={false}>
      <UsersComponent />
    </PageLayout>
  );
};

export default Users;
