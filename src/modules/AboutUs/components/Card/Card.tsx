import Image from "next/image";
import React from "react";
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
}) => (
  <Wrapper>
    <Container>
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

export default Card;
