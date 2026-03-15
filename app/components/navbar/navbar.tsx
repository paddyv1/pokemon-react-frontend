import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

type NavItem = {
  label: string;
  to: string;
  end?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", to: "/", end: true },
  { label: "Profile", to: "/Profile", end: true },
];

function navLinkClassName({ isActive }: { isActive: boolean }) {
  return [
    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
    isActive
      ? "bg-sky-600 text-white"
      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
  ].join(" ");
}

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="bg-red-300 backdrop-blur relative flex">
      <div className="flex ">
        <Link
          to="/"
          className=" flex-1 text-lg font-semibold tracking-tight text-slate-900"
          aria-label="Pokemon app home"
        >
          PokeDex
        </Link>

        <button
          type="button"
          className="inline-flex items-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <nav className="hidden items-center gap-4 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={navLinkClassName}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-nav"
          className="border-t border-slate-200 px-4 py-3 md:hidden"
          aria-label="Mobile primary"
        >
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={navLinkClassName}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
