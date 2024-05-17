import { IServerSideResponse } from "./types";

export const redirectHandler = ({
  path,
  props,
}: {
  path: string;
  props?: IServerSideResponse;
}) => {
  return {
    props: props || {},
    redirect: {
      destination: path,
      permanent: false,
    },
  };
};
