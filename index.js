import emoji from 'node-emoji';

// console.log(emoji.random().emoji);

// console.log(process.argv[2]);

const chosenEmoji = process.argv[2];

if (chosenEmoji === undefined) {
  console.log(emoji.random().emoji);
} else if (emoji.hasEmoji(chosenEmoji)) {
  console.log(emoji.get(chosenEmoji));
} else {
  console.log('This emoji does not exist');
}
