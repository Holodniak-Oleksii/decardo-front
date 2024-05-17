import Image from "next/image";
import React, { useState } from "react";
import { ICardProps } from "../../types";
import {
  Background,
  Character,
  Container,
  Content,
  Title,
  Wrapper,
} from "./styles";

const Card: React.FC<ICardProps> = ({
  characterImage,
  coverImage,
  titleImage,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Container isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
        <Content className="wrapper">
          <Background src={coverImage} alt="" />
        </Content>
        <Title className="title">
          <Image alt="" src={titleImage} />
        </Title>
        <Character src={characterImage} className="character" alt="" />
      </Container>
    </Wrapper>
  );
};

export default Card;
