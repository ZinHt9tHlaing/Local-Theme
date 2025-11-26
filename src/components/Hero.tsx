const Hero = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800">
      <div className="min-h-[600px] px-4 md:px-8 flex flex-col gap-6 items-center justify-center max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight dark:text-gray-200">
          Welcome to My Site.
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <button className="bg-red-600 px-4 py-2 lg:px-6 lg:py-3 rounded-lg text-white cursor-pointer active:scale-95 hover:scale-105 duration-200 text-base sm:text-lg shadow-lg hover:shadow-xl">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Hero;
