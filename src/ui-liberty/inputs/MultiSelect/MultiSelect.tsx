import { useEffect, useRef, useState } from "react";

import { renderInputError } from "@/common/helpers/renderInputError";
import { useOnClickOutside } from "@/common/hooks";
import { IOption, TSelectOptionGenericType } from "../types";
import { Input, Portal } from "./components";
import { convertToOptions } from "./components/Portal/helpers";
import { Label, Message, Wrapper } from "./styles";
import { IMultiSelectProps } from "./types";

const MultiSelect = <T extends TSelectOptionGenericType>(
  props: IMultiSelectProps<T>
) => {
  const {
    label,
    options,
    onChange,
    isClear,
    error,
    placeholder,
    registerOptions,
    components,
    selected,
    unErrored,
  } = props;

  const [selectedTags, setSelectedTags] = useState<IOption<T>[]>(
    convertToOptions<T>(options, selected)
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const refWrapper = useRef<HTMLDivElement>(null);

  useOnClickOutside(refWrapper, () => setIsOpen(false));

  const handlerAdd = (item: IOption<T>) => {
    if (!selectedTags.includes(item)) {
      setSelectedTags((prev) => [...prev, item]);
    }
  };

  const handlerRemove = (id: string | number) => {
    const index = selectedTags.findIndex((option) => option.id === id);
    if (index !== -1) {
      const newOptions = [...selectedTags];
      newOptions.splice(index, 1);
      setSelectedTags(newOptions);
    }
  };

  const handlerClearAll = () => {
    setSelectedTags([]);
  };

  useEffect(() => {
    if (typeof onChange === "function") {
      const values = selectedTags.map((item) => item.value);
      onChange(values);
    }
  }, [selectedTags]);

  useEffect(() => {
    if (isClear) {
      handlerClearAll();
    }
  }, [isClear]);

  return (
    <Wrapper ref={refWrapper} unErrored={!!unErrored} className="form_item">
      {label && <Label>{label}</Label>}
      <input {...registerOptions} hidden />
      <Input<T>
        options={selectedTags}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        numbers={selectedTags.length || 0}
        onClean={handlerClearAll}
        onRemove={handlerRemove}
        placeholder={placeholder}
        error={error}
        CustomTag={components?.Tag}
      />
      <Portal<T>
        options={options}
        tags={selectedTags}
        isOpen={isOpen}
        onAdd={handlerAdd}
        CustomOption={components?.Option}
        onRemove={handlerRemove}
        unErrored={unErrored}
      />
      {error && <Message>{renderInputError(error)}</Message>}
    </Wrapper>
  );
};

export default MultiSelect;
