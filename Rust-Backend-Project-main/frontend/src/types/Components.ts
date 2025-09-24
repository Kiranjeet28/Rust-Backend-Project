export interface button {
    text : string;
    disable : boolean;
    onClick :  (event: React.MouseEvent<HTMLButtonElement>) => void;
    className : string;
}
export interface FetchResult<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export interface DataType {
    first_name: string
  id: string
  last_name: string
  login: string
  mail: string
  card_items : string[]
  }

export interface UserDataContextValue {
    userData: DataType;
    isLoading: boolean;
    error: any | null;
  }

  export interface apiQuery{
    query: any
    maxnumber: number
    orderBy: string
  }

  export interface CardType {
    img : string
    title : string
    Author : string
}