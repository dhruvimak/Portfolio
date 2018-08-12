const express = require('express');
const app = express();


app.use(express.static(__dirname + '/dist');

app.get('/', (req, res) => res.sendFile('/dist/index.html'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))