import Express from 'express'
import taskRouter from './routes/task.js';
import connectDB from './DB/connection.js';

const app = Express();

app.use(Express.json());

connectDB();

const baseRoute = `/api/v1`;
app.use(`${baseRoute}/tasks`, taskRouter);

app.get('/hello', (req, res) => {
    res.send('Task Manager App!');
});

const port = 3000;
app.listen(port, console.log(`server running on port ${port}!`));