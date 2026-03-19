import plus from "../../resources/plus.svg";

export default function AddTeam() {
  return (
    <div className="h-15 inset-0 backdrop-blur-[1px] flex justify-center px-5 rounded-3xl outline-1 hover:-translate-y-1 hover:transition-all">
      <button>
        <img src={plus} className="h-10"></img>
      </button>
    </div>
  );
}
