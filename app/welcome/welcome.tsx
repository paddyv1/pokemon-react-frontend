import incineroar from "./incineroar.jpg";
import Carousel from "./carousel";
export function Welcome() {
  return (
    <div className="grid grid-cols-3 gap-4 text-black pt-15">
      <div className="col-span-2 bg-green-300 h-150 font-extrabold text-9xl">
        Welcome to VGC Central
      </div>
      <div className="bg-green-600 h-0 ">
        <img className="object-cover" src={incineroar} />
      </div>
      <div className="col-span-3">
        <Carousel />
      </div>
      <div className=" bg-amber-100 h-230">01</div>
      <div className="flex justify-center-safe self-center bg-amber-600 h-100">
        02
      </div>
      <div className=" bg-amber-950 h-150">03</div>
      <div className="bg-blue-400">06</div>
      <div className="col-span-2 bg-blue-800">07</div>
    </div>
  );
}

const resources = [];
