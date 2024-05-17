import { LINK_TEMPLATES } from "@/common/constants";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { categories } from "./data";
import {
  Body,
  CardBackground,
  Container,
  Content,
  DoubleHexagon,
  Hexagon,
  Relative,
  Title,
  Wrapper,
} from "./styles";

const HexagonCategories = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(0);
  const { push } = useRouter();

  const handlerWatchMore = async (tag: string) => {
    await push(LINK_TEMPLATES.SPACES({ tags: [tag] }));
  };

  const renderHexagons = () => {
    return categories.map((data) => (
      <Hexagon key={data.id} onClick={() => handlerWatchMore(data.title)}>
        <DoubleHexagon>
          <Relative>
            <DoubleHexagon>
              <Relative>
                <CardBackground src={data.image} alt={data.title} />
                <Title className="title">{data.title}</Title>
              </Relative>
            </DoubleHexagon>
          </Relative>
        </DoubleHexagon>
      </Hexagon>
    ));
  };

  useEffect(() => {
    if (ref.current) {
      const getBoundsContainer = () => {
        const width = ref.current?.offsetWidth;
        if (!!width) {
          setSize(width);
        }
      };

      getBoundsContainer();
      window.addEventListener("resize", getBoundsContainer);
      return () => {
        window.removeEventListener("resize", getBoundsContainer);
      };
    }
  }, [ref.current]);

  return (
    <Wrapper>
      <Container>
        <Content size={size - 1}>
          <Body ref={ref}>{renderHexagons()}</Body>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default HexagonCategories;
