import { Meta, Plug } from "@/common/shared";
import { Error } from "@/modules";
import { NextPageContext } from "next";

interface ErrorProps {
  statusCode: number | string;
}
const ErrorPage = ({ statusCode }: ErrorProps) => {
  return (
    <>
      <Meta title={statusCode.toString()} />

      {statusCode === 404 ? (
        <Error />
      ) : (
        <Plug>
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : "An error occurred on client"}
        </Plug>
      )}
    </>
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  const statusCode =
    (res ? res.statusCode : err ? err.statusCode : 404) || "Error";

  return {
    statusCode,
  };
};

export default ErrorPage;
