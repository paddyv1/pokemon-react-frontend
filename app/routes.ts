import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("teambuilder", "routes/teambuilder.tsx"),
  route("minigames", "routes/minigames.tsx"),
] satisfies RouteConfig;
