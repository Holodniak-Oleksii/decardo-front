import Head from "next/head";
import { FC } from "react";
import { IMetaProps } from "./types";

const Meta: FC<IMetaProps> = (props) => {
  const { title = "Decardo" } = props;
  // @TODO: create better seo
  return (
    <Head>
      <title>{title}</title>
      <meta
        name={"viewport"}
        content={"width=device-width, initial-scale=1, maximum-scale=1"}
      />
      <meta name={"description"} content={"CRM"} />
      <meta property={"og:title"} content={"CRM"} />
      <meta content={"./favicon.svg"} />
      <link rel="icon" type="image/x-icon" href="./favicon.svg" />
    </Head>
  );
};

export default Meta;
