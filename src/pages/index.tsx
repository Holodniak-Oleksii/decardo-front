import { prefetchGetHomeArts, queryClient } from "@/common/api";
import { Meta } from "@/common/shared";
import { Home } from "@/modules";
import { dehydrate } from "@tanstack/react-query";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  await prefetchGetHomeArts();
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const HomePage: NextPage = () => {
  return (
    <>
      <Meta />
      <Home />
    </>
  );
};

export default HomePage;
