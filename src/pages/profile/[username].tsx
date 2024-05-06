import { Meta } from "@/common/shared";
import { Profile } from "@/modules";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

const ProfilePage: NextPage = () => {
  return (
    <>
      <Meta />
      <Profile />
    </>
  );
};

export default ProfilePage;
