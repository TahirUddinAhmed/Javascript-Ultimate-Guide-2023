const colorObj = {
  color1: 'red',
  color2: 'green',
  color3: 'bluee',
};

for(const key in colorObj) {
  console.log(key, colorObj[key]);
}

const colorArr = ['red', 'green', 'yellow', 'blue', 'orange'];

for(const index in colorArr) {
  console.log(colorArr[index]);
}

