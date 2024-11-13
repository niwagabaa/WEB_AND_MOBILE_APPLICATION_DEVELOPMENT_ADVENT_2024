const express = require('express');
const my_business_logic = require('./service/my_business_logic');
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

//An End point of the list of my firends
let friends = [
    {"id":1, "name":"Tabby"},
    {"id":2, "name":"Bruno"},
    {"id":3, "name":"Kapesh"},
    {"id":4, "name":"Lolo"},
    {"id":5, "name":"Simon"},
    {"id":6, "name":"Tabby"},
]
app.get('/list-of-friends', (request,response) => {
    return response.send(friends)
})

//End point with a list of my classmates

app.get('/list-of-classmates', (request,response) => {
    return response.send(classmates)
})


// Route Parameters /Request parameter
//The request received data from the from end

app.get('/list-of-friends-by-id/:id', (request,response) => {
    console.log("Login request params",request.params);

    console.log("Use the value from front end", request.params.id);

    
    //Sending a respense with a status of 400
    return response.status(400).send("Found nothing")
    
});

//DATABASE CONNECTION
app.get('/get-all-the-students', (request,response) => {
    return 
})





app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});