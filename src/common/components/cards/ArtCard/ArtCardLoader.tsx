import {
  ContainerLoader,
  DescriptionLoader,
  GlossinessLoader,
  Information,
  TagList,
  TagsLoader,
  TitleLoader,
  Wrapper,
} from "./styles";

const ArtCardLoader = () => {
  const renderTags = () => {
    return [...Array(5)].map((_, id) => <TagsLoader key={id} />);
  };

  return (
    <Wrapper>
      <ContainerLoader>
        <GlossinessLoader />
        <Information>
          <TitleLoader />
          <DescriptionLoader />
          <TagList>{renderTags()}</TagList>
        </Information>
      </ContainerLoader>
    </Wrapper>
  );
};

export default ArtCardLoader;
