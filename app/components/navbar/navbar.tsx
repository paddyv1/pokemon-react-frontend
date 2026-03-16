import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

type NavItem = {
  label: string;
  to: string;
  end?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", to: "/", end: true },
  { label: "Teambuilder", to: "/teambuilder", end: true },
  { label: "Minigames", to: "/minigames", end: true },
];

function navLinkClassName({ isActive }: { isActive: boolean }) {
  return [
    "px-5 py-2 text-sm",
    isActive
      ? "text-white"
      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
  ].join(" ");
}

export function Navbar() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-red-300/80 backdrop-blur font-mono">
      <div className="shrink-0">
        <Link to="/" className="" aria-label="Pokemon app home">
          VGC Central
        </Link>
      </div>
      <div className="flex flex-1 justify-center">
        <nav className="" aria-label="Primary">
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
      <div className="shrink-0">Profile Picture Temp</div>
    </header>
  );
}
