import { ReactNode } from "react";

export interface IDragAndDropProps {
  onChange: (file: File) => void;
  defaultValue?: string;
  EmptyState?: ReactNode;
}
