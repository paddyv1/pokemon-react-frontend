import { NavLink } from "react-router";
import TeamDesignComponent from "./teambuilder/teamdesignpage";
import ListChoice from "./teambuilder/teamlistoption";
import AddTeam from "./teambuilder/addteam";

export default function Teambuilder() {
  return (
    <div className="px-20 pt-15">
      <div className="grid grid-cols-5 grid-rows-5 gap-4 ">
        <div className="row-span-5 flex flex-col space-y-3">
          <div>Your Teams:</div>
          <AddTeam />
          <div className="flex-1 overflow-y-auto max-h-160 space-y-3 team-scroll">
            <ListChoice />
            <ListChoice />
            <ListChoice />
            <ListChoice />
            <ListChoice />
            <ListChoice />
            {/* ...more ListChoice components */}
          </div>
        </div>
        <div className="col-span-4 row-span-5">
          <TeamDesignComponent />
        </div>
      </div>
    </div>
  );
}
