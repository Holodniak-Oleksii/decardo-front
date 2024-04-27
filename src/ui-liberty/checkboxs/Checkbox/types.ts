import React, { HTMLAttributes, ReactNode } from "react";
import { FieldError } from "react-hook-form";

export type TSizeBox = "md" | "sm";

export interface ISizeProps {
  size?: TSizeBox;
}

export interface IContainerProps extends ISizeProps {
  isDisabled: boolean;
}

export interface ICheckboxProps
  extends HTMLAttributes<HTMLInputElement>,
    ISizeProps {
  name?: string;
  message?: string | ReactNode;
  error?: FieldError;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
}
