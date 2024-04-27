import { IOption } from "../types";

interface IRedoArrayInOptions<T> {
  array: T[];
  valueFieldName: keyof T;
  labelFieldName: keyof T;
  idFieldName: keyof T;
}

type TRedoArrayInOptions = <T extends { [K in keyof T]: any }>(
  params: IRedoArrayInOptions<T>
) => IOption[];

export const redoArrayInOptions: TRedoArrayInOptions = ({
  array,
  idFieldName,
  labelFieldName,
  valueFieldName,
}) => {
  if (!array.length) {
    return [];
  }
  const result: IOption[] = [];

  array.forEach((value) => {
    result.push({
      id: value[idFieldName],
      label: value[labelFieldName],
      value: value[valueFieldName],
    });
  });

  return result;
};
