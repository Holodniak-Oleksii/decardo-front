import { AuthLayout } from "@/common/layouts";
import { Meta } from "@/common/shared";
import { TNextPageWithLayout } from "@/common/types";
import { Login } from "@/modules";
import { GetServerSideProps } from "next";
import { ReactNode } from "react";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

const LoginPage: TNextPageWithLayout = () => {
  return (
    <>
      <Meta />
      <Login />
    </>
  );
};

LoginPage.getLayout = (page: ReactNode) => {
  return <AuthLayout>{page}</AuthLayout>;
};
export default LoginPage;
