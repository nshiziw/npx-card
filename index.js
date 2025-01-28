#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';

// Boxen options for styling
const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'green',
};

// Content of the business card
const data = {
    name: chalk.bold.white('Wilson Nshizirungu'),
    title: chalk.green('CTO at WacTechX'),
    website: chalk.cyan('https://wactechx.com'),
    github: chalk.gray('https://github.com/') + chalk.cyan('wilsonnshizirungu'),
    linkedin: chalk.gray('https://linkedin.com/in/') + chalk.cyan('wilsonnshizirungu'),
    npx: chalk.yellow('npx wilson_nshizirungu'),
};

const output = `
${data.name}
${data.title}

🌐 ${data.website}
🐙 ${data.github}
🔗 ${data.linkedin}

Run me with ${data.npx}
`;

console.log(boxen(output, options));
