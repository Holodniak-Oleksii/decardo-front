import { ICustomOptionComponent } from "@/ui-library/inputs/MultiSelect/types";
import { IOption } from "@/ui-library/inputs/types";
import { IEvent } from "../../types";

export interface IOptionProps<T> extends IEvent<T> {
  item: IOption<T>;
  CustomOption?: ICustomOptionComponent<T>;
}
