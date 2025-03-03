// use default export
// do you need some import here?

import { rgbToHex } from "../utils/colors.js";

// passengers data - data about passengers in the ship
const passengersOnShip = [
  {
    name: "Vader",
    id: 1,
    seat: "3E",
    colorOfSeat: rgbToHex(0, 0, 0),
  },
  {
    name: "TK-202",
    id: 2,
    seat: "17C",
    colorOfSeat: rgbToHex(255, 255, 0),
  },
];

export { passengersOnShip };
