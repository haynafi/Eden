import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { Menu, X, Home, PlusCircle, LayoutGrid } from "lucide-react"
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-white">
          <div className="flex h-screen">
            {/* Sidebar (Desktop) */}
            <div
              className={`${showingNavigationDropdown ? "block" : "hidden"} md:block fixed inset-y-0 left-0 z-50 md:relative md:flex flex-col w-64 bg-primary-pink min-h-screen border-r border-primary-pink/30`}
            >
              <div className="flex items-center justify-center h-20 border-b border-primary-pink/30">
                <Link href="/">
                  <div className="flex items-center justify-center">
                    <ApplicationLogo className="h-10 w-auto fill-current text-primary-mustard" />
                    <span className="text-primary-mustard text-xl font-bold ml-2">LOGO</span>
                  </div>
                </Link>
              </div>
              <nav className="flex-1 mt-6 px-4">
                <div className="space-y-4">
                  <NavLink
                    href={route("dashboard")}
                    active={route().current("dashboard")}
                    className={`flex items-center px-4 py-3 text-sm rounded-md transition-colors ${
                      route().current("dashboard") ? "bg-primary-pink text-gray-800" : "text-gray-700 hover:bg-primary-pink"
                    }`}
                  >
                    <Home className="h-5 w-5 mr-3" />
                    Home
                  </NavLink>
                  <NavLink
                    href={route("purchases.index")}
                    active={route().current("purchases.index")}
                    className={`flex items-center px-4 py-3 text-sm rounded-md transition-colors ${
                      route().current("purchases.index")
                        ? "bg-primary-pink text-gray-800"
                        : "text-gray-700 hover:bg-primary-pink"
                    }`}
                  >
                    <PlusCircle className="h-5 w-5 mr-3" />
                    Purchasing
                  </NavLink>
                  {/* <NavLink
                    href={route("transactions.index")}
                    active={route().current("transactions.index")}
                    className={`flex items-center px-4 py-3 text-sm rounded-md transition-colors ${
                      route().current("transactions.index")
                        ? "bg-primary-pink text-gray-800"
                        : "text-gray-700 hover:bg-primary-pink"
                    }`}
                  >
                    <LayoutGrid className="h-5 w-5 mr-3" />
                    Transaction
                  </NavLink> */}
                </div>
              </nav>
              <div className="mt-auto border-t border-primary-pink/30 py-4 px-4">
                {/* <p className="text-sm text-gray-500 text-center">footer</p> */}
                <div className="mt-3 space-y-1">
                    {/* <ResponsiveNavLink
                        method="post"
                        href={route('logout')}
                        as="button"
                    >
                        Log Out
                    </ResponsiveNavLink> */}
                    {/* <NavLink
                    href={route("profile.edit")}
                    active={route().current("profile.edit")}
                    className={`flex items-center px-4 py-3 text-sm rounded-md transition-colors ${
                      route().current("dashboard") ? "bg-primary-pink text-gray-800" : "text-gray-700 hover:bg-primary-pink"
                    }`}
                  >
                    <Home className="h-5 w-5 mr-3" />
                    Profile
                  </NavLink> */}
                  <NavLink
                  method="post"
                    href={route("logout")}
                    className={`flex items-center px-4 py-3 text-sm rounded-md transition-colors ${
                      route().current("dashboard") ? "bg-primary-pink text-gray-800" : "text-gray-700 hover:bg-primary-pink"
                    }`}
                  >
                    <Home className="h-5 w-5 mr-3" />
                    Log Out
                  </NavLink>
                </div>
              </div>
            </div>
    
            {/* Mobile Hamburger Menu */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between bg-primary-pink px-4 py-3 h-16 border-b border-primary-pink/30">
              <Link href="/">
                <ApplicationLogo className="h-8 w-auto fill-current text-primary-mustard" />
              </Link>
              <button
                onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)}
                className="text-gray-700 focus:outline-none"
              >
                {showingNavigationDropdown ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
    
            {/* Main Content */}
            <div className="flex-1 bg-white md:ml-0 pt-16 md:pt-0 overflow-auto">
              {header && (
                <header className="bg-primary-pink shadow-sm">
                  <div className="mx-auto px-4 py-4 sm:px-6 lg:px-8">{header}</div>
                </header>
              )}
              <main className="p-4 sm:p-6 lg:p-8">{children}</main>
            </div>
          </div>
        </div>
      );
}