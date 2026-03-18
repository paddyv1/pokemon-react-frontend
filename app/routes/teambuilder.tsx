import { NavLink } from "react-router";
import TeamDesignComponent from "./teambuilder/teamdesignpage";
export default function Teambuilder() {
  return (
    <>
      <p>This is the team builder page</p>
      <div className="grid grid-cols-5 grid-rows-5 gap-4">
        <div className="row-span-5">Team List</div>
        <div className="col-span-4 row-span-5">
          <TeamDesignComponent />
        </div>
      </div>
    </>
  );
}
