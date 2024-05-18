import { prefetchProfile, queryClient } from "@/common/api";
import { QueryKey } from "@/common/enums";
import { ProtectedRouteGuard } from "@/common/guards";
import { Meta } from "@/common/shared";
import { useUserStore } from "@/common/store";
import { IResponse, IUser } from "@/common/types";
import { Profile } from "@/modules";
import { IProfilePageProps } from "@/modules/Profile/types";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = ProtectedRouteGuard(
  async (context) => {
    const username = context.query.username?.toString() || "";
    const cookies = context.req?.headers.cookie || "";

    let user = queryClient.getQueryData<IResponse<IUser[]>>([
      QueryKey.PROFILE,
      QueryKey.USER,
    ]);

    if (!username) {
      return {
        props: {
          isMyProfile: true,
        },
      };
    }
    if (username === user?.result[0].username) {
      return {
        props: {
          isMyProfile: true,
        },
      };
    }

    let profile = queryClient.getQueryData<IResponse<IUser[]>>([
      QueryKey.PROFILE,
      username,
    ]);

    if (!profile) {
      await prefetchProfile(cookies, username);
      profile = queryClient.getQueryData<IResponse<IUser[]>>([
        QueryKey.PROFILE,
        username,
      ]);
    }

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

const ProfilePage: NextPage<IProfilePageProps> = ({ isMyProfile, profile }) => {
  const user = useUserStore((state) => state.user);
  console.log("user :", user);

  return (
    <>
      <Meta />
      <Profile
        profile={isMyProfile ? user : profile}
        isMyProfile={isMyProfile}
      />
    </>
  );
};

export default ProfilePage;
