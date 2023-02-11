import { ComponentPropsWithoutRef } from "react";

interface InfoTextProps extends ComponentPropsWithoutRef<"p"> {
  title: string;
  value: string[] | string | undefined;
}

function InfoText({ title, value, ...rest }: InfoTextProps) {
  return (
    <div className="flex">
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <h1>{title}:</h1>
      <p {...rest} className={`${rest.className} pl-1`}>
        {value || "no data 🤨"}
      </p>
    </div>
  );
}

export default InfoText;
