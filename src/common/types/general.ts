import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { FieldError, Merge } from "react-hook-form";
export interface IOption {
  label: string;
  value: string;
  id: number;
}

export interface IActiveble {
  isActive?: boolean;
}
export type TErrorForm =
  | FieldError
  | Merge<FieldError, (FieldError | undefined)[]>;
export interface IError {
  error?: TErrorForm;
}

export type TNextPageWithLayout<P = any, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, pageProps: any) => ReactNode;
};

export type TAppPropsWithLayout = AppProps & {
  Component: TNextPageWithLayout;
};

export interface IOpenable {
  isOpen: boolean;
}

export interface IDisabled {
  disabled: boolean;
}

export type TModelFormat = "fbx" | "glb" | "gltf" | "obj";
