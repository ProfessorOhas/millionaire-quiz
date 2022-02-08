#!/usr/bin/env node

import chalk from 'chalk';
import gradient from 'gradient-string';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
async function welcome() {
    const title = chalkAnimation.rainbow("Welcome to the 'Do you want to become a millionaire' game!");
    await sleep();

    console.log(`
    ${chalk.bgBlue('HOW TO PLAY')}
    You will get a serious of questions
    If you choose the wrong option, you will be ${chalk.bgRed('ELIMINATED')}.
    So you better choose the right options!
    `);
}
        choices: [
            'Peacock',
            'Markhor', //correct
            'Lion',
        ],
    });
    return handleAnswer(answer.animal_question == 'Markhor');
}

async function food_question() {
    const answer = await inquirer.prompt({
        name: 'food_question',
        type: 'list',
        message: 'A la Crecy is a French dish made of what?',
        choices: [
            'Apples',
            'Carrots', //correct
            'Potatoes',
        ],
    });
    return handleAnswer(answer.food_question == 'Carrots');
}

await welcome()
await askName();
await president_question();
await music_question();
await language_question();
await animal_question();
await food_question();
await winner();