import imageSearch from "@/assets/icons/search.svg";
import { IOption, TSelectOptionGenericType } from "@/ui-liberty/inputs/types";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Option } from "./components";
import { List, NotFound, Search, SearchWrapper, Wrapper } from "./styles";
import { IPortalProps } from "./types";

const Portal = <T extends TSelectOptionGenericType>(props: IPortalProps<T>) => {
  const { options, isOpen, onAdd, onRemove, tags, CustomOption } = props;
  const [filteredOptions, setFilteredOptions] = useState<IOption<T>[]>(options);
  const refInput = useRef<HTMLInputElement>(null);

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      const result = options.filter((option) =>
        option.label.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())
      );
      setFilteredOptions(result);
    } else {
      setFilteredOptions(options);
    }
  };

  useEffect(() => {
    if (isOpen && refInput?.current) {
      refInput.current.focus();
    }
  }, [isOpen, refInput.current]);

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  const renderOptions = () => {
    return filteredOptions.map((option) => (
      <Option<T>
        key={option.id}
        item={option}
        onAdd={onAdd}
        onRemove={onRemove}
        tags={tags}
        CustomOption={CustomOption}
      />
    ));
  };

  return (
    <Wrapper isOpen={isOpen}>
      <SearchWrapper>
        <Search
          placeholder={"Search"}
          onChange={handlerChange}
          ref={refInput}
        />
        <Image src={imageSearch} alt={"search"} />
      </SearchWrapper>
      <List>
        {!!filteredOptions.length ? (
          renderOptions()
        ) : (
          <NotFound>No data found</NotFound>
        )}
      </List>
    </Wrapper>
  );
};

export default Portal;
