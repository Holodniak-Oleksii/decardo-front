import imageCheck from "@/assets/icons/checked.svg";
import Image from "next/image";
import { forwardRef } from "react";
import { CheckMark, Container, Input, Message, Wrapper } from "./styles";
import { ICheckboxProps } from "./types";

const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>((props, ref) => {
  const { size = "md", error, message, isDisabled = false, ...rest } = props;
  return (
    <Wrapper className="checkbox">
      <Container isDisabled={isDisabled} size={size}>
        <Input
          ref={ref}
          {...rest}
          type={"checkbox"}
          hidden
          error={error}
          readOnly
          aria-invalid={!!error}
        />
        <CheckMark className={"mark"}>
          <Image
            src={imageCheck}
            alt={"checked"}
            width={20}
            height={20}
            sizes={"20px"}
          />
        </CheckMark>
      </Container>
      {message &&
        (typeof message === "string" ? <Message>{message}</Message> : message)}
    </Wrapper>
  );
});

Checkbox.displayName = "Checkbox";
export default Checkbox;
