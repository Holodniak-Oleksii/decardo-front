import { ArtCard } from "@/common/components/cards";
import { Pagination } from "@/common/shared";
import { artData } from "../Home/components/Grid/mocks";
import { Banner, Filters } from "./components";
import { Container, Content, List, Wrapper } from "./styles";

const Spaces = () => {
  const renderGrid = () => {
    return artData.map((art) => <ArtCard art={art} key={art.id} />);
  };
  return (
    <Wrapper>
      <Container>
        <Content>
          <Banner />
          <Filters />
          <List>{renderGrid()}</List>
          <Pagination
            currentPage={1}
            onPageChange={(page) => {}}
            pageSize={10}
            totalCount={40}
          />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Spaces;
