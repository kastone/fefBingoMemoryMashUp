// -TODO use array of objects {xaxis:, yaxis, text}
// -template / query selector

// Look at events in console. click events etc.
// Click even, keyup event
// for loop
// splice to remove item from array
// checkbox.onChange
// localStorage
// JSON.stringify - JSON.parse serializing
// local storage + APIs


const words = ['Lighthouse', 'Primary color', 'sans-serif', 'SEO', 'graphic profile',
'secondary color', 'color wheel', 'UI/UX', 'gitmoji', 'React',
'Vue', 'Sass', 'Illustrator', 'Photoshop', 'Figma',
'pull request', 'API', 'a11y', 'Internet Explorer', 'WordPress',
'Heroku', 'HTML', 'router', 'responsive', 'agile',
];

// words = this.shuffle(this.words);

const cards = document.querySelectorAll(".card");
cards.forEach((card, i) => { // loop over the set of cards. For each `card`...
    card.addEventListener("click", highlightCard); // add a click event listener to the current card to execute a function `flipCard` when clicked
});

function highlightCard(evt) {
    console.log('highlightCard was executed');
    console.log(evt);
    const clickedCard = evt.target;
    clickedCard.classList.add("highlighted"); 
  }

function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      // eslint-disable-next-line no-plusplus
      currentIndex--;
      // And swap it with the current element.
      // eslint-disable-next-line no-param-reassign
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}