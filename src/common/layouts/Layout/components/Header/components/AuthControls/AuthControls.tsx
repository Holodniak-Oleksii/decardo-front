import { LINK_TEMPLATES } from "@/common/constants";
import { Button } from "@/ui-liberty/buttons";
import { useRouter } from "next/router";
import { Controls } from "./styles";

const AuthControls = () => {
  const { push } = useRouter();

  return (
    <Controls>
      <Button onClick={() => push(LINK_TEMPLATES.SIGN_IN())}>Sing in</Button>
      <Button variant="outlined" onClick={() => push(LINK_TEMPLATES.SIGN_UP())}>
        Sing up
      </Button>
    </Controls>
  );
};

export default AuthControls;
