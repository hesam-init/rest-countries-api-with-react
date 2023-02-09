function SkeletonCard() {
  return (
    <div className="h-[21rem] animate-pulse overflow-hidden rounded-lg bg-dark-sec">
      <div className="h-40 w-full bg-gray-600" />

      <div className="flex flex-col px-6 pt-6">
        <div className="mb-4 h-4 max-w-[8rem] truncate rounded-lg bg-gray-600 text-xl font-bold" />

        <div className="flex flex-col gap-3">
          <div className="h-3 max-w-[12rem] truncate rounded-lg bg-gray-600 text-xl font-bold" />
          <div className="h-3 max-w-[9rem] truncate rounded-lg bg-gray-600 text-xl font-bold" />
          <div className="h-3 max-w-[10rem] truncate rounded-lg bg-gray-600 text-xl font-bold" />
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;
