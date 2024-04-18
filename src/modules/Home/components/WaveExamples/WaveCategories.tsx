import { useOnClickOutside } from "@/common/hooks";
import { Button } from "@/ui-liberty/buttons";
import { useRef, useState } from "react";
import { waveData } from "./data";
import {
  BlurBlock,
  Container,
  Item,
  Items,
  Title,
  Wrap,
  Wrapper,
} from "./styles";

const WaveExamples = () => {
  const [active, setActive] = useState<number | null>(null);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setActive(null));

  const renderWave = () => {
    return waveData.map((item) => (
      <Item
        key={item.id}
        preview={item.image}
        isActive={item.id === active}
        className="item"
        onClick={() => setActive(item.id)}
      >
        <BlurBlock className="categories">
          <Button>Watch more</Button>
        </BlurBlock>
      </Item>
    ));
  };

  return (
    <Wrapper>
      <Wrap>
        <Title>See the world inside</Title>
        <Container>
          <Items ref={ref}>{renderWave()}</Items>
        </Container>
      </Wrap>
    </Wrapper>
  );
};

export default WaveExamples;
