import animationData from "@/assets/animation/notfound.json";
import { LINK_TEMPLATES } from "@/common/constants";
import { Button } from "@/ui-liberty/buttons";
import Lottie from "lottie-react";
import { useRouter } from "next/router";
import { ActionContainer, Container, Content } from "./styles";

const Error = () => {
  const { push } = useRouter();
  return (
    <Container>
      <Content>
        <ActionContainer>
          <Lottie animationData={animationData} width={100} />
          <Button size="lg" onClick={() => push(LINK_TEMPLATES.HOME())}>
            Go Home
          </Button>
        </ActionContainer>
      </Content>
    </Container>
  );
};

export default Error;
