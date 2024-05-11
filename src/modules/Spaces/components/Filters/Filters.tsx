import { ART_CATEGORIES } from "@/common/constants";
import { useIsMounted } from "@/common/hooks";
import { SearchIcon } from "@/common/icons";
import { useArtsFilterStore } from "@/common/store";
import { Input, MultiSelect } from "@/ui-liberty/inputs";
import { Wrapper } from "./styles";

const Filters = () => {
  const isMounted = useIsMounted();

  const query = useArtsFilterStore((state) => state.filter.query);
  const isInit = useArtsFilterStore((state) => state.isInit);
  const tags = useArtsFilterStore((state) => state.filter.tags);
  const onChangeFilterFieldHandler = useArtsFilterStore(
    (state) => state.onChangeFilterFieldHandler
  );

  const options = ART_CATEGORIES.map((art, id) => ({
    id,
    label: art,
    value: art,
  }));

  return (
    <Wrapper>
      <Input
        placeholder="Search arts"
        startIcon={<SearchIcon />}
        value={query}
        onChange={(e) => onChangeFilterFieldHandler(e.target.value, "query")}
      />
      {isInit && isMounted() && (
        <MultiSelect<string>
          options={options}
          placeholder="Choose categories"
          selected={tags}
          unErrored
          onChange={(value) => onChangeFilterFieldHandler(value, "tags")}
        />
      )}
    </Wrapper>
  );
};

export default Filters;
