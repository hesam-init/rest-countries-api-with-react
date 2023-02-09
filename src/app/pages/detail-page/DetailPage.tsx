import { useParams } from "react-router-dom";

type PageParams = {
  country: string;
  code: string;
};

function DetailPage() {
  const { country, code } = useParams<PageParams>();

  return (
    <div>
      {country?.replaceAll("-", " ")}
      {code}
    </div>
  );
}

export default DetailPage;
