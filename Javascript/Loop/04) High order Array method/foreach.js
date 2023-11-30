const socials = ['twiiter', 'facebook', 'instragram', 'linkedIn'];

// socials.forEach(function (item) {
//   console.log(item);
// })

// socials.forEach(item => {
//     console.log(item);
// });

// socials.forEach((item, index, arr) => {
//     console.log(`${index}: ${item}`);
// });

// socials.forEach(logSocial); // callback function

// function logSocial(item) {
//     console.log(item);
// }



// array of object
const socialObj = [
    {name: 'Twitter', url: 'https://twitter.com'},
    {name: 'Facebook', url: 'https://facebook.com'},
    {name: 'LinkedIn', url: 'https://linkedin.com'},
    {name: 'instragram', url: 'https://instragram.com'}
];

socialObj.forEach(item => {
    console.log(item);
    console.log(item.name);
    console.log(item.url);
});