import { Metadata } from "next";
import UsersComponent from "./";

export const metadata: Metadata = {
  title: "LuminaLife Blog | Users",
  description:
    "Discover the profiles and stories of our diverse and vibrant community",
  icons: "/src/app/favicon.ico",
};

const Users = () => {
  return <UsersComponent />;
};

export default Users;
