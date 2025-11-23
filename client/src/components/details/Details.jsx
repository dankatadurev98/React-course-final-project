export default function Details() {
  return (
    <div className="bg-gray-900 min-h-screen text-white flex justify-center py-16 px-6">

      {/* BIG CARD WRAPPER */}
      <div className="bg-gray-800 w-full max-w-6xl rounded-2xl shadow-2xl overflow-hidden border border-gray-700">

        {/* BANNER */}
        <div className="relative w-full h-72 lg:h-80 overflow-hidden">
          <img
            src=""
            alt=""
            className="w-full h-full object-cover opacity-40 blur-sm scale-200"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 drop-shadow-xl">
              Game Title
            </h1>
          </div>
        </div>

        {/* CONTENT INSIDE CARD */}
        <div className="p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src=""
              alt=""
              className="w-full max-w-sm rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* RIGHT INFO */}
          <div className="space-y-5">

            <h2 className="text-3xl font-bold text-purple-300">Game Title</h2>

            <p className="text-lg">
              <span className="text-purple-400 font-semibold">Genre:</span> Genre Here
            </p>

            <p className="text-lg">
              <span className="text-purple-400 font-semibold">Price:</span> $00
            </p>

            <p className="text-lg">
              <span className="text-purple-400 font-semibold">Release Date:</span> Date Here
            </p>

            <p className="text-gray-300 leading-relaxed">
              Summary text goes here. This is the description of the game.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-5">
              <button className="px-6 py-3 bg-purple-600 text-white rounded-md font-bold hover:bg-purple-700 transition">
                Back to Catalog
              </button>

              <button className="px-6 py-3 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 transition">
                Edit
              </button>

              <button className="px-6 py-3 bg-red-600 text-white rounded-md font-bold hover:bg-red-700 transition">
                Delete
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
