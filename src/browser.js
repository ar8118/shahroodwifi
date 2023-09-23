import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export function getBrowserPath() {
  const packageJsonPath = join(
    dirname(fileURLToPath(import.meta.url)),
    "..",
    "package.json"
  );

  const packageJson = JSON.parse(readFileSync(packageJsonPath));

  return packageJson.config.chromeExecutable;
}
