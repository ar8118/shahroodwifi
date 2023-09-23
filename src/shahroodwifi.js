import { program } from "commander";
import { readFileSync } from "fs";
import { getCredit } from "./commands/credit.js";
import { login } from "./commands/login.js";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

/**
 *
 * @returns array in the format of [username, password]
 */
function makeCredentials(username) {
  const authFile = join(
    dirname(fileURLToPath(import.meta.url)),
    "..",
    "auth.json"
  );

  const db = JSON.parse(readFileSync(authFile));
  return [username, db[username]];
}

program
  .command("login <username>")
  .description("login to an account")
  .action((username) => {
    login(...makeCredentials(username));
  });

program
  .command("credit <username>")
  .description("get remaining credit for an account")
  .action((username) => {
    getCredit(...makeCredentials(username));
  });

program.parse();
