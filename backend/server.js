const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
// import db from 'sqlite'; 
const { UsersRouter } = require('./routes/Users')
const { GenresRouter } = require('./routes/Genres')
const { ShowsRouter } = require('./routes/Shows')
const { CommentsRouter } = require('./routes/Comments')

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

app.get('/', async (req, res) => { res.send('bpop!')})

app.use('/users', UsersRouter);
app.use('/genres', GenresRouter)
app.use('/shows', ShowsRouter)
app.use('/comments/', CommentsRouter)
