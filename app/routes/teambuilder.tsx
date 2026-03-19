import { NavLink } from "react-router";
import TeamDesignComponent from "./teambuilder/teamdesignpage";
import ListChoice from "./teambuilder/teamlistoption";
import AddTeam from "./teambuilder/addteam";
export default function Teambuilder() {
  return (
    <div className="px-20 pt-15">
      <div className="grid grid-cols-5 grid-rows-5 gap-4">
        <div className="row-span-5 flex flex-col">
          Team List
          <ListChoice />
          <AddTeam />
        </div>
        <div className="col-span-4 row-span-5">
          <TeamDesignComponent />
        </div>
      </div>
    </div>
  );
}
