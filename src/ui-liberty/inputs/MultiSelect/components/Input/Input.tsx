import arrowDown from "@/assets/icons/arrow-down.svg";
import { ArrowIconWrapper } from "@/ui-liberty/inputs/Select/styles";
import { TSelectOptionGenericType } from "@/ui-liberty/inputs/types";
import Image from "next/image";
import {
  Close,
  Count,
  Indicator,
  IndicatorImageWrapper,
  Tag,
  Tags,
  Wrapper,
} from "./styles";
import { IInputProps } from "./types";

const Input = <T extends TSelectOptionGenericType>(props: IInputProps<T>) => {
  const {
    options,
    setIsOpen,
    isOpen,
    numbers,
    placeholder,
    onClean,
    onRemove,
    error,
    CustomTag,
  } = props;

  const renderTags = () => {
    return options.map((item) => {
      if (typeof CustomTag === "function") {
        return (
          <CustomTag
            item={item}
            onClick={() => onRemove(item.id)}
            key={item.id}
          />
        );
      }
      return (
        <Tag key={item.id} onClick={(e) => e.stopPropagation()}>
          {item.label}
          <Close type={"button"} onClick={() => onRemove(item.id)} />
        </Tag>
      );
    });
  };

  return (
    <Wrapper onClick={() => setIsOpen((prev) => !prev)} error={error}>
      {!!options.length ? (
        <Tags>{renderTags()}</Tags>
      ) : (
        <span>{placeholder}</span>
      )}
      <Indicator>
        {!!numbers && (
          <Count
            onClick={(e) => {
              e.stopPropagation();
              onClean();
            }}
          >
            {numbers} <Close type={"button"} />
          </Count>
        )}
        <IndicatorImageWrapper isOpen={isOpen}>
          <Image src={arrowDown} alt={"indicator"} />
        </IndicatorImageWrapper>
      </Indicator>
    </Wrapper>
  );
};

export default Input;
