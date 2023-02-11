import { getCountryInfo } from "@api/getApi";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

type PageParams = {
  country: string;
  code: string;
};

function InfoPage() {
  const { country, code } = useParams<PageParams>();

  const { data: countryInfo } = useQuery(
    ["country-info", code],
    getCountryInfo
  );

  return (
    <div className="mt-4">
      {country}
      <h1>{countryInfo?.capital}</h1>
      <h1>{countryInfo?.borders.map((item) => item)}</h1>
    </div>
  );
}

export default InfoPage;
