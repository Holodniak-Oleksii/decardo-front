import { prefetchProfile, queryClient } from "@/common/api";
import { QueryKey } from "@/common/enums";
import { ProtectedRouteGuard } from "@/common/guards";
import { Meta } from "@/common/shared";
import { IResponse, IUser } from "@/common/types";
import { Profile } from "@/modules";
import { IProfilePageProps } from "@/modules/Profile/types";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = ProtectedRouteGuard(
  async (context) => {
    const username = context.query.username?.toString() || "";
    const cookies = context.req?.headers.cookie || "";

    let user = queryClient.getQueryData<IResponse<IUser[]>>([QueryKey.PROFILE]);

    if (!username) {
      return {
        props: {
          isMyProfile: true,
          profile: user?.result[0],
        },
      };
    }
    if (username === user?.result[0].username) {
      return {
        props: {
          isMyProfile: true,
          profile: user?.result[0],
        },
      };
    }

    let profile = queryClient.getQueryData<IResponse<IUser[]>>([
      QueryKey.PROFILE,
      username,
    ]);

    if (!profile) {
      await prefetchProfile(cookies, username);
      console.log("username :", username);
      profile = queryClient.getQueryData<IResponse<IUser[]>>([
        QueryKey.PROFILE,
        username,
      ]);
    }
    console.log("profile :", profile);

    if (profile?.status !== 200) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        isMyProfile: false,
        profile: profile?.result[0],
      },
    };
  }
);

const ProfilePage: NextPage<IProfilePageProps> = (props) => {
  return (
    <>
      <Meta />
      <Profile {...props} />
    </>
  );
};

export default ProfilePage;
