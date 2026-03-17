import { NavLink, Outlet } from "react-router";
import { useState } from "react";

export default function Minigame() {
  const showIntro = location.pathname === "/minigames";

  return (
    <>
      <p>Minigames Page</p>
      <NavLink to={"/minigames/speedtier"} end={true}>
        Speed Tier
      </NavLink>
      <NavLink to={"/minigames/typematchup"} end={true}>
        Type Match Up
      </NavLink>
      <div className="mt-2">
        {showIntro && <p>Games will show here</p>}
        <Outlet />
      </div>
    </>
  );
}
