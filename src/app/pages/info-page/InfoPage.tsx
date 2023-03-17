/* eslint-disable indent */

import { getCountryInfo } from "@api/getApi";
import Icon from "@assets/icons";
import { useQuery } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import InfoText from "./components/info-text";

type PageParams = {
  country: string;
  code: string;
};

function InfoPage() {
  const navigate = useNavigate();
  const { state: prevPage } = useLocation();
  const { country, code } = useParams<PageParams>();

  const { data: countryInfo } = useQuery(
    ["country-info", code],
    getCountryInfo
  );

  return (
    <div className="mb-9 mt-5 p-3 md:p-0 xxl:mt-8">
      <button
        className="flex w-[8.5rem] items-center justify-center gap-3 rounded-lg bg-dark-sec p-2 shadow-lg"
        type="button"
        onClick={() => {
          if (prevPage?.isNewTab) {
            navigate(-1);
          } else {
            navigate("/");
          }
        }}>
        <Icon.Arrow />
        Back
      </button>
      <div className="mt-14 flex flex-col lg:flex-row xxl:mt-20">
        {/* country image */}
        <div className="relative flex w-full items-center justify-center overflow-hidden lg:w-1/2 xxl:justify-end">
          {/* image loading */}
          <div className="absolute -z-10 h-[18rem] w-full animate-pulse rounded-xl bg-gray-600 shadow-lg lg:h-[25rem] lg:w-[35rem]" />

          {/* image */}
          <div
            className="h-[18rem] w-full rounded-xl shadow-lg lg:h-[25rem] lg:w-[35rem]"
            style={{
              backgroundImage: `url(${countryInfo?.flags.png})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          />
        </div>

        {/* informations */}
        <div className="mt-10 flex w-full flex-col overflow-hidden pt-9 md:pl-12 lg:mt-0 lg:w-1/2 xl:pl-36 xxl:items-start xxl:pl-16 xxl:pt-10">
          {/* title */}
          <h1 className="truncate text-3xl font-bold tracking-wider">
            {`${country?.charAt(0).toUpperCase()}${country?.slice(1)}`}
          </h1>

          {/* additional info */}
          <div className="mt-8 flex flex-col lg:flex-row">
            <div className="flex flex-1 flex-col gap-2">
              <InfoText
                className="max-w-[5rem] truncate"
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
                className="max-w-[5rem] truncate"
                title="Sub Region"
                value={countryInfo?.subregion}
              />
              <InfoText title="Capital" value={countryInfo?.capital} />
            </div>
            <div className="mt-9 flex flex-1 flex-col gap-2 lg:mt-0 lg:pl-16 xxl:pl-36">
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
