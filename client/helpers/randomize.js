// Attribute: https://stackoverflow.com/a/19270021/5929034
const randomize = (arr, n) => {
  const result = new Array(n);
  let len = arr.length;
  const taken = new Array(len);

  if (n > len) {
    throw new RangeError('randomize: more elements taken than available!');
  }

  let numberOfElements = n;

  while (numberOfElements) {
    numberOfElements -= 1;

    const x = Math.floor(Math.random() * len);
    result[numberOfElements] = arr[x in taken ? taken[x] : x];

    len -= 1;
    taken[x] = len in taken ? taken[len] : len;
  }
  return result;
};

export default randomize;
