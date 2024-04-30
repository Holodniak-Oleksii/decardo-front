import { FC } from "react";
import { Box, Container, Input, Wrapper } from "./styles";
import { IRangeInputProps } from "./types";

const RangeInput: FC<IRangeInputProps> = (props) => {
  const { value, max = 100, min = 0, step = 1, onChange } = props;

  return (
    <Wrapper>
      <Box>
        <Container min={min} max={max} step={step} range={value}>
          <Input
            type="range"
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={(e) => {
              if (typeof onChange === "function") {
                onChange(+e.target.value);
              }
            }}
          />
        </Container>
      </Box>
    </Wrapper>
  );
};

export default RangeInput;
