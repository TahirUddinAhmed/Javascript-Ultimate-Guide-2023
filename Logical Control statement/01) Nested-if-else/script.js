// nested if statement

const date = new Date('2023/06/16 22:15');
// get the hour
const hour = date.getHours();


// nested if 
if(hour < 12) {
    console.log('Good Morning');

    if(hour === 6) {
        console.log('Wake Up!');
    }
} else if(hour < 18) {
    console.log('Good Afternoon');
} else {
    console.log('Good night');

    if(hour >= 22) {
        console.log('zzzzzzzz..');
    }
}