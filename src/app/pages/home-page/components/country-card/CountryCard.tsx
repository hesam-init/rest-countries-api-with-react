import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

interface CountryCardProps {
  name: string;
  img: string;
  capital: string[];
  region: string;
  population: number;
  code: string;
}

function CountryCard({
  name,
  img,
  capital,
  population,
  region,
  code
}: CountryCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true
  });

  return (
    <Link
      to={`/${name.replaceAll(" ", "-").toLowerCase()}/${code.toLowerCase()}`}>
      <div
        ref={ref}
        className="relative h-[21rem] cursor-pointer overflow-hidden rounded-lg bg-dark-sec shadow-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        {/* image loading effect */}
        <div className="h-40 w-full animate-pulse bg-gray-600" />
        {/* lazy load image */}
        <div
          className="absolute top-0 z-[1] h-40 w-full"
          style={{
            backgroundImage: `url(${inView && img})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        />

        {/* informations */}
        <div className="flex flex-col px-6 pt-6 text-white">
          <h1 className="mb-[0.7rem] max-w-[8rem] truncate text-xl font-bold">
            {name}
          </h1>
          <ul>
            <li>
              <p>
                Population:
                {` ${population}`}
              </p>
            </li>
            <li>
              <p>
                Region:
                {` ${region}`}
              </p>
            </li>
            <li>
              <p>
                Capital:
                {` ${capital}`}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
