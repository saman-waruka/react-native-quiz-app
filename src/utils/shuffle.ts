// Fisher–Yates Shuffle: https://bost.ocks.org/mike/shuffle/
// Time Complexity : O(n)

/** This function is use for shuffle any type of array
 * @template { string | number | object} T
 *
 * @param {T[]} datas - The source array.
 * @return {T[]} Shuffled array.
 */
export const shuffleArray = <T>(datas: T[]): T[] => {
  // While there remain elements to shuffle…
  for (let currentIndex = datas.length - 1; currentIndex >= 0; currentIndex--) {
    // Pick a remaining element…
    const i = Math.floor(Math.random() * currentIndex);

    // And swap it with the current element.
    const t = datas[currentIndex];
    datas[currentIndex] = datas[i];
    datas[i] = t;
  }

  return datas;
};
