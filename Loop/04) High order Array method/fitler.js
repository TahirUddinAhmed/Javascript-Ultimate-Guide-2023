const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNum = numbers.filter(num => {
//     return num % 2===0;
// });

// console.log(evenNum);


// same using forEach loop
// const evenNumbers = [];
// numbers.forEach(element => {
//     if(element % 2 === 0) {
//         evenNumbers.push(element);
//     }
// });


const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// Get only retain companies
const retailCompanies = companies.filter(comp => {
    return comp.category === 'Retail';
});

console.log(retailCompanies);

// get Companies that start in or after 1980 and ended in or before 2005
const earlyCompanies = companies.filter(comp => {
    return comp.start >= 1980 && comp.end <= 2005;
});

console.log(earlyCompanies);

// get companies that lasted 10 years or more
const compLastLong = companies.filter(comp => {
    return (comp.end - comp.start) >= 10;
});

console.log(compLastLong);

// get all companies name
// const getCompNames = companies.filter(comp => {
//     return comp.name
// });

// console.log(getCompNames);


