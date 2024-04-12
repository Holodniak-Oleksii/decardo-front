import React, { useEffect } from "react";
import styled from "styled-components";
import { ContainerWrap } from "./styles";

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  .column {
    margin: 0 -0.2vmin;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Hexagon = styled.div`
  --mix-percentage: calc(var(--column) * var(--index) * 3%);
  width: var(--hexagon-size);
  aspect-ratio: 1;
  position: relative;
  background: var(
    --color-surface-container,
    color-mix(
      in srgb,
      var(--color-secondary),
      var(--color-primary) var(--mix-percentage)
    )
  );
  backdrop-filter: blur(1rem);

  clip-path: polygon(
    98.66024% 45%,
    99.39693% 46.5798%,
    99.84808% 48.26352%,
    100% 50%,
    99.84808% 51.73648%,
    99.39693% 53.4202%,
    98.66025% 55%,
    78.66025% 89.64102%,
    77.66044% 91.06889%,
    76.42788% 92.30146%,
    75% 93.30127%,
    73.4202% 94.03794%,
    71.73648% 94.48909%,
    70% 94.64102%,
    30% 94.64102%,
    28.26352% 94.48909%,
    26.5798% 94.03794%,
    25% 93.30127%,
    23.57212% 92.30146%,
    22.33956% 91.06889%,
    21.33975% 89.64102%,
    1.33975% 55%,
    0.60307% 53.4202%,
    0.15192% 51.73648%,
    0% 50%,
    0.15192% 48.26352%,
    0.60307% 46.5798%,
    1.33975% 45%,
    21.33975% 10.35898%,
    22.33956% 8.93111%,
    23.57212% 7.69854%,
    25% 6.69873%,
    26.5798% 5.96206%,
    28.26352% 5.51091%,
    30% 5.35898%,
    70% 5.35898%,
    71.73648% 5.51091%,
    73.4202% 5.96206%,
    75% 6.69873%,
    76.42788% 7.69854%,
    77.66044% 8.93111%,
    78.66025% 10.35898%
  );

  &:after {
    content: var(--icon);
    display: grid;
    place-items: center;
    position: absolute;
    filter: var(--icon-filter);
    font-size: 2.5vmin;
    inset: 0;
  }
`;

const Switch = styled.div`
  --index: 6;
  --column: 2;
  position: absolute;
  display: flex;
  top: 4vmin;
  right: 4vmin;
  width: 8vmin;
  height: 4vmin;
  cursor: pointer;
  font-size: 2vmin;

  &:after {
    --index: 6;
    --column: 4;
    content: "👾";
    position: absolute;
    left: 0;
    top: 0;
    height: 4vmin;
    width: 6vmin;
    transition: transform 0.3s ease;
  }

  &.checked {
    &:after {
      transform: translateX(2vmin);
      content: "🕶️";
    }
  }
`;

const text = `
<div class="container" id="container">
  <div class="column" style="--column: 0">
    <div class="hexagon" style="--index: 1; --icon: '🚀';"></div>
    <div class="hexagon" style="--index: 2; --icon: '🎸';"></div>
    <div class="hexagon" style="--index: 3; --icon: '🤖';"></div>
    <div class="hexagon" style="--index: 4; --icon: '🫶';"></div>
    <div class="hexagon" style="--index: 5; --icon: '🔥';"></div>
  </div>
  <div class="column" style="--column: 1">
    <div class="hexagon" style="--index: 1; --icon: '🕹️';"></div>
    <div class="hexagon" style="--index: 2; --icon: '👾';"></div>
    <div class="hexagon" style="--index: 3; --icon: '✨';"></div>
    <div class="hexagon" style="--index: 4; --icon: '🌴';"></div>
    <div class="hexagon" style="--index: 5; --icon: '🖥️';"></div>
    <div class="hexagon" style="--index: 6; --icon: '💻';"></div>
  </div>
  <div class="column" style="--column: 2">
    <div class="hexagon" style="--index: 1; --icon: '⌨️';"></div>
    <div class="hexagon" style="--index: 2; --icon: '💡';"></div>
    <div class="hexagon" style="--index: 3; --icon: '🕶️';"></div>
    <div class="hexagon" style="--index: 4; --icon: '⚙️';"></div>
    <div class="hexagon" style="--index: 5; --icon: '🍒';"></div>
    <div class="hexagon" style="--index: 6; --icon: '🧙‍♂️';"></div>
    <div class="hexagon" style="--index: 7; --icon: '🎮';"></div>
  </div>
  <div class="column" style="--column: 3">
    <div class="hexagon" style="--index: 1; --icon: '👽';"></div>
    <div class="hexagon" style="--index: 2; --icon: '🌌';"></div>
    <div class="hexagon" style="--index: 3; --icon: '🎧';"></div>
    <div class="hexagon" style="--index: 4; --icon: '🌒';"></div>
    <div class="hexagon" style="--index: 5; --icon: '🌓';"></div>
    <div class="hexagon" style="--index: 6; --icon: '🌔';"></div>
    <div class="hexagon" style="--index: 7; --icon: '🎵';"></div>
    <div class="hexagon" style="--index: 8; --icon: '🎶';"></div>
  </div>
  <div class="column" style="--column: 4">
    <div class="hexagon" style="--index: 1; --icon: '❤️';"></div>
    <div class="hexagon" style="--index: 2; --icon: '🎙️';"></div>
    <div class="hexagon" style="--index: 3; --icon: '📸';"></div>
    <div class="hexagon" style="--index: 4; --icon: '🕰️';"></div>
    <div class="hexagon" style="--index: 5; --icon: '🚀';"></div>
    <div class="hexagon" style="--index: 6; --icon: '🎸';"></div>
    <div class="hexagon" style="--index: 7; --icon: '🤖';"></div>
    <div class="hexagon" style="--index: 8; --icon: '🫶';"></div>
    <div class="hexagon" style="--index: 9; --icon: '🔥';"></div>
  </div>
  <div class="column" style="--column: 5">
    <div class="hexagon" style="--index: 1; --icon: '🕹️';"></div>
    <div class="hexagon" style="--index: 2; --icon: '👾';"></div>
    <div class="hexagon" style="--index: 3; --icon: '✨';"></div>
    <div class="hexagon" style="--index: 4; --icon: '🌴';"></div>
    <div class="hexagon" style="--index: 5; --icon: '🖥️';"></div>
    <div class="hexagon" style="--index: 6; --icon: '💻';"></div>
    <div class="hexagon" style="--index: 7; --icon: '⌨️';"></div>
    <div class="hexagon" style="--index: 8; --icon: '💡';"></div>
  </div>
  <div class="column" style="--column: 6">
    <div class="hexagon" style="--index: 1; --icon: '🕶️';"></div>
    <div class="hexagon" style="--index: 2; --icon: '⚙️';"></div>
    <div class="hexagon" style="--index: 3; --icon: '🍒';"></div>
    <div class="hexagon" style="--index: 4; --icon: '🦄';"></div>
    <div class="hexagon" style="--index: 5; --icon: '📱';"></div>
    <div class="hexagon" style="--index: 6; --icon: '🖨️';"></div>
    <div class="hexagon" style="--index: 7; --icon: '📡';"></div>
  </div>
  <div class="column" style="--column: 7">
    <div class="hexagon" style="--index: 1; --icon: '🔬';"></div>
    <div class="hexagon" style="--index: 2; --icon: '🔭';"></div>
    <div class="hexagon" style="--index: 3; --icon: '🎚️';"></div>
    <div class="hexagon" style="--index: 4; --icon: '🎛️';"></div>
    <div class="hexagon" style="--index: 5; --icon: '🧬';"></div>
    <div class="hexagon" style="--index: 6; --icon: '🔮';"></div>
  </div>
  <div class="column" style="--column: 8">
    <div class="hexagon" style="--index: 1; --icon: '🧲';"></div>
    <div class="hexagon" style="--index: 2; --icon: '🛸';"></div>
    <div class="hexagon" style="--index: 3; --icon: '🪐';"></div>
    <div class="hexagon" style="--index: 4; --icon: '🌠';"></div>
    <div class="hexagon" style="--index: 5; --icon: '👓';"></div>
  </div>
</div>
<div class="switch" id="switch"></div>`;

const HexagonGallery: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById("container");

    const hexagons = container.querySelectorAll(".hexagon");
    const hexagonElements = new Array(...hexagons);

    const ripple = (target) => {
      if (container.classList.contains("show-ripple")) {
        return;
      }
      const targetRect = target.getBoundingClientRect();
      const data = hexagonElements
        .map((element) => {
          const rect = element.getBoundingClientRect();
          const centerX = rect.x + rect.width / 2;
          const centerY = rect.y + rect.height / 2;
          const distance = Math.round(
            Math.sqrt(
              Math.pow(rect.x - targetRect.x, 2) +
                Math.pow(rect.y - targetRect.y, 2)
            )
          );
          return { element, rect, centerX, centerY, distance };
        })
        .sort((a, b) =>
          a.distance > b.distance ? 1 : a.distance < b.distance ? -1 : 0
        );

      const [max] = data.slice(-1);
      data.forEach((item) =>
        item.element.style.setProperty(
          "--ripple-factor",
          `${(item.distance * 100) / max.distance}`
        )
      );
      container.classList.toggle("show-ripple");
      const cleanUp = () => {
        requestAnimationFrame(() => {
          container.classList.remove("show-ripple");
          data.forEach((item) =>
            item.element.style.removeProperty("--ripple-factor")
          );
          max.element.removeEventListener("animationend", cleanUp);
        });
      };
      max.element.addEventListener("animationend", cleanUp);
    };

    hexagons.forEach((hexagon) => {
      hexagon.addEventListener("click", () => {
        ripple(hexagon, hexagons);
      });
    });

    const switchButton = document.getElementById("switch");
    const toggleTheme = () => {
      switchButton.classList.toggle("checked");
      document.documentElement.classList.toggle("vision-ui");
    };
    switchButton.addEventListener("click", toggleTheme);

    // demo
    setTimeout(() => {
      ripple(hexagonElements[0], hexagons);
      setTimeout(() => {
        toggleTheme();
        setTimeout(() => {
          ripple(hexagonElements[0], hexagons);
        }, 600);
      }, 900);
    }, 300);
  }, []);

  return <ContainerWrap dangerouslySetInnerHTML={{ __html: text }} />;
};

export default HexagonGallery;
