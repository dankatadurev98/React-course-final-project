export default function Login() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-center px-6 py-12 bg-gray-900">

        {/* LOGO */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Gaming Store"
            src="/img/1.png"
            className="mx-auto h-16 w-auto"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold tracking-tight text-white">
            Login
          </h2>
        </div>

        {/* FORM */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-gray-800/40 p-8 rounded-xl shadow-lg border border-gray-700">
          <form className="space-y-6">

            {/* EMAIL */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md bg-gray-900 px-3 py-2 text-white 
                  border border-gray-700 placeholder-gray-400
                  focus:border-purple-500 focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                  Password
                </label>
                <a href="#" className="text-sm font-semibold text-purple-400 hover:text-purple-300 hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.5)]">
                  Forgot?
                </a>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md bg-gray-900 px-3 py-2 text-white
                  border border-gray-700 placeholder-gray-400
                  focus:border-purple-500 focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>

            {/* SUBMIT */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-purple-600 px-4 py-2 
                text-sm font-semibold text-white shadow-lg
                hover:bg-purple-500 hover:shadow-purple-500/40
                transition-all duration-300"
              >
                Login
              </button>
            </div>
          </form>

          {/* FOOTER */}
          <p className="mt-8 text-center text-sm text-gray-400">
            You don't have an account?{" "}
            <a
              href="#"
              className="font-semibold text-purple-400 hover:text-purple-300"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
}