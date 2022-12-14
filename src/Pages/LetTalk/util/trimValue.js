export const trimVal = (...params) => {
  let arr = [];
  params.forEach((element) => {
    if (!!element.current.value.trimStart()) {
      arr.push(element.current.value);
    } else {
      arr.push('');
    }
  });
  return arr;
};
