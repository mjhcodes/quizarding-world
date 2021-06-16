export const color = (r: number, g: number, b: number) => {
  return (a = 1) => {
    return "rgba(" + [r, g, b, a].join(",") + ")";
  };
};

const colors = {
  White: color(243, 243, 243), // #f3f3f3
  Grey: color(221, 221, 221), // #dddddd
  Black: color(0, 0, 0), // #000000
  Red: color(115, 2, 12), // #73020c
  Green: color(20, 104, 73), // #146849
  Blue: color(20, 70, 130), // #144682
  Yellow: color(229, 196, 111), // #e5c46f
  Gold: color(217, 181, 4), // #d9b504
  Bronze: color(138, 124, 52), // #8a7c34
};

export default colors;
