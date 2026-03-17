export default function TeamDesignComponent() {
  return (
    <>
      <div className="grid grid-cols-5 grid-rows-5 gap-4 bg-red-600">
        <div className="col-start-1 row-start-2 bg-blue-400">Slot 1</div>
        <div className="col-start-2 row-start-2 bg-blue-400">Slot 2</div>
        <div className="col-start-1 row-start-3 bg-blue-400">Slot 3</div>
        <div className="col-start-2 row-start-3 bg-blue-400">Slot 4</div>
        <div className="col-start-1 row-start-4 bg-blue-400">Slot 5</div>
        <div className="col-start-2 row-start-4 bg-blue-400">Slot 6</div>
        <div className="col-span-2 col-start-3 row-start-1 bg-blue-400">10</div>
        <div className="col-span-2 col-start-1 row-start-1 bg-blue-400 justify-center flex">
          Teamname
        </div>
        <div className="col-span-2 row-span-4 col-start-3 row-start-2 bg-blue-400">
          12
        </div>
        <div className="row-span-4 col-start-5 row-start-2 bg-blue-400">13</div>
        <div className="col-start-5 row-start-1 bg-blue-400">14</div>
      </div>
    </>
  );
}
