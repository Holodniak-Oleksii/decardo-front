import { Meta } from "@/common/shared";
import { Login } from "@/modules";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

const LoginPage: NextPage = () => {
  return (
    <>
      <Meta />
      <Login />
    </>
  );
};

export default LoginPage;
