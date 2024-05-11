import { LINK_TEMPLATES } from "@/common/constants";
import { PlusIcon } from "@/common/icons";
import { MobileOff, MobileOn } from "@/utils";
import { useRouter } from "next/router";
import { FC } from "react";
import { Avatar, Create, Wrapper } from "./styles";
import { IAccountProps } from "../../types";

const Account: FC<IAccountProps> = ({ isOpen, onClose }) => {
  const { push } = useRouter();

  const onRedirect = () => {
    onClose?.();
    push(LINK_TEMPLATES.PROFILE("1"));
  };
  return (
    <Wrapper isOpen={isOpen}>
      <MobileOff>
        <Create onClick={() => push(LINK_TEMPLATES.CREATE_SPACE())}>
          <PlusIcon />
        </Create>
      </MobileOff>
      <MobileOn>
        <Create onClick={onRedirect}>Madara Uchiha</Create>
      </MobileOn>
      <Avatar onClick={onRedirect}>
        <span>MU</span>
      </Avatar>
    </Wrapper>
  );
};

export default Account;
