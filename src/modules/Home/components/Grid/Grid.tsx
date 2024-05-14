import { queryClient } from "@/common/api";
import { ArtCard } from "@/common/components/cards";
import { QueryKey } from "@/common/enums";
import { IArtResponseModel } from "@/common/types";
import { List, Wrapper } from "./styles";

const Grid = () => {
  let artData = queryClient.getQueryData<IArtResponseModel[]>([
    QueryKey.ART_HOME,
  ]);

  const renderGrid = () => {
    return artData?.map((art) => <ArtCard art={art} key={art.id} />);
  };
  return (
    <Wrapper>
      <List>{renderGrid()}</List>
    </Wrapper>
  );
};

export default Grid;
