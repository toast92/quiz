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
        name: 'finn',
        score: 0
    },
    {
        name: 'PB',
        score: 0
    }
];

let votes = document.querySelectorAll('input:checked');

let submitButton = document.querySelector('.submit-button');

let winner = {score: 0};

const resetScores = () => {
    //reset score of each character
    characters.forEach(character => {
        character.score = 0;
    });
}

const setCharacterScore = () => {
    Array.from(votes).forEach(vote => {
        // looop over characters and update the right character\s score
        characters.filter(character => {
            if(vote.value == character.name) {
                character.score++;
            }
        });
    });
}

const findWinner = () => {
    //loop over characters to find character with the highest score
    characters.find(character => {
        if(character.score > winner.score) {
            winner = character;
        }
    });
    return winner;
}

const showResults = () => {
    characters.forEach(character => {
        if(winner.name == character.name) {
            console.log(`Congratulations, your character is ${winner.name} with ${winner.score} points`);
        }
    });
}

submitButton.addEventListener('click', () => {
    resetScores();
    setCharacterScore();
    findWinner();
    showResults();
});
