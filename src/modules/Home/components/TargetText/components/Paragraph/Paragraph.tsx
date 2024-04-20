import { FC } from "react";
import { ITextProps } from "../../types";
import { List, Tag, Text, Title, Wrapper } from "./styles";

const Paragraph: FC<ITextProps> = ({ description, tags, title }) => {
  const renderTags = () => {
    return tags.map((tag, id) => <Tag key={id}>{tag}</Tag>);
  };

  return (
    <Wrapper>
      <List>{renderTags()}</List>
      <Title>{title}</Title>
      <Text>{description}</Text>
    </Wrapper>
  );
};

export default Paragraph;
