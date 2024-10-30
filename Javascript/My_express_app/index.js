const express = require('express');
const app = express();
const port = 3000;

//GET (sending a request to the application to get you someting)
//('/') this is an end point tht does a particular thing

app.get('/', (req, res) => {
res.send('Hello World!');
});

app.get('/greetings', (request,response) => {
    return response.send('How are you today')
})


app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});