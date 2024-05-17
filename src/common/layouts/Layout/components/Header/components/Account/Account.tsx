import { LINK_TEMPLATES } from "@/common/constants";
import { PlusIcon } from "@/common/icons";
import { useUserStore } from "@/common/store";
import { MobileOff, MobileOn } from "@/utils";
import { useRouter } from "next/router";
import { FC } from "react";
import { IAccountProps } from "../../types";
import { Avatar, Create, Wrapper } from "./styles";

const Account: FC<IAccountProps> = ({ isOpen, onClose }) => {
  const { push } = useRouter();
  const user = useUserStore((state) => state.user);
  const isAuth = useUserStore((state) => state.isAuth);

  const onRedirect = () => {
    onClose?.();
    push(LINK_TEMPLATES.PROFILE(user?.username || ""));
  };

  return (
    <Wrapper isOpen={isOpen}>
      {isAuth && (
        <MobileOff>
          <Create onClick={() => push(LINK_TEMPLATES.CREATE_SPACE())}>
            <PlusIcon />
          </Create>
        </MobileOff>
      )}
      <MobileOn>
        <Create onClick={onRedirect}>{user?.username}</Create>
      </MobileOn>
      <Avatar onClick={onRedirect}>
        {user?.avatar ? (
          <img src={user.avatar} />
        ) : (
          <span>{user?.username?.slice(0, 2)}</span>
        )}
      </Avatar>
    </Wrapper>
  );
};

export default Account;
