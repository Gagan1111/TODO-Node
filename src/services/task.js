import { executeQuery } from './database.js';

export async function getAllTasksByCategory(category, user) {
    return await executeQuery(`SELECT * FROM Kanbantasks WHERE category = '${category}' AND user = '${user}' ORDER BY Kanbantasks.dueDate ASC;`);
}

export async function addTask(category, title, content, dueDate, user) {
    const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
    return await executeQuery(`INSERT INTO Kanbantasks VALUES('NULL', '${category}', '${title}', '${content}', '${dueDate}', '${user}', '${timestamp}')`);
}

export async function deleteTaskById(id) {
    await executeQuery(`DELETE FROM Kanbantasks WHERE Kanbantasks.id = '${id}'`);
}

export async function getIdOfLastAddedTask(user) {
    return await executeQuery(`SELECT id FROM Kanbantasks WHERE user = '${user}' ORDER BY created DESC LIMIT 1`);
}

export async function changeCategory(id, category) {
    await executeQuery(`UPDATE Kanbantasks SET category = '${category}' WHERE Kanbantasks.id = '${id}'`);
}
