'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require('fs');
const request = require('request');
const path = require('path');
const ora = require('ora');
const cliSpinners = require('cli-spinners');
clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:rexulec@gmail.com");
                    console.log("\nYeyy! I'll wait your mail :)\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Bye. See ya later!\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("                   Mert Dogu"),
    handle: chalk.white("@rexulec"),

    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("rexulec"),
    github: chalk.gray("https://github.com/") + chalk.green("rexulec"),
    instagram: chalk.gray("https://instagram.com/") + chalk.blue("itjustmert"),
    web: chalk.cyan("http://rexulec.com"),
    npx: chalk.red("npx") + " " + chalk.white("rexulec"),

    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelInstagram: chalk.white.bold("  Instagram:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name} / ${data.handle}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelInstagram}  ${data.instagram}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "Hi, My name is Mert. I am a young developer from Turkey."
        )}`,
        `${chalk.italic("I am student, developer and designer. I try to code python")}`,
        `${chalk.italic(
            "apps in my free time. I have been using Adobe Photoshop,"
        )}`,
        `${chalk.italic(
            "After Effect and Illustrator for 3 years."
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);

prompt(questions).then(answer => answer.action());
