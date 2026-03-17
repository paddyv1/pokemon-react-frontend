import { NavLink, Outlet } from "react-router";
import { useState } from "react";

let linkClicked = false;

export default function Minigame() {
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
        <Outlet />
      </div>
    </>
  );
}
