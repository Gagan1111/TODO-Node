SELECT * FROM Kanbantasks WHERE category = ? AND user = ? ORDER BY tasks.dueDate ASC; --get tasks from a selected category ordered by dueDate

INSERT INTO Kanbantasks VALUES(NULL,?,?,?,?,?,?,NULL); --create a new task

DELETE FROM Kanbantasks WHERE tasks.id = ?; --delete tasks

UPDATE Kanbantasks SET category = ? WHERE task.id = ?; --change category of task

SELECT id FROM Kanbantasks WHERE user = ? ORDER BY created DESC LIMIT 1 --get id from latest task from user