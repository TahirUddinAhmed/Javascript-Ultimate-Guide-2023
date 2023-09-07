// 
function getCelcius(f) {
    const res = (f-32) * 5 / 9;
    return res.toFixed(4);
}

console.log(`The temparature is ${getCelcius(75)} \xB0C`);