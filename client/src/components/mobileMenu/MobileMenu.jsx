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

export default function MobileMenu({mobileMenuOpen,setMobileMenuOpen}){
     
  const { isAuthenticated, logout, user } = useContext(AuthContext);
  const navigate = useNavigate()

  function logoutHandle() {
    logout();
    navigate('/');
  }
    return(
        
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
        
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                  <div className="flex items-center justify-between">
                    <Link to="#" className="-m-1.5 p-1.5">
                      <img
                        alt=""
                        src="/images/1.png"
                        className="h-12 w-auto object-contain"
                      />
                    </Link>
        
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
                        {!isAuthenticated && (
                          <>
                            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">
                              Home
                            </Link>
                            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">
                              About
                            </Link>
        
                            <Link to="/catalog" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">
                              Catalog
                            </Link>
        
                            <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">
                              Register
                            </Link>
        
                            <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-white/5">
                              Log in
                            </Link>
                          </>
                        )
                        }
                        {isAuthenticated && (
                          <>
                            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">
                              Home
                            </Link>
                            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">
                              About
                            </Link>
        
                            <Link to="/catalog" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">
                              Catalog
                            </Link>
                            <Link to="/addGame" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">
                              Add Game
                            </Link>
        
                            <button
                              onClick={() => {
                                setMobileMenuOpen(false);
                                logoutHandle()
                              }}
                              className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                            >
                              Logout
                            </button>
                          </>
                        )}
        
        
                      </div>
        
                      <div className="py-6">
        
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </Dialog>
    )
}