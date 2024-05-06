import { ICustomOptionComponent } from "@/ui-liberty/inputs/MultiSelect/types";
import { IOption } from "@/ui-liberty/inputs/types";
import { IEvent } from "../../types";

export interface IOptionProps<T> extends IEvent<T> {
  item: IOption<T>;
  CustomOption?: ICustomOptionComponent<T>;
}
