'use strict'
const express = require("express");
const userRoute = express.Router();
const userController = require("../Controllers/userController");

userRoute.post('/', (request, response) => {
    console.log(request.body);
    userController.insertUser(request.body)
        .then((data) => {
            response.status(data.status).send(data.messege);
        }).catch((error) => {
            response.status(error.status).send(error.error);
        })
});


userRoute.get('/:email&:password', (request, response) => {

    let email = Buffer.from(request.params.email, 'base64').toString('ascii');
    let password = Buffer.from(request.params.password, 'base64').toString('ascii');

    userController.checkEmailAndPassword(email, password)
        .then((data) => {
            response.status(data.status).send(data.details);
        }).catch((error) => {
            response.status(error.status).send(error.messege);
        });
});

userRoute.get('/', (request, response) => {

    userController.getAllUser()
        .then((data) => {
            response.status(data.status).send(data.userdata);
        }).catch((error) => {
            response.status(error.status).send(error.error);
        });
});

userRoute.delete('/:id', (request, response) => {

    userController.deleteUser(request.params.id)
        .then((data) => {
            response.status(data.status).send({ messege: data.userdata });
        }).catch((error) => {
            response.status(error.status).send(error.messege);
        });


});

userRoute.put('/:email', (request, response) => {

    let email = Buffer.from(request.params.email, 'base64').toString('ascii');
    userController.updateUser(email, request.body)
        .then((data) => {
            response.status(data.status).send();
        }).catch((error) => {
            response.status(error.status).send(error.message)
        })
})

module.exports = userRoute;