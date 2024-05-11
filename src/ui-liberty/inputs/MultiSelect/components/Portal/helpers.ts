import { IOption, TSelectOptionGenericType } from "@/ui-liberty/inputs/types";

export const convertToOptions = <T extends TSelectOptionGenericType>(
  initialArray: IOption<T>[],
  selectedItems?: T[]
): IOption<T>[] => {
  if (!selectedItems) {
    return [];
  }
  const result: IOption<T>[] = [];
  selectedItems.forEach((value) => {
    const option = initialArray.find((el) => el.value === value);
    if (option) {
      result.push(option);
    }
  });
  return result;
};
