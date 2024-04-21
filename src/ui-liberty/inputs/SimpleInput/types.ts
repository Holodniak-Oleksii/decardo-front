import React from "react";
import { IBaseInputProps } from "../types";

export interface ISimpleInputProps extends IBaseInputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (value: string) => void;
  onClick?: () => void;
  id?: string;
}

export interface ISimpleInputComponentProps extends ISimpleInputProps {
  isError: boolean;
}
