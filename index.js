#!/usr/bin/env node
import { Command } from "commander";
import playwright from "playwright";

const program = new Command();

program
  .name("fresher")
  .description("A CLI utility to launch a fresh browser instance.")
  .version("0.1.3")
  .requiredOption(
    '-b, --browser <"chromium" | "firefox" | "webkit">',
    "browser to launch"
  )
  .option("-u, --url <string>", "initial url to open");

program.parse();

const options = program.opts();

async function main() {
  const browser = await playwright[options.browser].launch({
    headless: false, // setting this to true will not run the UI
  });

  const page = await browser.newPage();
  await page.goto(options.url || "https://www.duckduckgo.com");
}

main();
