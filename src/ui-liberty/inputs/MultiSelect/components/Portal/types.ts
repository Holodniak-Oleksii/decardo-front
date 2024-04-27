import { IOption } from "@/ui-liberty/inputs/types";
import { ICustomOptionComponent } from "../../types";

export interface IEvent<T> {
  tags: IOption<T>[];
  onAdd: (id: IOption<T>) => void;
  onRemove: (id: number | string) => void;
}

export interface IPortalProps<T> extends IEvent<T> {
  options: IOption<T>[];
  isOpen: boolean;
  CustomOption?: ICustomOptionComponent<T>;
}
