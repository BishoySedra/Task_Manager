import task from "../DB/models/task.js"

export function getAllTasks(req, res) {
    res.send('all items');
}

export function getTask(req, res) {
    res.send('get single task');
}

export function editTask(req, res) {
    res.send('edit task');
}

export async function addTask(req, res) {
    try {
        const newTask = await task.create(req.body);
        res.status(201).json({
            message: 'added new task successfully!',
            newTask
        });
    } catch (error) {
        res.json({ error });
    }
}

export function deleteTask(req, res) {
    res.send('delete task');
}