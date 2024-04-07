export type CountryData = {
  code: string;
  name: string;
};

export type CurrencyData = string;

export type LanguageData = string;

export type SelectorState = CountryData | CurrencyData | LanguageData;

export type SelectorData = {
  country: CountryData;
  currency: CurrencyData;
  language: LanguageData;
};

export type ReducerAction = {
  type: string;
  payload: SelectorData;
};
