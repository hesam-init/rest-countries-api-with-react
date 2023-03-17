import { useRef } from "react";

export function useClassExist<T extends HTMLElement>(className: string) {
  const ref = useRef<T>(null);
  // eslint-disable-next-line operator-linebreak
  const isClassExist: boolean = ref.current?.classList.contains(
    className
  ) as boolean;

  return { ref, isClassExist };
}
