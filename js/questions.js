// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Which year was the Lunar Probe Chandrayaan 1 Launched ?",
    answer: "2008",
    options: [
      "2023",
      "2019",
      "2008",
      "2003"
    ]
 },

{
    numb: 2,
    question: "Who painted the famous painting : The Starry Night?",
    answer: "Vincent Van Gogh",
    options: [
      "Vincent Van Gogh",
      "Pablo Picasso",
      "Leonardo Da Vinci",
      "Claude Monet"
    ]
 },

{
    numb: 3,
    question: "Which country is known as the Land of the Rising Sun?",
    answer: "Japan",
    options: [
      "Canada",
      "Japan",
      "Korea",
      "France"
    ]
 },

{
    numb: 4,
    question: "In which year did World War 1 Begin?",
    answer: "1914",
    options: [
      "1918",
      "1953",
      "1973",
      "1914"
    ]
 },

{
    numb: 5,
    question: "Who was the first woman to win a Nobel Prize?",
    answer: "Marie Curie",
    options: [
      "Grazia Deledda",
      "Yosuf Malala",
      "Marie Curie",
      "Mother Teresa"
    ]
 },

{
    numb: 6,
    question: "Which country is the largest producer of Coffee in the world?",
    answer: "Brazil",
    options: [
      "India",
      "Brazil",
      "Finland",
      "France"
    ]
 },

{
    numb: 7,
    question: "Who wrote the Harry Potter Book series ?",
    answer: "JK Rowling",
    options: [
      "JK Rowling",
      "William Shakespeare",
      "Agatha Christie",
      "Stephen King"
    ]
 },

{
    numb: 8,
    question: "What is the name of Sherlock Holmes' friend and assistant ?",
    answer: "Watson",
    options: [
      "James",
      "Watson",
      "John",
      "Charlie"
    ]
 },

{
    numb: 9,
    question: "America was discovered while looking for which landmass ?",
    answer: "India",
    options: [
      "Brazil",
      "Thailand",
      "India",
      "China"
    ]
 },

{
    numb: 10,
    question: "Which is the largest sea on earth ?",
    answer: "Philippine sea",
    options: [
      "Pacific ocean",
      "Philippine sea",
      "Red sea",
      "Dead sea"
    ]
 },

{
    numb: 11,
    question: "Who found Madras Institute of Technology",
    answer: "C.Rajam",
    options: [
      "Dr.A.P.J.Abdul Kalam",
      "C.Rajam",
      "M.Karunanidhi",
      "M.G.Ramachandran"
    ]
 },

{
    numb: 12,
    question: "Which Mathematician is known as the Father of Zero?",
    answer: "Aryabhata",
    options: [
      "Aryabhata",
      "Ramanujam",
      "Chanakya",
      "Pythagoras"
    ]
 },

{
    numb: 13,
    question: "Who made the famous Indian film Pather Panchali ?",
    answer: "Satyajit Ray",
    options: [
      "Dadasaheb Phalke",
      "S.S.Rajamouli",
      "Shankar",
      "Satyajit Ray"
    ]
 },

{
    numb: 14,
    question: "Who wrote the Sherlock Holmes' series of books ?",
    answer: "Arthur Conan Doyle",
    options: [
      "Arthur Conan Doyle",
      "Sudha Moorthy",
      "Roald Dahl",
      "JK Rowling"
    ]
 },

{
  numb: 15,
  question: " Which planet is known as the Red Planet ?",
  answer: "Mars",
  options: [
    "Venus",
    "Saturn",
    "Mars",
    "Pluto"
  ]
},
{
  numb: 16,
  question: " Who is the greek god of thunder ?",
  answer: "Zeus",
  options: [
    "Artemis",
    "Hermes",
    "Hades",
    "Zeus"
  ]
},

{
  numb: 17,
  question: " Who created the world wide web ?",
  answer: "Tik Berners-Lee",
  options: [
    "Charles Babbage",
    " Tik Berners-Lee ",
    " Alan Turing ",
    "Mark Zuckerberg"
  ]
},
{
  numb: 18,
  question: "What is the chemical symbol of Silver?",
  answer: "Ag",
  options: [
    "Au",
    "Si",
    "Pb",
    "Ag"
  ]
},
{
  numb: 19,
  question: "Who wrote the play Hamlet?",
  answer: "William Shakespeare",
  options: [
    "Oscar Wilde",
    "William Shakespeare",
    "Sylvia Plath",
    "Ben Jonson"
  ]
},
{
  numb: 20,
  question: "When did World War 2 end?",
  answer: "1945",
  options: [
    "1945",
    "1846",
    "1946",
    "1941"
  ]
},
{
  numb: 21,
  question: "What is the currency of Spain?",
  answer: "Euros",
  options: [
    "Riyal",
    "Pounds",
    "Euros",
    "Cents"
  ]
},
{
  numb: 22,
  question: "Who painted The Mona Lisa?",
  answer: "Leonardo Da Vinci",
  options: [
    "Picasso",
    "Leonardo Da Vinci",
    "Vincent Van Gogh",
    "Leonard Da Vince"
  ]
},
{
  numb: 23,
  question: "Which is the largest country in terms of land area ?",
  answer: "Russia",
  options: [
    "Russia",
    "Australia",
    "Finland",
    "United States Of America"
  ]
},
{
  numb: 24,
  question: "Which is the largest planet in our solar system ?",
  answer: "Jupiter",
  options: [
    "Venus",
    "Saturn",
    "Jupiter",
    "Pluto"
  ]
},
{
  numb: 25,
  question: "Which pole ( north/south) is the chandrayaan 3 mission aiming to land at ?",
  answer: "South",
  options: [
    "South",
    "North"
  ]
},
{
  numb: 26,
  question: "Which city is called the Big Apple?",
  answer: "New York",
  options: [
    "Paris",
    "Mexico",
    "London",
    "New York"
  ]
},
{
  numb: 27,
  question: "What is the capital city of Japan?",
  answer: "Tokyo",
  options: [
  "Kyoto",
  "Seoul",
  "Beijing",
  "Tokyo"
  ]
  },
  
  {
  numb: 28,
  question: "Which country is famous for the Taj Mahal?",
  answer: "India",
  options: [
  "Egypt",
  "India",
  "Turkey",
  "China"
  ]
  },
  
  {
  numb: 29,
  question: "What is the largest planet in our solar system?",
  answer: "Jupiter",
  options: [
  "Mars",
  "Venus",
  "Saturn",
  "Jupiter"
  ]
  },
  
  {
  numb: 30,
  question: "Which famous scientist developed the theory of general relativity?",
  answer: "Albert Einstein",
  options: [
  "Isaac Newton",
  "Marie Curie",
  "Charles Darwin",
  "Albert Einstein"
  ]
  },
  
  {
  numb: 31,
  question: "Which river is the longest in the world?",
  answer: "Nile",
  options: [
  "Amazon",
  "Nile",
  "Yangtze",
  "Mississippi"
  ]
  }
];