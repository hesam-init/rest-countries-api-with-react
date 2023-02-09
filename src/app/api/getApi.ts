import { CountriesListResponse } from "@type/restCountryResponse";

import { api } from "./api";

export const getCountryList = async () => {
  const response = await api.get<CountriesListResponse[]>("all");
  return response.data;
};
