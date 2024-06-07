import fs from "fs";
import path from "path";

const notesFilePath = path.join(process.cwd(), 'notes.json');

/**
 * Helper function to read notes from the JSON file
 */
export const readNotes = () => {
    if (!fs.existsSync(notesFilePath)) {
        return [];
    }
    const data = fs.readFileSync(notesFilePath, 'utf-8');
    return JSON.parse(data);
};

/**
 * Helper function to write notes to the JSON file
 */
export const writeNotes = (notes) => {
    fs.writeFileSync(notesFilePath, JSON.stringify(notes, null, 2));
};