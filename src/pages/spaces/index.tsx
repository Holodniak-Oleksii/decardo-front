import { Meta } from "@/common/shared";
import { Spaces } from "@/modules";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

const SpacesPage: NextPage = () => {
  return (
    <>
      <Meta />
      <Spaces />
    </>
  );
};

export default SpacesPage;
