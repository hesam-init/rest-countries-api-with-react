import { useClassExist } from "@hook/useClassExist";
import { ComponentPropsWithoutRef } from "react";

interface InfoTextProps extends ComponentPropsWithoutRef<"p"> {
  title: string;
  value: string[] | string | undefined;
}

function InfoText({ title, value, ...rest }: InfoTextProps) {
  const { ref, isClassExist } = useClassExist<HTMLParagraphElement>("truncate");

  return (
    <div className="flex">
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <h1>{title}:</h1>
      <p ref={ref} {...rest} className={`${rest.className} pl-1 text-gray-300`}>
        {value || "no data"}
      </p>
    </div>
  );
}

export default InfoText;
