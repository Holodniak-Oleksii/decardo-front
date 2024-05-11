import { LINK_TEMPLATES } from "@/common/constants";
import { PlusIcon } from "@/common/icons";
import { useRouter } from "next/router";
import { Avatar, Create, Wrapper } from "./styles";

const Account = () => {
  const { push } = useRouter();

  return (
    <Wrapper>
      <Create onClick={() => push(LINK_TEMPLATES.CREATE_SPACE())}>
        <PlusIcon />
      </Create>
      <Avatar onClick={() => push(LINK_TEMPLATES.PROFILE("1"))}>
        <span>MU</span>
      </Avatar>
    </Wrapper>
  );
};

export default Account;
