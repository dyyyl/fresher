#!/usr/bin/env node
import { program } from 'commander';
import playwright from 'playwright';

program
  .name('fresher')
  .description('A CLI utility to launch a fresh browser instance.')
  .version('0.1.0')
  .requiredOption('-b, --browser <"chromium" | "firefox" | "webkit">')
  .option('-u, --url <string>');

program.parse();

const options = program.opts();

async function main() {
  const browser = await playwright[options.browser].launch({
    headless: false, // setting this to true will not run the UI
  });

  const page = await browser.newPage();
  await page.goto(options.url || 'https://www.duckduckgo.com');
}

main();
