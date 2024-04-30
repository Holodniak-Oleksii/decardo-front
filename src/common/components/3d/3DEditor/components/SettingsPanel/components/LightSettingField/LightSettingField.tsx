import { RangeInput } from "@/ui-liberty/inputs";
import { FC } from "react";
import { Container, Group, Input, Name, Row } from "./styles";
import { ILightSettingFieldProps } from "./types";

const LightSettingField: FC<ILightSettingFieldProps> = (props) => {
  const {
    label,
    value = 0,
    onChange = () => {},
    title,
    children,
    childrenLabel,
    isOnlyOverlay,
  } = props;

  if (isOnlyOverlay) {
    return (
      <Container>
        <Row>
          <Name>{title}</Name>
          {children}
        </Row>
      </Container>
    );
  }
  return (
    <Container>
      <Name>{title}</Name>
      <Group>
        <Row>
          <Name>{label}</Name>
          <RangeInput
            min={0}
            max={100}
            step={0.1}
            value={value}
            onChange={onChange}
          />
          <Input
            min={0}
            max={100}
            type="number"
            value={String(value)}
            onChange={(value) => onChange(+value.target.value)}
          />
        </Row>
        {!!children && (
          <Row>
            <Name>{childrenLabel}</Name>
            {children}
          </Row>
        )}
      </Group>
    </Container>
  );
};

export default LightSettingField;
