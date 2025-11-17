export default function About() {
  return (
<section className="relative bg-gray-900 text-white py-24 px-6 overflow-hidden min-h-screen">


      {/* Background glow effects */}
      

      <div className="relative max-w-5xl mx-auto">
        
        {/* Title */}
        <h1 className="text-center text-5xl font-extrabold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            About Gaming Store
          </span>
        </h1>

        {/* Card */}
        <div className="mt-12 bg-gray-800/40 backdrop-blur-xl p-10 rounded-2xl border border-white/10 shadow-xl
                        hover:shadow-purple-500/20 transition-all duration-300">

          <p className="text-lg text-gray-300 leading-8">
            Welcome to <span className="text-purple-400 font-semibold">Gaming Store</span> —
            your modern gateway to browsing, exploring, and managing the coolest games online.
          </p>

          <p className="mt-6 text-gray-400 leading-8">
            Whether you're checking the latest titles, exploring genres, or organizing your
            collection, our platform gives you powerful tools in a clean and modern gaming UI.
          </p>

          <p className="mt-6 text-gray-400 leading-8">
            <span className="text-pink-400 font-semibold">Registered users</span> can
            add, edit, and delete games, while guests can freely browse the catalog and view
            game details. Everything is built for speed, simplicity, and a smooth user
            experience.
          </p>

          

        </div>
      </div>
    </section>
  );
}
