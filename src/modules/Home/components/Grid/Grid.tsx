import { ArtCard } from "@/common/components/cards";
import { artData } from "./mocks";
import { List, Wrapper } from "./styles";

const Grid = () => {
  const renderGrid = () => {
    return artData.map((art) => <ArtCard art={art} key={art.id} />);
  };
  return (
    <Wrapper>
      <List>{renderGrid()}</List>
    </Wrapper>
  );
};

export default Grid;
