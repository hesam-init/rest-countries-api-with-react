import {
  CountriesListResponse,
  CountryInfoResponse
} from "@type/restCountryResponse";

import { api } from "./api";

export const getCountryList = async () => {
  const response = await api.get<CountriesListResponse[]>("all");
  return response.data;
};

type infoParams = {
  queryKey: Array<unknown>;
};

export const getCountryInfo = async ({ queryKey }: infoParams) => {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [_, code] = queryKey;
  const response = await api.get<CountryInfoResponse>(`alpha/${code}`);
  return response.data;
};
