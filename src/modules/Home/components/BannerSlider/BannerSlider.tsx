import { MobileOff, MobileOn } from "@/utils";
import { useState } from "react";
import { pathSvg, sliderContent } from "./data";
import {
  Background,
  Circle,
  Container,
  CoverSvg,
  HexagonSlider,
  HexagonSvg,
  ItemDescription,
  ItemTitle,
  List,
  NavItem,
  NavLine,
  Pagination,
  Sector,
  SectorContent,
  SectorRelative,
  SectorSlider,
  StarBlok,
  StarRelative,
  Title,
  Wrapper,
} from "./styles";

const BannerSlider = () => {
  const ANGELS = 6;
  const [activeIndex, setActiveIndex] = useState(1);

  const renderSectors = () => {
    return sliderContent.map((slide, index) => {
      const currentElIndex = index + 1;
      const isActive =
        activeIndex === ANGELS
          ? activeIndex === currentElIndex
          : ANGELS - index - 1 === activeIndex;
      return (
        <Sector key={currentElIndex} index={currentElIndex} isActive={isActive}>
          <SectorRelative>
            <SectorContent index={currentElIndex} position={activeIndex}>
              <ItemTitle>{slide.title}</ItemTitle>
              <ItemDescription>{slide.description}</ItemDescription>
            </SectorContent>
          </SectorRelative>
        </Sector>
      );
    });
  };

  const renderMobileSelector = () => {
    return sliderContent.map((slide, index) => (
      <SectorContent key={index} isActive={index + 1 === activeIndex}>
        <ItemTitle>{slide.title}</ItemTitle>
        <ItemDescription>{slide.description}</ItemDescription>
      </SectorContent>
    ));
  };

  const renderPagination = () => {
    return [...Array(ANGELS)].map((_, index) => {
      const currentElIndex = index + 1;
      const isActive = currentElIndex === activeIndex;
      return (
        <>
          <NavItem
            isActive={isActive}
            key={currentElIndex}
            onClick={() => setActiveIndex(currentElIndex)}
          >
            {currentElIndex}
          </NavItem>
          {currentElIndex !== ANGELS && <NavLine isActive={isActive} />}
        </>
      );
    });
  };

  const renderBackgrounds = () => {
    return sliderContent.map((el, index) => (
      <Background
        isActive={index + 1 === activeIndex}
        src={el.image}
        alt={el.title}
        key={index}
      />
    ));
  };

  return (
    <Container>
      {renderBackgrounds()}
      <Wrapper>
        <MobileOff>
          <HexagonSlider>
            <Circle position={activeIndex}>
              <CoverSvg>
                <HexagonSvg viewBox="0 0 24 24" fill="none">
                  <path d={pathSvg} />
                </HexagonSvg>
              </CoverSvg>
              <List>
                <SectorSlider>
                  <StarBlok>
                    <StarRelative>{renderSectors()}</StarRelative>
                  </StarBlok>
                </SectorSlider>
              </List>
            </Circle>

            <Title position={activeIndex}>DECARDO</Title>
          </HexagonSlider>
        </MobileOff>
        <MobileOn>{renderMobileSelector()}</MobileOn>
        <Pagination>{renderPagination()}</Pagination>
      </Wrapper>
    </Container>
  );
};

export default BannerSlider;
