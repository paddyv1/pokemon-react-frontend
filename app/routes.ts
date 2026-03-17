import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("teambuilder", "routes/teambuilder.tsx"),
  route("minigames", "routes/minigames.tsx", [
    route("typematchup", "routes/minigames/typematchup.tsx"),
    route("speedtier", "routes/minigames/speedtier.tsx"),
  ]),
] satisfies RouteConfig;
