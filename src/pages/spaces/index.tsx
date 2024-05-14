import { prefetchGetArts, queryClient } from "@/common/api";
import { ARTS_LIMITS } from "@/common/constants";
import { Meta } from "@/common/shared";
import { InitArtsFilterSync } from "@/common/store";
import { IArtsFilter } from "@/common/store/arts-filter/types";
import { Spaces } from "@/modules";
import { IArtsPageProps } from "@/modules/Spaces/types";
import { dehydrate } from "@tanstack/react-query";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.query;

  let tags: string[] = [];
  if (typeof params?.tags === "string") {
    tags = params?.tags.split(",");
  } else if (Array.isArray(params?.tags)) {
    tags = params?.tags;
  }

  const filters: IArtsFilter = {
    query: String(params?.query || ""),
    page: Number(params?.page || 1),
    tags,
    limit: ARTS_LIMITS.HD_SCREEN,
  };

  await prefetchGetArts(filters);

  return {
    props: { params: filters, dehydratedState: dehydrate(queryClient) },
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
