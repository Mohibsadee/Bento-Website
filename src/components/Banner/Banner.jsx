
const Banner = () => {
    return (
      <div className="relative w-full">
        {/* Banner Image */}
        <img
          src="https://plus.unsplash.com/premium_photo-1671659205178-be077f4b8b6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your desired image URL
          alt="Banner"
          className="w-full h-full object-cover"
        />
        {/* Title */}
        <div className="absolute top-6 left-0 w-full md:h-[150px] flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-6xl font-bold"><span className="font-thin">Hello</span> Toramon</h1>
          <h4 className="text-white mt-2">あいうえお かきくけこ さしすせそ たちつてと なにぬねの はひふへほ まみむめも やゆよ らりるれろ わをん</h4>
        </div>
      </div>
    );
  };
  
  export default Banner;
  