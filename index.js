import readline from "readline-sync";
import chalk from "chalk";

import { easyQuestions, mediumQuestions } from "./questions.js";

let score = 0;
let wrongAnswer = 0;
function init() {
  console.log(
    `Heyy ! Welcome to ${chalk.bold.inverse("KAUN BANEGA DEVELOPER")} challenge`
  );
  if (readline.keyInYN("Do you want to play Game")) {
    console.log(chalk.bgYellow("\n*********** Game Rule ****************"))
    console.log(chalk.bgYellow("You get one lifeline chance to revive\n"))
    playGame(easyQuestions);
  } else {
    return;
  }
}
function playGame(questionType) {
  for (let i = 0; i < questionType.length; i++) {
    const { id, question, options, answer } = questionType[i];
    console.log(
      chalk.bgBlack.bold.inverse(`Q[${id}]: What's the answer? \n ${question}`)
    );
    const index = readline.keyInSelect(options, "Select options from ");

    if (index === -1) {
      console.log(chalk.red(`BYE ,Hope you come back soon . Your total Score was ${score - wrongAnswer}`))
      return;
    }
    if (options[index] === answer) {
      score++;
      if (score === (easyQuestions.length - wrongAnswer)) {
        console.log(
          chalk.bold.green(
            `🎉 Congratulation You have completed Level One of this game 
            LEVEL 2 starts now
            `
          )
        );
        playGame(mediumQuestions);

        // levelTwo();
      } else if (score === ((easyQuestions.length + mediumQuestions.length) - wrongAnswer)) {
        console.log(
          chalk.bold.green(
            `🎉 Congratulation You have completed All Levels  of this game :
            Your total Score summary :-
            Correct Answer: ${score}
            Wrong Answer : ${wrongAnswer}`
          )
        );
        return;
      } else {

        console.log(chalk.green("Correct Answer Move Ahead\n"));
        // console.clear();


      }
    } else {
      wrongAnswer++;
      if (wrongAnswer === 2) {
        console.log(chalk.red("Wrong Answer , Better luck next time till then , Practice more JS questions"))
        console.log(chalk.bold.green(`Total Score : ${score - wrongAnswer}`));
        return;
      }
      console.log(chalk.red("Wrong Answer ,Play carefully ,No lifeline remaining now \n"));
    }
  }

}
/*
const levelOne = () => {
  playGame(easyQuestions);
  if (score === 7) {
    console.log(
      chalk.bold.green(
        `🎉 Congratulation You have completed Level One of this game : ${score}`
      )
    );
    levelTwo();
  }
  return;
};
const levelTwo = () => {
  playGame(mediumQuestions);
  if (score === 12) {
    console.log(
      chalk.bold.green(
        `🎉 Congratulation You have completed All Levels  of this game :You are now certified as Javascript Intermediate `
      )
    );
    return;
  }
  return;
};
*/
init();
