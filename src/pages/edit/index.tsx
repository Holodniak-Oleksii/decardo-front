import { ProtectedRouteGuard } from "@/common/guards";
import { Meta } from "@/common/shared";
import { Edit } from "@/modules";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = ProtectedRouteGuard(
  async () => {
    return {
      props: {},
    };
  }
);

const EditPage: NextPage = () => {
  return (
    <>
      <Meta />
      <Edit />
    </>
  );
};

export default EditPage;
