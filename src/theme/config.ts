import { themeColors } from "./colors";
import { IConfigProps } from "./types";

export const themeConfig: IConfigProps = {
  colors: themeColors,
  text: {
    overflow: `
      text-overflow: ellipsis;
      overflow: hidden;
      width: 100%;
      white-space: nowrap;
    `,
    getLineClamp: (lines = 4) =>
      `
        display: -webkit-box;
        -webkit-line-clamp: ${lines};
        -webkit-box-orient: vertical;
        overflow: hidden;
      `,
  },
  absoluteCenter: `
    opacity: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  flex: {
    center: `
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    row: `
      display: flex;
      align-items: center;
    `,
    column: `
      display: flex;
      flex-direction: column;
    `,
    between: `
      display: flex;
      align-items: center;
      justify-content: space-between;
    `,
  },
};
