import { GetServerSideProps } from "next";

export type TProtectedRoute = (
  callback: GetServerSideProps
) => GetServerSideProps;

export interface IServerSideResponse {
  props: {
    [key: string]: any;
  };
}
