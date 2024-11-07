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
let classmates = [
    {"id":1, "accessNumber":"B3355", "name":"Tabby"},
    {"id":2, "accessNumber":"B2144", "name":"Tabby"},
    {"id":3, "accessNumber":"B3864", "name":"Tabby"},
    {"id":4, "accessNumber":"B3478", "name":"Tabby"},
    {"id":5, "accessNumber":"B2445", "name":"Tabby"},
    {"id":6, "accessNumber":"B3476", "name":"Tabby"},
    {"id":7, "accessNumber":"B3256", "name":"Tabby"},
    {"id":8, "accessNumber":"B3346", "name":"Tabby"},
    {"id":9, "accessNumber":"B3845", "name":"Tabby"},
    {"id":10, "accessNumber":"B3437", "name":"Tabby"},
]
app.get('/list-of-classmates', (request,response) => {
    return response.send(classmates)
})


// Route Parameters /Request parameter
//The request received data from the from end

app.get('/list-of-friends-by-id/:id', (request,response) => {
    console.log("Login request params",request.params);

    console.log("Use the value from front end", request.params.id);

    for (i = 0; id < 10; id++) {
        //Comparing what the user from the front end
        if(request.params.id == students[i].id)
            return.response.send(students[i]);

        console.log(classmates[i]);
        
        
    }
    //Sending a respense with a status of 400
    return response.status(400).send("Found nothing")
    
});





app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});