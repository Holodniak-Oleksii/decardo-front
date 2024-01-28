import { useState } from "react";
import { pathSvg } from "./data";
import {
  Circle,
  CoverSvg,
  HexagonSlider,
  HexagonSvg,
  List,
  NavItem,
  Pagination,
  Sector,
  SectorContent,
  SectorRelative,
  SectorSlider,
  StarBlok,
  StarRelative,
  Wrapper,
} from "./styles";

const BannerSlider = () => {
  const ANGELS = 6;
  const [activeIndex, setActiveIndex] = useState(1);

  const renderSectors = () => {
    return [...Array(ANGELS)].map((_, index) => {
      const currentElIndex = index + 1;
      const isActive =
        activeIndex === ANGELS
          ? activeIndex === currentElIndex
          : ANGELS - index - 1 === activeIndex;
      return (
        <Sector key={currentElIndex} index={currentElIndex} isActive={isActive}>
          <SectorRelative>
            <SectorContent index={currentElIndex} position={activeIndex}>
              {currentElIndex}
            </SectorContent>
          </SectorRelative>
        </Sector>
      );
    });
  };

  const renderPagination = () => {
    return [...Array(ANGELS)].map((_, index) => {
      const currentElIndex = index + 1;
      return (
        <NavItem
          isActive={currentElIndex === activeIndex}
          key={currentElIndex}
          onClick={() => setActiveIndex(currentElIndex)}
        >
          {currentElIndex}
        </NavItem>
      );
    });
  };

  return (
    <Wrapper>
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
      </HexagonSlider>
      <Pagination>{renderPagination()}</Pagination>
    </Wrapper>
  );
};

export default BannerSlider;
