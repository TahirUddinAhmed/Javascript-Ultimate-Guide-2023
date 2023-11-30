const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumber = numbers.map(number => {
    return number * 2;
});

console.log(doubledNumber);

// same with for loop
let doubleArr = [];
for(let i = 0; i < numbers.length; i++) {
   let double = numbers[i] * 2;
   doubleArr.push(double);
}

console.log(doubleArr);


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

// create an array of companies name
const getCompNames = companies.map(comp => comp.name);

console.log(getCompNames);

// Create an array with just company name and category
const newComp = companies.map(comp => {
    return {
        name: comp.name,
        category: comp.category
    }
})

console.log(newComp);

// Create an array of objects with the company name and the length of each company in years
const companyYears = companies.map(company => {
    return {
        name: company.name,
        years: company.end - company.start
    }
});

console.log(companyYears);

// chain map method
const squareAndDouble = numbers
    .map(number => Math.sqrt(number))
    .map(sqrt => sqrt * 2);

console.log(squareAndDouble);

// chain other array method
const evenDouble = numbers
      .filter(num => num % 2===0)
      .map(num => num * 2)

console.log(evenDouble)