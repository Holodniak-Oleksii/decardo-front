import { useProfileQuery } from "@/common/api";
import { PageLoader } from "@/common/shared";
import { FC } from "react";
import { Main } from "./styles";
import { IGeneralLayoutProps } from "./types";

const GeneralLayout: FC<IGeneralLayoutProps> = ({ font, children }) => {
  const { data, isLoading, status } = useProfileQuery();
  console.log("status :", status);
  console.log("data :", data);

  return (
    <>
      {isLoading && <PageLoader />}
      <Main className={font}>{children}</Main>;
    </>
  );
};

export default GeneralLayout;
