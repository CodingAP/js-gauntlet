import path from 'path';
import express from 'express';
import apiRouter from './src/api.js';
import stageRouter from './src/stage.js';

const __dirname = path.resolve();

const app = express();
const port = 1338;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use('/api', apiRouter);
app.use('/stage', stageRouter);
app.use('/', express.static(path.join(__dirname, '/public')));

app.listen(port, () => {
    console.log(`JS Gauntlet app listening on port ${port}`)
});