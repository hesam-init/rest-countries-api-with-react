function Navbar() {
  return (
    <div className="flex justify-between bg-dark-sec p-6 text-white shadow-md md:px-20">
      <h1 className="font-semibold tracking-normal md:text-2xl">
        Where in the world ?
      </h1>
      <button type="button">Dark mode</button>
    </div>
  );
}

export default Navbar;
