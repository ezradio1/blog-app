import { Metadata } from "next";
import UsersComponent from "./";

export const metadata: Metadata = {
  title: "LuminaLife Blog | Users",
  description:
    "Discover the profiles and stories of our diverse and vibrant community",
};

const Users = () => {
  return <UsersComponent />;
};

export default Users;
