import { Meta } from "@/common/shared";
import { Home } from "@/modules";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
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
