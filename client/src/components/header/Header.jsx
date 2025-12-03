'use client'
import { Link, useNavigate } from 'react-router'

import { useContext, useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { AuthContext } from '../../context/authContext'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, logout, user } = useContext(AuthContext);
  const navigate = useNavigate()

  function logoutHandle() {
    logout();
    navigate('/');
  }



  return (
    <header className="bg-gray-900">
      <nav aria-label="Global" className="flex w-full items-center justify-between p-6 lg:px-8">


        {/* LOGO */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img
              alt="Gaming Store Logo"
              src="/images/1.png"
              className="h-18 w- object-contain"
            />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* DESKTOP NAVIGATION (NO POPOVER) */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm font-semibold text-white hover:text-purple-500">Home</Link>
          <Link to="/about" className="text-sm font-semibold text-white hover:text-purple-500">About</Link>
          <Link to="/catalog" className="text-sm font-semibold text-white hover:text-purple-500">Catalog</Link>

          {isAuthenticated && (
            <Link to="/addGame" className="text-sm font-semibold text-white hover:text-purple-500">
              Add Game
            </Link>
          )}

          {!isAuthenticated && (
            <Link to="/register" className="text-sm font-semibold text-white hover:text-purple-500">Register</Link>

          )}
        </div>

        {/* LOGIN ON RIGHT */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {!isAuthenticated && (
            <Link to="/login" className="text-sm font-semibold text-white hover:text-purple-500">
              Log in →
            </Link>
          )}
          {isAuthenticated && (
            <div className="flex items-center gap-4">

              <span className="text-sm text-purple-500">
                {user.email}
              </span>

              <button
                onClick={logoutHandle}
                className="text-sm font-semibold text-white hover:text-purple-500 cursor-pointer"
              >
                Logout
              </button>

            </div>
          )}


        </div>
      </nav>

      {/* MOBILE MENU */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />

        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                alt=""
                src="/images/1.png"
                className="h-12 w-auto object-contain"
              />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">

                <a href="#" className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">
                  Home
                </a>
                <a href="#" className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">
                  About
                </a>

                <a href="#" className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">
                  Catalog
                </a>

                <a href="#" className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">
                  Register
                </a>
              </div>

              <div className="py-6">
                <a href="#" className="block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-white/5">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

    </header>
  )
}
