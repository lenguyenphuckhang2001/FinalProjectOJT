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

export const welcomeLog = (val) => {
  console.log(
    `%c${val}`,
    'color: #1cce69; background: #3d09bf; font-size: 1.2rem; padding: 0.15rem 0.25rem; margin: 1rem; border: 2px solid #1cce69; border-radius: 4px; text-shadow: 1px 1px 1px #0a0121; font-weight: bold;',
  );
};
