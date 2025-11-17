import { Link } from "react-router";

export default function Register() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-start px-6 py-12 bg-gray-900">

        {/* LOGO */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Gaming Store"
            src="/img/1.png"
            className="mx-auto h-16 w-auto"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold tracking-tight text-white">
            Create an Account
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

              <div className="mt-2 relative">
                {/* Email Icon */}
                <svg
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeWidth="2" d="M4 6h16v12H4z" />
                  <path strokeWidth="2" d="M22 6l-10 7L2 6" />
                </svg>

                <input
                  placeholder="Type your email"
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md bg-gray-900 pl-9 py-2 text-white border border-gray-700 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                Password
              </label>

              <div className="mt-2 relative">
                {/* Lock Icon */}
                <svg
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    d="M12 15v2m-6-6h12v10H6V11zm6-8a3 3 0 00-3 3v3h6V6a3 3 0 00-3-3z"
                  />
                </svg>

                <input
                  placeholder="Type your password"
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md bg-gray-900 pl-9 py-2 text-white border border-gray-700 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                Repeat your password
              </label>

              <div className="mt-2 relative">
                {/* Lock Icon */}
                <svg
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    d="M12 15v2m-6-6h12v10H6V11zm6-8a3 3 0 00-3 3v3h6V6a3 3 0 00-3-3z"
                  />
                </svg>

                <input
                  placeholder="Repeat your password"
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md bg-gray-900 pl-9 py-2 text-white border border-gray-700 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-600"
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
                Register
              </button>
            </div>
          </form>

          {/* FOOTER */}
          <p className="mt-8 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-purple-400 hover:text-purple-300"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}