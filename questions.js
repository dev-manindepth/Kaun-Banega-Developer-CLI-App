export const easyQuestions = [
  {
    id: 1,
    question: "How many primitive datatype does JS have ?",
    options: ["Four", "Five", "Six", "Seven"],
    answer: "Seven",
  },
  {
    id: 2,
    question:`   var user; 
    console.log(typeof user)`,
    options: ["object", "not defined", "undefined", "Error"],
    answer: "undefined",
  },
  {
    id: 3,
    question: `
    function sum(a, b) {
      return a + b;
    }
    sum(1, '2');`,
    options: ["NaN", "TypeError", `"12"`, "3"],
    answer: `"12"`,
  },
  {
    id: 4,
    question: `   let greeting;       
    greeting = {}
    console.log(greeting)`,
    options: [
      "ReferenceError: greeting is not defined",
      "undefined",
      "{}",
      "[]",
    ],
    answer: "{}",
  },
  {
    id: 5,
    question: `
    function sayHi() {
        console.log(name);
        console.log(age);
        var name = 'Manish';
        let age = 21;
    }
    sayHi();`,
    options: [
      "Manish and undefined",
      "Manish and ReferenceError",
      "ReferenceError and 21",
      "undefined and ReferenceError",
    ],
    answer: "undefined and ReferenceError",
  },
  {
    id: 6,
    question:
      "Which javascript method is used to convert javascript object into JSON ",
    options: [
      "JSON.toObject()",
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.parseToObject()",
    ],
    answer: "JSON.stringify()",
  },
  {
    id: 7,
    question:
      "Which javascript method is used to parse JSON into javascript object",
    options: [
      "JSON.toObject()",
      "JSON.toString()",
      "JSON.parse()",
      "JSON.parseToObject()",
    ],
    answer: "JSON.parse()",
  },
];
export const mediumQuestions = [
  {
    id: 1,
    question: `
    const bird = {
        size: 'small',
        };
    const mouse = {
        name: 'Mickey',
        small: true,
        };`,
    options: [
      "mouse.bird.size is not valid",
      "mouse[bird.size] is not valid",
      `mouse[bird["size"]] is not valid`,
      "All of them are valid",
    ],
    answer: "mouse.bird.size is not valid",
  },
  {
    id: 2,
    question: `
    let c = { greeting: 'Hey!' };
    let d;
    d = c;
    c.greeting = 'Hello';
    console.log(d.greeting);`,
    options: ["Hello", "Hey!", "undefined", "Reference Error"],
    answer: "Hello",
  },
  {
    id: 3,
    question: `
    function bark() {
        console.log('Woof!');
    }
    bark.animal = 'dog';`,
    options: [
      "Nothing, this is totally fine!",
      "SyntaxError. You cannot add properties to a function this way.",
      "'Woof' gets printed.",
      "ReferenceError",
    ],
    answer: "Nothing, this is totally fine!",
  },
  {
    id: 4,
    question: `
    const shape = {
        radius: 10,
        diameter() {
            return this.radius * 2;
          },
        perimeter: () => 2 * Math.PI * this.radius,
    };
    console.log(shape.diameter());
    console.log(shape.perimeter());`,
    options: [
      "20 and 62.83185307179586",
      "20 and NaN",
      "20 and undefined",
      "NaN and 63",
    ],
    answer: "20 and NaN",
  },
  {
    id: 5,
    question: `
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
    }
    for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
    }`,
    options: [
      "0 1 2 and 0 1 2",
      "0 1 2 and 3 3 3",
      "3 3 3 and 0 1 2",
      "3 3 3 and 3 3 3",
    ],
    answer: "3 3 3 and 0 1 2",
  },
];
