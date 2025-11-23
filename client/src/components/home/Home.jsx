import { Link } from "react-router"

export default function Home() {
  return (
    <section className="relative isolate overflow-hidden bg-gray-900 px-6 pt-24 pb-24 lg:px-8 min-h-screen flex items-start">


      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 sm:-top-80"
      >
        <div
          className="relative left-1/2 -translate-x-1/2 w-[36.125rem] sm:w-[72.1875rem] h-64 bg-gray-800 rounded-3xl opacity-40"
        />
      </div>


      {/* Content */}
      <div className="mx-auto max-w-2xl text-center w-full">


        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Level Up Your <span className="text-purple-500">Gaming Experience</span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          Discover the best and most popular games — all in one modern gaming store.
        </p>


        <p className="mt-4 text-lg leading-8 text-gray-400">
          Browse new releases, explore top genres, and dive into our growing game catalog.
          Whether you're a casual gamer or a hardcore player, we’ve got something for everyone.
        </p>


        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/catalog"
            className="rounded-md bg-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-purple-600"

          >
            Browse Catalog
          </Link>
          <Link
            to="/about"
            className="text-sm font-semibold leading-6 text-white hover:text-purple-500"
          >
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

    </section>
  )
}