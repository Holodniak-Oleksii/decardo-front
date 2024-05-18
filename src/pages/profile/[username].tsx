import { ProtectedRouteGuard } from "@/common/guards";
import { Meta } from "@/common/shared";
import { Profile } from "@/modules";
import { IProfilePageProps } from "@/modules/Profile/types";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = ProtectedRouteGuard(
  async (context) => {
    const username = context.query.username?.toString() || "";
    return { props: { username } };
  }
);

const ProfilePage: NextPage<IProfilePageProps> = ({ username }) => {
  return (
    <>
      <Meta />
      <Profile username={username} />
    </>
  );
};

export default ProfilePage;
