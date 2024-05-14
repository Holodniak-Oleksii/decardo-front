import {
  prefetchArt,
  prefetchArtsRecommended,
  queryClient,
  useGetArtQuery,
} from "@/common/api";
import { QueryKey } from "@/common/enums";
import { Meta } from "@/common/shared";
import { IArtResponseModel, IResponse } from "@/common/types";
import { ArtDetails } from "@/modules";
import { dehydrate } from "@tanstack/react-query";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.query;
  const cookie = context.req?.headers.cookie;

  if (!params?.id) {
    return {
      notFound: true,
    };
  } else {
    const id = String(params.id || "");
    await prefetchArt({ id, cookie });

    let artData = queryClient.getQueryData<IResponse<IArtResponseModel[]>>([
      QueryKey.ART,
      String(params.id || ""),
    ]);

    if (!artData) {
      return {
        notFound: true,
      };
    }
    const tags = artData.result[0].tags.join(",");
    await prefetchArtsRecommended({
      id,
      tags,
    });

    return {
      props: {
        id: params.id,
        dehydratedState: dehydrate(queryClient),
      },
    };
  }
};

const DetailsPage: NextPage<{ id: string }> = ({ id }) => {
  const { data } = useGetArtQuery({ id });
  return (
    <>
      <Meta />
      {data?.result && <ArtDetails art={data.result[0]} />}
    </>
  );
};

export default DetailsPage;
