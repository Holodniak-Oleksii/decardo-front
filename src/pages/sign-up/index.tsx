import { ProtectedRouteGuard } from "@/common/guards";
import { AuthLayout } from "@/common/layouts";
import { Meta } from "@/common/shared";
import { TNextPageWithLayout } from "@/common/types";
import { Registration } from "@/modules";
import { GetServerSideProps } from "next";
import { ReactNode } from "react";

export const getServerSideProps: GetServerSideProps = ProtectedRouteGuard(
  async () => {
    return {
      props: {},
    };
  }
);

const RegistrationPage: TNextPageWithLayout = () => {
  return (
    <>
      <Meta />
      <Registration />
    </>
  );
};

RegistrationPage.getLayout = (page: ReactNode) => {
  return <AuthLayout>{page}</AuthLayout>;
};
export default RegistrationPage;
