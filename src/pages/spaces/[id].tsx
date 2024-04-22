import { Meta } from "@/common/shared";
import { ArtDetails } from "@/modules";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

const DetailsPage: NextPage = () => {
  return (
    <>
      <Meta />
      <ArtDetails />
    </>
  );
};

export default DetailsPage;
