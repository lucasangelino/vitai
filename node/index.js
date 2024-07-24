import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { getFileContent, getTestFiles } from "./utils.js";

const app = express();
const port = 3001;

const TEST_DIRECTORY = `A:/LukioDevA/vitai/src/**/*.test.jsx`;

app.use(cors());

app.get("/files", async (req, res) => {
  const files = await getTestFiles(TEST_DIRECTORY);
  console.log(files);
  res.json(files);
});

app.get("/content", async (req, res) => {
  const { file } = req.query;
  console.log(file);
  const content = await getFileContent(file);
  res.json(content);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
