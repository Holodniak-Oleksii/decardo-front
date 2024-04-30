import { ChangeEvent } from "react";

export interface INavigationsProps {
  handlerTakePhoto: () => void;
  disabled: boolean;
  handlerChangeFile: (e: ChangeEvent<HTMLInputElement>) => void;
}
