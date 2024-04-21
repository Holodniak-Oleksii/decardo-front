import React, { forwardRef } from "react";
import { Component, Container, Wrapper } from "./styles";
import { ISimpleInputProps } from "./types";

const SimpleInput = forwardRef<HTMLInputElement, ISimpleInputProps>(
  (props, ref) => {
    const { error = "text", onClick, onSubmit, ...rest } = props;

    const onClickHandler = () => {
      if (typeof onClick === "function") {
        onClick();
      }
    };

    const onKeyEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (typeof onSubmit === "function") {
        if (e.key === "Enter") {
          onSubmit(e.currentTarget.value);
        }
      }
    };

    return (
      <Wrapper>
        <div></div>
        <Container>
          <Component
            {...rest}
            ref={ref}
            type={"text"}
            isError={Boolean(error)}
            aria-invalid={!!error}
            onClick={onClickHandler}
            onKeyUp={onKeyEnterHandler}
          />
        </Container>
      </Wrapper>
    );
  }
);

SimpleInput.displayName = "Input";

export default SimpleInput;
