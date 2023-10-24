import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

// 
async function readQuestions() {
  try {
    const currentFileURL = import.meta.url;
    const currentFilePath = fileURLToPath(currentFileURL);
    const directoryName = path.dirname(currentFilePath);
    const filePath = path.join(directoryName, 'data', 'questions.json');

    const data = await readFile(filePath, 'utf8');
    const questions = JSON.parse(data);
    console.log(questions);
  } catch (err) {
    console.error('Error reading questions file:', err);
  }
}

readQuestions();
