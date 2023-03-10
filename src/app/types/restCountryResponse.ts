export interface CountriesListResponse {
  name: string;
  alpha2Code: string;
  capital: string;
  region: string;
  population: number;
  nativeName: string;
  flags: {
    svg: string;
    png: string;
  };
}

export interface CountryInfoResponse extends CountriesListResponse {
  topLevelDomain: string[];
  subregion: string;
  currencies: Array<{
    code: string;
    name: string;
    symbol: string;
  }>;
  borders: string[];
  languages: Array<{
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }>;
}
