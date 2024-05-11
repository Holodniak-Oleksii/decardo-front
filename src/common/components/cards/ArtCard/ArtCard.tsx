import imagePlug from "@/assets/images/empty.png";
import { LINK_TEMPLATES } from "@/common/constants";
import { useRouter } from "next/router";
import { FC } from "react";
import {
  Container,
  Description,
  Glossiness,
  Information,
  Preview,
  TagList,
  Tags,
  Title,
  Wrapper,
} from "./styles";
import { IArtCardProps } from "./types";

const ArtCard: FC<IArtCardProps> = (props) => {
  const {
    description,
    id,
    model: modelArt,
    title: name,
    owner,
    preview,
    tags,
  } = props.art;
  const { push } = useRouter();

  const renderTags = () => {
    return tags.map((tag, id) => <Tags key={id}>{tag}</Tags>);
  };

  return (
    <Wrapper onClick={() => push(LINK_TEMPLATES.SPACE_DETAILS(id))}>
      <Container>
        <Glossiness>
          <Preview
            src={imagePlug.src}
            alt="preview"
            className="preview"
            width={400}
            height={300}
            onError={(e) => {
              e.currentTarget.src = imagePlug.src;
            }}
          />
        </Glossiness>
        <Information>
          <Title>{name}</Title>
          <Description>{description}</Description>
          <TagList>{renderTags()}</TagList>
        </Information>
      </Container>
    </Wrapper>
  );
};

export default ArtCard;
