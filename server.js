const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

require('./ modules/user/routes')(app);

app.get('/', (req , res) => {
    res.send('Opa meu mel!');
});

app.listen(() => {
    console.log('Server running 🤘')
  });


app.listen(80);

