import { Meta } from "@/common/shared";
import { AboutUs } from "@/modules";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

const AboutUsPage: NextPage = () => {
  return (
    <>
      <Meta />
      <AboutUs />
    </>
  );
};

export default AboutUsPage;
