const posts = {
    id: 1,
    title: "Javascript JSON Object",
    body: "This is body of the blog post JSON Object"
};

// convert js Object to JSON String
const str = JSON.stringify(posts)

// JSON parse
const obj = JSON.parse(str);


console.log(str);
console.log(obj);