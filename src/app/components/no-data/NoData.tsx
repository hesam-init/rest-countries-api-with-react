interface NoDataProps {
  message: string;
}

function NoData({ message }: NoDataProps) {
  return (
    <div className="mt-10 flex w-full items-center justify-center text-center">
      <h1 className="text-3xl">{message}</h1>
    </div>
  );
}

export default NoData;
