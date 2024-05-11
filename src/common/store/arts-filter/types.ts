export interface IArtsFilter {
  query: string;
  page: number;
  limit: number;
  tags: string[];
}

export interface IArtsFilterResponse extends Omit<IArtsFilter, "tags"> {
  tags: string;
}

export interface IInitialArtsFilterStoreProps {
  filter: IArtsFilter;
  isInit: boolean;
}
export interface IInitialSyncArtsFilterStoreProps {
  filter: IArtsFilterResponse;
}

export interface IArtsFilterStoreProps extends IInitialArtsFilterStoreProps {
  onChangeFilterFieldHandler: <K extends keyof IArtsFilter>(
    value: IArtsFilter[K],
    name: K
  ) => void;
}
