import { ComponentPropsWithoutRef } from "react";

type SvgProps = ComponentPropsWithoutRef<"svg">;

export function Search({ ...rest }: SvgProps) {
  return (
    <svg
      {...rest}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`${rest.className} h-5 w-5`}>
      <path
        fillRule="evenodd"
        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Moon({ ...rest }: SvgProps) {
  return (
    <svg
      {...rest}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`${rest.className} h-5 w-5`}>
      <path
        fillRule="evenodd"
        d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Arrow({ ...rest }: SvgProps) {
  return (
    <svg
      {...rest}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${rest.className} h-5 w-5`}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
      />
    </svg>
  );
}
