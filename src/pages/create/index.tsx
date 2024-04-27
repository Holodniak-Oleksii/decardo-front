import { Meta } from "@/common/shared";
import { TNextPageWithLayout } from "@/common/types";
import { Create } from "@/modules";
import { GetServerSideProps } from "next";
import { ReactNode } from "react";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

const CreatePage: TNextPageWithLayout = () => {
  return (
    <>
      <Meta />
      <Create />
    </>
  );
};

CreatePage.getLayout = (page: ReactNode) => page;

export default CreatePage;
