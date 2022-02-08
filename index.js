#!/usr/bin/env node

import chalk from 'chalk';
import gradient from 'gradient-string';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms=2000) => new Promise((r) => setTimeout(r, ms));

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

async function askName() {
    const answer = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
        default() { 
            return 'Player';
        },
    }); 
    playerName = answer.player_name;
}

async function handleAnswer(isCorrect) {
    const spinner = createSpinner("Checking your answer...").start();
    await sleep();
    if (isCorrect) {
        spinner.success({ text: `Nice job ${playerName}! Continue to the next question!`});
    } else {
        spinner.error({ text: `Sorry ${playerName}, you are eliminated!`});
        process.exit(1);
    }
}

async function winner() {
    console.clear();
    const message = `Congrats ${playerName}! \n $ 1 , 0 0 0 , 0 0 0`;
    figlet(message, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    })
}

async function president_question() {
    const answer = await inquirer.prompt({
        name: 'president_question',
        type: 'list',
        message: 'Who was elected President of the United States in 2017?',
        choices: [
            'Donald Trump', //corect
            'Barack Obama',
            'George W. Bush',
        ],
    });
    return handleAnswer(answer.president_question == 'Donald Trump');
}

async function music_question() {
    const answer = await inquirer.prompt({
        name: 'music_question',
        type: 'list',
        message: 'When did Jonas Brothers make their comeback to the music world?',
        choices: [
            '2015',
            '2011',
            '2019', //corect
        ],
    });
    return handleAnswer(answer.music_question == '2019');
}

async function language_question() {
    const answer = await inquirer.prompt({
        name: 'language_question',
        type: 'list',
        message: 'What is the national language of Canada?',
        choices: [
            'English',
            'Dutch', //correct
            'French',
        ],
    });
    return handleAnswer(answer.language_question == 'Dutch');
}

async function animal_question() {
    const answer = await inquirer.prompt({
        name: 'animal_question',
        type: 'list',
        message: 'WWhat is the national animal of Pakistan?',
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