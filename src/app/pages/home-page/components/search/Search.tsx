import Icon from "@assets/icons";
import { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  name: string;
}

function Search({ name, ...rest }: InputProps) {
  return (
    <div className="relative w-full lg:w-1/2">
      <Icon.Search className="absolute top-1/2 left-8 -translate-y-1/2 transform text-white" />
      <input
        className="w-full rounded-lg bg-dark-sec p-4 pl-[4.5rem] shadow-md placeholder:text-white focus:outline-none md:max-w-[30rem]"
        placeholder={name}
        {...rest}
      />
    </div>
  );
}

export default Search;
