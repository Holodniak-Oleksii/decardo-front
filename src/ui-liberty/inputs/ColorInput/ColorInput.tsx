import { useOnClickOutside } from "@/common/hooks";
import { FC, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Color, Input, Picker, Wrapper } from "./styles";
import { IColorInputProps } from "./types";

const ColorInput: FC<IColorInputProps> = ({ onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const refWrapper = useRef<HTMLDivElement>(null);

  useOnClickOutside(refWrapper, () => setIsOpen(false));

  return (
    <Wrapper ref={refWrapper}>
      <Picker>
        <Color
          hex={value}
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        />
        {isOpen && <HexColorPicker color={value} onChange={onChange} />}
      </Picker>
      <Input value={value} onChange={(e) => onChange(e.target.value)} />
    </Wrapper>
  );
};

export default ColorInput;
