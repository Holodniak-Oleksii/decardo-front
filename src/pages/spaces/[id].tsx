import { Meta } from "@/common/shared";
import { ART_RESPONSE_LIST } from "@/mocks/art";
import { ArtDetails } from "@/modules";
import { IArtDetailsProps } from "@/modules/ArtDetails/types";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      art: ART_RESPONSE_LIST[0],
    },
  };
};

const DetailsPage: NextPage<IArtDetailsProps> = ({ art }) => {
  return (
    <>
      <Meta />
      <ArtDetails art={art} />
    </>
  );
};

export default DetailsPage;
