import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export interface IActiveble {}

export type TNextPageWithLayout<P = any, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, pageProps: any) => ReactNode;
};

export type TAppPropsWithLayout = AppProps & {
  Component: TNextPageWithLayout;
};
