import { ArtCard } from "@/common/components/cards";
import { LINK_TEMPLATES } from "@/common/constants";
import { useDebounce } from "@/common/hooks";
import { Pagination } from "@/common/shared";
import { useArtsFilterStore } from "@/common/store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { artData } from "../Home/components/Grid/mocks";
import { Banner, Filters } from "./components";
import { Container, Content, List, Wrapper } from "./styles";

const Spaces = () => {
  const { push } = useRouter();

  const filters = useArtsFilterStore((state) => state.filter);
  const isInit = useArtsFilterStore((state) => state.isInit);

  const debouncePage = useDebounce(filters.page, !isInit, 1000);
  const debounceQuery = useDebounce(filters.query, !isInit, 1000);
  const debounceTags = useDebounce(filters.tags, !isInit, 1000);

  const onChangeFilterFieldHandler = useArtsFilterStore(
    (state) => state.onChangeFilterFieldHandler
  );

  const renderGrid = () => {
    return artData.map((art) => <ArtCard art={art} key={art.id} />);
  };

  const redirectQuery = async () => {
    await push(LINK_TEMPLATES.SPACES(filters), undefined, {
      scroll: false,
    });
  };

  useEffect(() => {
    if (isInit) {
      redirectQuery();
    }
  }, [debouncePage, debounceQuery, debounceTags.length]);

  return (
    <Wrapper>
      <Container>
        <Content>
          <Banner />
          <Filters />
          <List>{renderGrid()}</List>
          <Pagination
            currentPage={filters.page}
            onPageChange={(page) => {
              onChangeFilterFieldHandler(page, "page");
            }}
            pageSize={filters.limit}
            totalCount={40}
          />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Spaces;
