import fs from "fs";
import { glob } from "glob";

async function getTestFiles(path) {
  console.log("Getting test files...");
  return await glob(path, { ignore: ["node_modules/**"] });
}

async function getFileContent(path) {
  return await fs.promises.readFile(path, "utf8");
}

export { getTestFiles, getFileContent };
