/* eslint-disable indent */

import { getCountryInfo } from "@api/getApi";
import Icon from "@assets/icons";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

import InfoText from "./components/info-text";

type PageParams = {
  country: string;
  code: string;
};

function InfoPage() {
  const navigate = useNavigate();
  const { country, code } = useParams<PageParams>();

  const { data: countryInfo } = useQuery(
    ["country-info", code],
    getCountryInfo
  );

  return (
    <div className="mt-8 mb-9">
      <button
        className="flex w-[8.5rem] items-center justify-center gap-3 rounded-lg bg-dark-sec p-2 shadow-lg"
        type="button"
        onClick={() => navigate(-1)}>
        <Icon.Arrow />
        Back
      </button>
      <div className="relative mt-20 flex flex-row">
        {/* image loading */}
        <div className="h-[25rem] w-[35rem] animate-pulse rounded-xl bg-gray-600 shadow-lg" />

        {/* image */}
        <div
          className="absolute h-[25rem] w-[35rem] rounded-xl shadow-lg"
          style={{
            backgroundImage: `url(${countryInfo?.flags.png})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        />

        {/* informations */}
        <div className="flex-1 pl-36 pt-10">
          {/* title */}
          <h1 className="text-3xl font-bold tracking-wider">
            {`${country?.charAt(0).toUpperCase()}${country?.slice(1)}`}
          </h1>

          {/* additional info */}
          <div className="mt-8 flex">
            <div className="flex flex-1 flex-col gap-2">
              <InfoText
                className="max-w-[9rem] truncate"
                title="Native Name"
                value={countryInfo?.nativeName}
              />
              <InfoText
                className="!tracking-widest"
                title="Population"
                value={countryInfo?.population.toLocaleString("en-US")}
              />
              <InfoText title="Region" value={countryInfo?.region} />
              <InfoText
                className="max-w-[9rem] truncate"
                title="Sub Region"
                value={countryInfo?.subregion}
              />
              <InfoText title="Capital" value={countryInfo?.capital} />
            </div>
            <div className="flex flex-1 flex-col gap-2 pl-16">
              <InfoText
                title="Top Level Domain"
                value={countryInfo?.topLevelDomain}
              />
              <InfoText
                title="Currencies"
                value={countryInfo?.currencies?.[0].code}
              />
              <InfoText
                title="Languages"
                value={countryInfo?.languages.map(
                  (item, idx) =>
                    // eslint-disable-next-line implicit-arrow-linebreak
                    `${(idx ? ", " : "") + item.name}`
                )}
              />
            </div>
          </div>

          {/* borders countries */}
          <div className="mt-[4.8rem] flex">
            <h1>Border Countries:</h1>
            <ul className="flex pl-2">
              {countryInfo?.borders?.length > 0
                ? countryInfo?.borders?.map(
                    (item, idx) =>
                      // eslint-disable-next-line implicit-arrow-linebreak
                      `${(idx ? ", " : "") + item}`
                  )
                : "no data 🤨"}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
