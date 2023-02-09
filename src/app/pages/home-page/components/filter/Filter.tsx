import { ComponentPropsWithoutRef, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

type FilterProps = ComponentPropsWithoutRef<"li">;

function Filter({ ...rest }: FilterProps) {
  const [selectToggle, setSelectToggle] = useState<boolean>(false);

  const filterOptions = ["Africa", "America", "Asia", "Europe", "Oceania"];

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
          <span className="tracking-wider">Filter by Region</span>
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
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {filterOptions.map((option: string) => (
              <li key={option} {...rest} className="block px-5 pt-2 last:pb-2">
                <p className="w-full cursor-pointer hover:text-white">
                  {option}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </OutsideClickHandler>
    </div>
  );
}

export default Filter;
