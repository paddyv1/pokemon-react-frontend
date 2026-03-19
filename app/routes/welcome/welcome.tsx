import incineroar from "./incineroar.jpg";
import khangaskhan from "./khangkaskhan.jpg";
import Carousel from "./carousel";
export function Welcome() {
  return (
    <div className="grid grid-cols-3 gap-4 text-black pt-15 pb-10">
      <div className=" col-span-2 pl-22 bg-green-300 h-150 font-extrabold text-9xl rounded-3xl">
        Welcome to VGC Central
      </div>
      <div className="bg-green-600 h-0">
        <img className="object-cover rounded-2xl" src={incineroar} />
      </div>
      <div className="col-span-3 overflow-y-visible">
        <Carousel />
      </div>
      <div className=" bg-red-50 h-170 text-8xl rounded-4xl">
        Master your type match ups with our mini games
      </div>
      <div className="flex justify-center-safe  h-100 rounded-2xl">
        <img
          className="object-fill h-140 w-full rounded-4xl"
          src={khangaskhan}
        />
      </div>
      <div className=" bg-blue-200 h-160 text-7xl text-right rounded-2xl">
        Collaborate Live with Friends to create teams which can be exported into
        a Pokemon Showdown
      </div>
    </div>
  );
}

const resources = [];
