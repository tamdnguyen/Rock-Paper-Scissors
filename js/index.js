let WIN = 0;
let LOSE = 0;
let TIE = 0;

// This function generates a random int in range [min, max)
const getRandInt = (min, max) => { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// This function is the main function. The progression of the game is commented below.
const clickHand = (hand) => {
    // hide the current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    
    // show the contest result view
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    //set the button user clicked
    let image_hand = "";
    let image_comp = "";
    let comp = compHand();

    // show the button that user clicked and computer chose
    image_hand = "buttons/" + hand +  ".png";
    image_comp = "buttons/" + comp +  ".png";
    document.getElementById("user-button").src = image_hand;
    document.getElementById("computer-button").src = image_comp;
    
    // get the result of the game
    let result = compare(hand, comp);
    document.getElementById("game-result").innerHTML = result;

    // update the scoreboard
    if (result === "You lost"){
        LOSE++;
        document.getElementById("lose").innerHTML = LOSE;
    }
    else if (result === "You won"){
        WIN++;
        document.getElementById("win").innerHTML = WIN;
    }
    else{
        TIE++;
        document.getElementById("tie").innerHTML = TIE;
    }
}

const restart = () => {
    // show back the buttons view
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
    
    // hide the current page
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
}

// This function generates the computer choice
const compHand = () => { 
    //set the button computer choose randomly
    let hands = ["Rock", "Paper", "Scissors"];
    // get a random number ranging from 0-2 (inclusive)
    let comp_pick = getRandInt(0, 3);

    return hands[comp_pick];
}

// This function compares the choice of user vs comp and decide
// the result to be WIN, LOSE, or TIE
const compare = (hand, comp) => {
    if (hand === "Rock"){
        if (comp === "Paper"){
            return "You lost";
        }
        else if (comp === "Scissors"){
            return "You won";
        }
        else{
            return "Tie";
        }
    }
    else if (hand === "Paper"){
        if (comp === "Rock"){
            return "You won";
        }
        else if (comp === "Scissors"){
            return "You lost";
        }
        else{
            return "Tie";
        }
    }
    else if (hand === "Scissors"){
        if (comp === "Rock"){
            return "You lost";
        }
        else if (comp === "Scissors"){
            return "Tie";
        }
        else{
            return "You won";
        }
    }
}
