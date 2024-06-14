export interface Question {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
  selectedAnswer?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: 'What color is the sky on a clear day?',
    answers: ['Red', 'Yellow', 'Blue', 'Green'],
    correctAnswer: 'Blue',
  },
  {
    id: 2,
    question: 'How many legs does a spider have?',
    answers: ['6', '8', '10', '12'],
    correctAnswer: '8',
  },
  {
    id: 3,
    question: 'What is 2 + 2?',
    answers: ['3', '4', '5', '6'],
    correctAnswer: '4',
  },
  {
    id: 4,
    question: "Which animal is known as man's best friend?",
    answers: ['Cat', 'Dog', 'Horse', 'Bird'],
    correctAnswer: 'Dog',
  },
  {
    id: 5,
    question: 'What do bees produce?',
    answers: ['Milk', 'Honey', 'Wool', 'Silk'],
    correctAnswer: 'Honey',
  },
  {
    id: 6,
    question: 'What shape is a soccer ball?',
    answers: ['Square', 'Triangle', 'Circle', 'Rectangle'],
    correctAnswer: 'Circle',
  },
  {
    id: 7,
    question: 'What do you call the time of year when leaves fall off trees?',
    answers: ['Spring', 'Summer', 'Autumn', 'Winter'],
    correctAnswer: 'Autumn',
  },
  {
    id: 8,
    question: 'Which fruit is yellow and curved?',
    answers: ['Apple', 'Banana', 'Orange', 'Grapes'],
    correctAnswer: 'Banana',
  },
  {
    id: 9,
    question: "What is the opposite of 'hot'?",
    answers: ['Warm', 'Cold', 'Cool', 'Mild'],
    correctAnswer: 'Cold',
  },
  {
    id: 10,
    question: 'Which planet do we live on?',
    answers: ['Mars', 'Venus', 'Earth', 'Jupiter'],
    correctAnswer: 'Earth',
  },
  {
    id: 11,
    question: "What is the name of the toy cowboy in 'Toy Story'?",
    answers: ['Buzz', 'Woody', 'Jessie', 'Rex'],
    correctAnswer: 'Woody',
  },
  {
    id: 12,
    question: 'What is 5 - 3?',
    answers: ['2', '3', '4', '5'],
    correctAnswer: '2',
  },
  {
    id: 13,
    question: 'Which day comes after Monday?',
    answers: ['Sunday', 'Tuesday', 'Wednesday', 'Thursday'],
    correctAnswer: 'Tuesday',
  },
  {
    id: 14,
    question: 'What is the primary color of an apple?',
    answers: ['Red', 'Blue', 'Yellow', 'Green'],
    correctAnswer: 'Red',
  },
  {
    id: 15,
    question: 'What do chickens lay?',
    answers: ['Milk', 'Eggs', 'Wool', 'Honey'],
    correctAnswer: 'Eggs',
  },
  {
    id: 16,
    question: 'What is the first letter of the alphabet?',
    answers: ['A', 'B', 'C', 'D'],
    correctAnswer: 'A',
  },
  {
    id: 17,
    question: 'How many wheels does a bicycle have?',
    answers: ['1', '2', '3', '4'],
    correctAnswer: '2',
  },
  {
    id: 18,
    question: 'What color are bananas?',
    answers: ['Red', 'Yellow', 'Blue', 'Green'],
    correctAnswer: 'Yellow',
  },
  {
    id: 19,
    question: 'What do cows drink?',
    answers: ['Milk', 'Water', 'Juice', 'Soda'],
    correctAnswer: 'Water',
  },
  {
    id: 20,
    question: 'What is the main ingredient in a salad?',
    answers: ['Chicken', 'Bread', 'Lettuce', 'Cheese'],
    correctAnswer: 'Lettuce',
  },
];
