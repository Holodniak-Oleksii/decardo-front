import { prefetchGetHomeArts } from "@/common/api";
import { ProtectedRouteGuard } from "@/common/guards";
import { Meta } from "@/common/shared";
import { Home } from "@/modules";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = ProtectedRouteGuard(
  async () => {
    await prefetchGetHomeArts();
    return {
      props: {},
    };
  }
);

const HomePage: NextPage = () => {
  return (
    <>
      <Meta />
      <Home />
    </>
  );
};

export default HomePage;
