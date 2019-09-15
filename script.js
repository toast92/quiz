let characters = [
    {
        name: 'marceline',
        score: 0
    },
    {
        name: 'jake',
        score: 0
    },
    {
        name: 'fin',
        score: 0
    }
];

let votes = document.querySelectorAll('input:checked');

Array.from(votes).forEach(vote => {
    // looop over characters and update the right character\s score
    characters.forEach(character => {
        if(vote.value == character.name) {
            character.score++;
        }
    });
})

// loop over characters to find character with the highest score

let winner = {score: 0};
characters.forEach(character => {
    if(character.score > winner.score) {
        winner = character;
    }
});

console.log(characters);

console.log(winner)

