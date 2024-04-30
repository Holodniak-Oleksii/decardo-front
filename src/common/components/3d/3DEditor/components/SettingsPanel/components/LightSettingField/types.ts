import { PropsWithChildren } from "react";

export interface ILightSettingFieldProps extends PropsWithChildren {
  label?: string;
  title: string;
  childrenLabel?: string;
  value?: number;
  onChange?: (value: number) => void;
  isOnlyOverlay?: boolean;
}
