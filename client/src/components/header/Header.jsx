'use client'
import { Link, useNavigate } from 'react-router'

import { useContext, useState } from 'react'

import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { AuthContext } from '../../context/authContext'
import MobileMenu from '../mobileMenu/MobileMenu'

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
              className="h-18 w-auto object-contain transition-transform duration-300 hover:-translate-y-1 hover:scale-110"


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

              <span className="text-sm text-purple-500 font-medium">
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
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />


    </header>
  )
}
