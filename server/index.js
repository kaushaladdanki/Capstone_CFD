const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');

const port = process.env.PORT || 8000;

//back ticks = `` these allow for interpolation of variables inside string like we do for port below
app.listen(port, () => console.log(`Server started on port ${port}`));

