import { LINK_TEMPLATES } from "@/common/constants";
import { Button } from "@/ui-liberty/buttons";
import { useRouter } from "next/router";
import { FC } from "react";
import { IAccountProps } from "../../types";
import { Controls } from "./styles";

const AuthControls: FC<IAccountProps> = ({ onClose }) => {
  const { push } = useRouter();

  const onRedirect = (path: string) => {
    onClose?.();
    push(path);
  };

  return (
    <Controls>
      <Button onClick={() => onRedirect(LINK_TEMPLATES.SIGN_IN())}>
        Sing in
      </Button>
      <Button
        variant="outlined"
        onClick={() => onRedirect(LINK_TEMPLATES.SIGN_UP())}
      >
        Sing up
      </Button>
    </Controls>
  );
};

export default AuthControls;
