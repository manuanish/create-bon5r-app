#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (error) {
    console.log(`Failed to execute command: ${command}`, error);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/manuanish/create-bon5r-app ${repoName}`;
const installDepsCommand = `cd ${repoName} && yarn install`;

console.log(`Lighting a new Bon5R called ${repoName}...`);
const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) process.exit();

console.log(`Installing dependencies for ${repoName}...`);
const installedDeps = runCommand(installDepsCommand);

if (!installedDeps) process.exit();

console.log();
console.log(
  `\x1b[32mSuccess! \x1b[0mCreated a new Bon5R called \x1b[36m${repoName}.`
);
console.log("\x1b[0mNow you can run several commands:");
console.log();
console.log(`  \x1b[36myarn dev`);
console.log("    \x1b[0mStarts the development server.");
console.log();
console.log(`  \x1b[36myarn build`);
console.log("    \x1b[0mBuilds the app for production.");
console.log();
console.log(`  \x1b[36myarn start`);
console.log("    \x1b[0mRuns the built app in production mode.");
console.log();
console.log("We suggest that you begin by typing:");
console.log();
console.log(`  \x1b[36mcd \x1b[0m${repoName}`);
console.log(`  yarn dev`);
console.log();
console.log(`Happy Hacking!`);
console.log();

try {
  execSync(`rm -rf ${repoName}/bin`, { stdio: "inherit" });
  execSync(`rm -rf ${repoName}/.git`, { stdio: "inherit" });
} catch (error) {
  console.log(error);
}
