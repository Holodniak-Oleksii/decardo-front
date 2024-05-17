import { LINK_TEMPLATES } from "@/common/constants";
import { PlusIcon } from "@/common/icons";
import { Button } from "@/ui-liberty/buttons";
import { useRouter } from "next/router";
import { FC } from "react";
import { Container, Content, Title } from "./styles";
import { INotFoundProps } from "./types";

const NotFound: FC<INotFoundProps> = ({
  title = "Nothing was found for your request, try choosing other data",
  buttonText,
  eventType,
}) => {
  const { push } = useRouter();

  const onActionClick = () => {
    if (eventType === "wishlist") {
      push(LINK_TEMPLATES.SPACES({}));
    }
    if (eventType === "create") {
      push(LINK_TEMPLATES.CREATE_SPACE());
    }
  };

  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        {buttonText && (
          <Button endIcon={<PlusIcon />} size="lg" onClick={onActionClick}>
            {buttonText}
          </Button>
        )}
      </Content>
    </Container>
  );
};

export default NotFound;
