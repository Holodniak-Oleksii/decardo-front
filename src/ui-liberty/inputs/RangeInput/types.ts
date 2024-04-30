export interface IRangeProps {
  range: number;
  step: number;
  min: number;
  max: number;
}

export interface IRangeInputProps extends Omit<IRangeProps, "range"> {
  value: number;
  onChange?: (value: number) => void;
}

export type IInterval = NodeJS.Timeout | null;
