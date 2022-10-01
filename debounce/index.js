let counter = 0;
const getData = function () {
  console.log("Fetching..", ++counter);
};

const debounce = (fn, dl) => {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, dl);
  };
};
