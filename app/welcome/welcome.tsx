import incineroar from "./incineroar.jpg";
import khangaskhan from "./khangkaskhan.jpg";
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
      <div className="col-span-3 overflow-y-visible">
        <Carousel />
      </div>
      <div className=" bg-red-50 h-170 text-8xl">
        Master your type match ups with our mini games
      </div>
      <div className="flex justify-center-safe  bg-amber-600 h-100">
        <img className="object-fill h-140 w-full" src={khangaskhan} />
      </div>
      <div className=" bg-blue-200 h-160 text-7xl text-right">
        Collaborate Live with Friends to create teams which can be exported into
        a Pokemon Showdown
      </div>
      <div className="bg-blue-400 h-100">06</div>
      <div className="col-span-2 bg-blue-800 h-100">07</div>
    </div>
  );
}

const resources = [];
