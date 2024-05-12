import { useOnClickOutside } from "@/common/hooks";
import { Button } from "@/ui-liberty/buttons";
import { MobileOff, MobileOn } from "@/utils";
import { useEffect, useRef, useState } from "react";
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
  const activeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setActive(null));

  useEffect(() => {
    activeRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [active]);

  const renderWave = () => {
    return waveData.map((item) => (
      <Item
        key={item.id}
        preview={item.image}
        isActive={item.id === active}
        ref={item.id === active ? activeRef : null}
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
        <Container ref={containerRef}>
          <MobileOff>
            <Items ref={ref}>{renderWave()}</Items>
          </MobileOff>
          <MobileOn>{renderWave()}</MobileOn>
        </Container>
      </Wrap>
    </Wrapper>
  );
};

export default WaveExamples;
