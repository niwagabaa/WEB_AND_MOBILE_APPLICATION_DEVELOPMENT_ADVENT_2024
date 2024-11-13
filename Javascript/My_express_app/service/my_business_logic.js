const myDb = require('../models/my_db');

const db = require('../models/db_connection');




//Funstion of getting all students
const getStudents = () => {
    return myDb.student;
}

// This function is getting student by ID

const getStudentById = (request) => {
    for (i = 0; id < 10; id++) {
        //Comparing what the user from the front end
        if(request.params.id == students[i].id)
            return response.send(students[i]);

        console.log(classmates[i]);
        
        return null;      
    }
}

//Funtion getting all stucents using the functions QUERY
const getAllStudents = () => {
    db.
    query('SELECT * FROM students',
        //Use 2 param err ,results
        (err,results) => {
            if(err){
                return "FOUND NOTHING/ERROR COM=NNECTING TO DB";
            }else{
                console.log("Results from db", results);
                return results;
            }
        }
    )
}

//exporting one function
//module.exports = getStudentById(); 

//exporting many functions
module.exports = {getAllStudents, getStudentById, getStudents}