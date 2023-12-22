import cors from 'cors';
import express from 'express';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/Register', (req, res) => {
    console.log(req.body.username);
    res.send(`Registration Successful for user : ${req.body.username}`)
});

app.post('/Login', (req, res) => {
    console.log(req.body.username);
    res.send(`Login Successful for user: ${req.body.username}`)
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
