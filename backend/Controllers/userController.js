'use strict'
const express = require('express');
const mongoose = require('../DBConfig/railwayDBConfig');
const userSchema = mongoose.model('User');

let userController = function () {

    this.insertUser = (data) => {
        return new Promise((resolve, reject) => {
            const user = new userSchema({
                name: data.name,
                email: data.email,
                phone: data.phone,
                password: data.password,
                loyalty: "0"
            });

            user.save().then(() => {
                resolve({ status: 200, messege: "User is added" });
            }).catch((error) => {
                reject({ status: 500, error: "Error" + error });
            });

        });
    }

    this.getAllUser = () => {
        return new Promise((resolve, reject) => {
            userSchema.find().exec()
                .then((data) => {
                    resolve({ status: 200, userdata: data });
                }).catch((error) => {
                    reject({ status: 500, error: "Error" + error });
                });
        });
    }

    this.deleteUser = (id) => {
        return new Promise((resolve, reject) => {
            userSchema.remove({ _id: id }).exec()
                .then(() => {
                    resolve({ status: 204, messege: "User Deleted" });
                }).catch((err) => {
                    reject({ status: 500, messege: "Error" + err });
                });
        });
    }

    this.checkEmailAndPassword = (email, password) => {
        return new Promise((resolve, reject) => {
            userSchema.find({ email: email }).exec()
                .then((data) => {
                    //check if resulsts are empty
                    if (data == '') {
                        resolve({ status: 404, messege: "No Such User Email" });
                    } else {
                        if (data[0].password == password) {
                            resolve({
                                status: 200,
                                details: {
                                    name: data[0].name,
                                    email: data[0].email,
                                    phone: data[0].phone,
                                    loyalty: data[0].loyalty
                                }
                            });
                        }
                        else
                            resolve({ status: 404, messege: "Wrong Password" });
                    }
                }).catch((error) => {
                    reject({ status: 500, messege: "Error" + error });
                });
        });
    }

    this.updateUser = (email, data) => {
        return new Promise((resolve, reject) => {
            userSchema.update({ email: email }, data).exec()
                .then(() => {
                    resolve({ status: 200 })
                }).catch((error) => {
                    reject({ status: 500, message: "Error" + error })
                })
        });
    }


}

module.exports = new userController();