import { useInView } from "react-intersection-observer";

interface CountryCardProps {
  name: string;
  img: string;
  capital: string[];
  region: string;
  population: number;
}

function CountryCard({
  name,
  img,
  capital,
  population,
  region
}: CountryCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      className="h-[21rem] cursor-pointer overflow-hidden rounded-lg bg-dark-sec shadow-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      {/* lazy load image */}
      <div
        className="h-40 w-full"
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
  );
}

export default CountryCard;
