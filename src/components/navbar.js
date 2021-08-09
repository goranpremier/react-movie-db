import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import { MenuIcon } from '@heroicons/react/outline'
import { ReactComponent as TheMovieDBLogo } from '../assets/images/tmdb-logo.svg'

const MENU = [
  { to: '/movies', title: 'Movies' },
  { to: '/tv', title: 'Tv' },
]

function NavLink({ to, ...rest }) {
  const location = useLocation()
  const isSelected =
    to === location.pathname || location.pathname.startsWith(`${to}/`)

  return (
    <Link
      to={to}
      className={clsx(
        'block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm text-base font-medium',
        {
          'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium':
            isSelected,
        },
      )}
      {...rest}
    />
  )
}

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <div
        className={clsx(
          'sm:hidden inline-block fixed mt-16  w-4/5 h-full bg-gray-800 p-4 transition-all ease-in duration-300 z-50',
          { 'left-0': mobileMenuOpen, '-left-4/5': !mobileMenuOpen },
        )}
      >
        <div className="space-y-1">
          {MENU.map((item) => (
            <NavLink to={item.to} key={item.to}>
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="h-16  relative flex items-center justify-between ">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <MenuIcon className="h-6" />
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/">
                  <TheMovieDBLogo className="h-8 w-auto" />
                </Link>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {MENU.map((item) => (
                    <NavLink to={item.to} key={item.to}>
                      {item.title}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>
      </nav>
    </>
  )
}

export { Navbar }
