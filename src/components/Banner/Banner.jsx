const Banner = () => {
  return (
    <div className="relative w-full">
      {/* Banner Image */}
      <img
        src="https://plus.unsplash.com/premium_photo-1671659205178-be077f4b8b6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your desired image URL
        alt="Banner"
        className="w-full h-[50vh] sm:h-[70vh] lg:h-[90vh] object-cover"
      />
      {/* Title */}
      <div className="absolute top-6 left-0 w-full h-auto flex flex-col items-center justify-center bg-black bg-opacity-50 p-4 md:p-6">
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold text-center">
          <span className="font-thin">Hello</span> Toramon
        </h1>
        <h4 className="text-white text-sm sm:text-lg mt-2 text-center">
          あいうえお かきくけこ さしすせそ たちつてと なにぬねの はひふへほ まみむめも やゆよ らりるれろ わをん
        </h4>
      </div>
    </div>
  );
};

export default Banner;
