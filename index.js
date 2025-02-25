class Card{
    constructor(suit, name, value) {
        this.name = name;
        this.suit = suit;
        this.value = value;
    }
}

class Deck{
    constructor() {
        this.cards = [];
        this.suits = ['Hearts' , 'Spades' , 'Diamonds' , 'Clubs'];
        this.names = ['A' ,'2', '3', '4' ,'5', '6', '7', '8','9','10','J','Q','K'];
        this.values = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    }


createDeck() {
    console.log("Creating a new Deck");
    for (let i = 0; i < this.suits.length; i++) {
        for (let n = 0; n < this.names.length; n++) {
            this.cards.push(new Card(this.suits[i],this.names[n], this.values[n]))
        }
    }
};
//shuffling cards
shuffleDeck() {
    console.log('Shuffling Deck');
    const shuffleDeck = [];
    for (let i = 0; i < 52; i++) {
        let randomPosition = Math.floor((this.cards.length - i) * Math.random());
        let randomItem = this.cards.splice(randomPosition, 1);
        shuffleDeck.push(...randomItem);
    }
return shuffleDeck;
}

dealDeck(players, shuffledCards) {
    console.log('Dealing Cards');
    let dealingCards1 = shuffledCards.splice(0, 26);
    players[0].hands.push(...dealingCards1);
    let dealingCards2 = shuffledCards.splice(0,26);
    players[1].hands.push(...dealingCards2);
}
}


//creating players
class Players {
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.hands = [];
    }
    }
    class Game{
        constructor(){
this.players = [];
        }
    
//to start the game
//creating players and assigning names,
    start() {
this.players.push(new Players('Maya'));
this.players.push(new Players('Amy'));
console.log('Declare war!!', this.players);
    

//creating deck and shuffle cards
let myDeck = new Deck();
myDeck.createDeck();
let shuffleDeck = myDeck.shuffleDeck();

//deal cards to players
myDeck.dealDeck(this.players, shuffleDeck);


//game playing method
this.playGame();
//outcome of game
this.endGame();
}

 // game play method
playGame() {
    console.log('Declare war');
    let player1 = this.players[0];
    let player2 = this.players[1];
    
    let roundWinner = '';
    let turn = 0;

    while (player1.hands.length !== 0 && player2.hands.length !== 0) {
        let player1Card = player1.hands.pop();
        let player2Card = player2.hands.pop();
        if (player1Card.value > player2Card.value) {
            roundWinner = player1.name;
            player1.points += 1;
            console.log('Turn:', (turn += 1), 'n\Player 1 card:', player1Card.name, 'of', player1Card.suit,'\nPlayer 2 card:', player2Card.name, 'of', player2Card.suit, '\nPlayer 1 card:');
        }
            else if (player2Card.value > player1Card.value) {
                roundWinner = player2.name;
                player2.points += 1;
                console.log('Turn:', (turn += 1), 'n\Player 1 card:', player1Card.name, 'of', player1Card.suit,'\nPlayer 2 card:', player2Card.name, 'of', player2Card.suit, '\nPlayer 1 card:');
            }
            else {
                console.log('Turn:', (turn += 1), 'n\Player 1 card:', player1Card.name, 'of', player1Card.suit,'\nPlayer 2 card:', player2Card.name, 'of', player2Card.suit, '\nPlayer 1 card:');
            }
        }
    }

    endGame() {
        let gameWinner = '';
        let player1 = this.players[0];
        let player2 = this.players[1];
        let winnerPoints = 0;

        //comparing the points
        if (player1.points > player2.points) {
            gameWinner = player1.name;
            winnerPoints = player1.points;
            console.log('Game over!' +"Won the game!\nFinal scores:\n" + player1.name + ": "+ player1.points + "\n" + player2.name + ':' + player2.points + "n\Thanks for playing!");
        } else if (player2.points > player1.points) {
            gameWinner = player2.name;
            winnerPoints = player2.points;
            console.log('Game over!' +"Won the game!\nFinal scores:\n" + player1.name + ": "+ player1.points + "\n" + player2.name + ':' + player2.points + "n\Thanks for playing!");
        } else {
            console.log('Game over! \nTied game\nFinal scores:\n' + player1.name + ": "+ player1.points + "\n" + player2.name + ':' + player2.points + "n\Thanks for playing!");
        }
    }
}
    let game = new Game();
    game.start();