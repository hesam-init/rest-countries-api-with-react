/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

interface FilterProps {
  // eslint-disable-next-line no-unused-vars
  onFilter: (option: string) => void;
}

function Filter({ onFilter }: FilterProps) {
  const [selectToggle, setSelectToggle] = useState<boolean>(false);
  const [currentSelect, setCurrentSelect] = useState<string>("");

  const setFilter = (option: string) => {
    if (option === currentSelect) {
      onFilter("");
      setCurrentSelect("");
      setSelectToggle(false);
    } else {
      onFilter(option);
      setCurrentSelect(option);
      setSelectToggle(false);
    }
  };

  const filterOptions = [
    {
      key: "Africa",
      value: "Africa"
    },
    {
      key: "America",
      value: "America"
    },
    {
      key: "Asia",
      value: "Asia"
    },
    {
      key: "Europe",
      value: "Europe"
    },
    {
      key: "Oceania",
      value: "Oceania"
    }
  ];

  return (
    <div className="relative flex w-full justify-start md:justify-end lg:w-1/2">
      <OutsideClickHandler
        onOutsideClick={() => {
          if (selectToggle) {
            setSelectToggle(false);
          }
        }}>
        {/* select button */}
        <button
          onClick={() => {
            if (selectToggle) {
              setSelectToggle(false);
            } else {
              setSelectToggle(true);
            }
          }}
          className="flex w-[12.5rem] items-center justify-between rounded-lg bg-dark-sec p-4 text-center text-sm font-medium text-white shadow-md"
          type="button">
          <span className="tracking-wider">
            {currentSelect === "" ? "Filter by Region" : currentSelect}
          </span>
          <svg
            className="h-4 w-4"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* items list */}
        <div
          className={`${
            !selectToggle && "hidden"
          } absolute top-14 z-10 w-[12.5rem] divide-y divide-gray-100 rounded-lg bg-dark-sec`}>
          <div className="flex flex-col gap-1 py-2 px-2 text-sm text-gray-700 dark:text-gray-200">
            {filterOptions.map((option) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              <div
                onClick={() => {
                  setFilter(option.value);
                }}
                key={option.value}
                className={`${
                  option.value === currentSelect && "!bg-blue-600"
                } block rounded-lg bg-black bg-opacity-25 p-2 py-1 hover:bg-opacity-10`}>
                <p className="w-full cursor-pointer hover:text-white">
                  {option.key}
                </p>
              </div>
            ))}
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
}

export default Filter;
