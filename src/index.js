module.exports = function check(str, bracketsConfig) {
  let arr = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    arr.push(`${bracketsConfig[i][0]}${bracketsConfig[i][1]}`);
  };
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (`${str[j]}${str[j + 1]}` == arr[i]) {
        str = str.replace(arr[i], '');
        i = -1;
      };
    };
  };

  if (str.length == 0) {
    return true;
  } else {
    return false;
  };
};
// идею) решения задачи подсмотрел у https://github.com/skydiver-a https://github.com/skydiver-a/brackets/blob/master/src/index.js
