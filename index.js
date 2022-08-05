const words = ['Jaws', 'Avatar', 'Sonic'].map(i => i.toLowerCase());
const TRY_MAX = 6;
const prompt = require('prompt-sync')();
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z'];

const mask = "_ ";

const skeleton = [
  `
    |  (_)   
    |            
    |
    |
  `,
  `
    |  (_)   
    |   |  
    |   |
    |   
  `,
  `
    |  (_)   
    | --| 
    |   |
    |
  `,
  `
    |  (_)   
    | --|--
    |   |
    |
  `,
  `
    |  (_)   
    | --|--
    |   |
    |  | 
  `,
  `
    |  (_)   
    | --|--
    |   |
    |  | |
  `
]

async function start() {

  const indexSelected = prompt(`Choose your number between 1 and ${words.length}? `);
  const word = words[(Number(indexSelected) - 1)].split("");

  let label = word.map(() => mask);

  console.log(label.join(""));


  let userTry = 0;
  let gameOver = false;

  while (userTry < TRY_MAX && !gameOver) {
    let letter = prompt(`Choose a letter: `).toLowerCase();

    if (!alphabet.includes(letter)) {
      console.log("Write a letter, mother f#@ck");
    } else {
      if (word.some(l => l === letter)) {
        for (var index in word) {
          if (word[index] === letter) {
            label[index] = word[index];
          }
        }
      } else {
        console.log(`Your brain seems to be decorative...`)
        console.log(skeleton[userTry]);
        userTry++;
      }

    }

    if (!label.includes(mask)) {
      console.log("\nParabéns, você ganhou!")
      console.log("       ___________      ")
      console.log("      '._==_==_=_.'     ")
      console.log("      .-\\:      /-.    ")
      console.log("     | (|:.     |) |    ")
      console.log("      '-|:.     |-'     ")
      console.log("        \\::.    /      ")
      console.log("         '::. .'        ")
      console.log("           ) (          ")
      console.log("         _.' '._        ")
      console.log("        '-------'       \n")
      gameOver = true;
    }

    console.log(label.join(" "));
  }

  if (userTry === TRY_MAX) {
    console.log("Oh! To bad, you lose");
    console.log(`The word was ${word.join("")}`);
    console.log("    _______________         ")
    console.log("   /               \       ")
    console.log("  /                 \      ")
    console.log("//                   \/\  ")
    console.log("\|   XXXX     XXXX   | /   ")
    console.log(" |   XXXX     XXXX   |/     ")
    console.log(" |   XXX       XXX   |      ")
    console.log(" |                   |      ")
    console.log(" \__      XXX      __/     ")
    console.log("   |\     XXX     /|       ")
    console.log("   | |           | |        ")
    console.log("   | I I I I I I I |        ")
    console.log("   |  I I I I I I  |        ")
    console.log("   \_             _/       ")
    console.log("     \_         _/         ")
    console.log("       \_______/           ")
  }

}


async function run() {
    let playAgain = true;
    while(playAgain){
        await start();
        let resp =  prompt(`Play again?(Y/N) `);
    
        if(resp.toLowerCase() === "n"){
            playAgain = false;
            console.log("See you soon")
        }
    }

}

run();