import { Meta } from "@/common/shared";
import { InitArtsFilterSync } from "@/common/store";
import { ART_RESPONSE_LIST } from "@/mocks/art";
import { Spaces } from "@/modules";
import { IArtsPageProps } from "@/modules/Spaces/types";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.query;
  return {
    props: { arts: ART_RESPONSE_LIST, params },
  };
};

const SpacesPage: NextPage<IArtsPageProps> = (props) => {
  return (
    <>
      <Meta />
      <Spaces />
      <InitArtsFilterSync filter={props.params} />
    </>
  );
};

export default SpacesPage;
