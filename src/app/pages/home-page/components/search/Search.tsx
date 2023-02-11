import Icon from "@assets/icons";
import { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  name: string;
  isLoading: boolean;
}

function Search({ name, isLoading, ...rest }: InputProps) {
  return (
    <div className={`${isLoading && "opacity-95"} relative w-full lg:w-1/2`}>
      <Icon.Search className="absolute top-1/2 left-8 -translate-y-1/2 transform text-white" />
      <input
        disabled={isLoading}
        className={`${
          // eslint-disable-next-line operator-linebreak
          isLoading &&
          "cursor-not-allowed !text-gray-500 placeholder:!text-gray-500"
        } w-full rounded-lg bg-dark-sec p-4 pl-[4.5rem] text-white shadow-md placeholder:text-white focus:outline-none md:max-w-[30rem]`}
        placeholder={name}
        {...rest}
      />
    </div>
  );
}

export default Search;
