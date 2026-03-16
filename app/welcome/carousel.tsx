import { posix } from "path";
import bug from "./typesvgs/bug.svg";
import dark from "./typesvgs/dark.svg";
import dragon from "./typesvgs/dragon.svg";
import electric from "./typesvgs/electric.svg";
import fairy from "./typesvgs/fairy.svg";
import fighting from "./typesvgs/fighting.svg";
import fire from "./typesvgs/fire.svg";
import flying from "./typesvgs/flying.svg";
import ghost from "./typesvgs/ghost.svg";
import grass from "./typesvgs/grass.svg";
import ground from "./typesvgs/ground.svg";
import ice from "./typesvgs/ice.svg";
import normal from "./typesvgs/normal.svg";
import poison from "./typesvgs/poison.svg";
import psychic from "./typesvgs/psychic.svg";
import rock from "./typesvgs/rock.svg";
import steel from "./typesvgs/steel.svg";
import water from "./typesvgs/water.svg";
import "./carousel.css";
import useEmblaCarousel from "embla-carousel-react";

const types = [
  { name: "bug", src: bug },
  { name: "dark", src: dark },
  { name: "dragon", src: dragon },
  { name: "electric", src: electric },
  { name: "fairy", src: fairy },
  { name: "fighting", src: fighting },
  { name: "fire", src: fire },
  { name: "flying", src: flying },
  { name: "ghost", src: ghost },
  { name: "grass", src: grass },
  { name: "ground", src: ground },
  { name: "ice", src: ice },
  { name: "normal", src: normal },
  { name: "poison", src: poison },
  { name: "psychic", src: psychic },
  { name: "rock", src: rock },
  { name: "steel", src: steel },
  { name: "water", src: water },
];

const looped = [...types];

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel();
  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {looped.map((type, index) => (
              <div key={type.name + index} className="embla__slide">
                <img
                  src={type.src}
                  alt={type.name + " type icon"}
                  className="h-15 w-15 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
