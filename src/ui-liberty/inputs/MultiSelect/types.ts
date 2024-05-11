import { IActiveble } from "@/common/types/general";
import { UseFormRegisterReturn } from "react-hook-form";
import { IBaseSelectProps, IOption } from "../types";
export interface IErrored {
  unErrored?: boolean;
}
export interface IWrapperProps {
  isLabeled: boolean;
}
export interface ICustomTagComponentProps<T> {
  item: IOption<T>;
  onClick: () => void;
}

export type ICustomTagComponent<T> = (
  props: ICustomTagComponentProps<T>
) => JSX.Element;

// Options
export interface ICustomOptionComponentProps<T>
  extends IActiveble,
    ICustomTagComponentProps<T> {}

export type ICustomOptionComponent<T> = (
  props: ICustomOptionComponentProps<T>
) => JSX.Element;

export interface IMultiSelectProps<T>
  extends Omit<IBaseSelectProps, "value" | "onChange" | "options">,
    IErrored {
  value?: T;
  onChange?: (value: T[]) => void;
  isClear?: boolean;
  registerOptions?: UseFormRegisterReturn<string>;
  options: IOption<T>[];
  selected?: T[];
  components?: {
    Tag?: ICustomTagComponent<T>;
    Option?: ICustomOptionComponent<T>;
  };
}
