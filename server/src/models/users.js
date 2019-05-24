const mongoose = require('mongoose')
require('../db/mongoose')
const validator = require('validator')
var passwordValidator = require('password-validator')

var passwordScan = new passwordValidator();
passwordScan
    .is().min(8)
    .is().max(100)
    .has().uppercase()
    .has().lowercase()
    .has().digits()
    .has().not().spaces()
    .is().not().oneOf(['Passw0rd', 'Password123', 'password']);

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            let errList = passwordScan.validate(value, {
                list: true
            })
            if (errList.length != 0) {
                let output = "Password must "
                for (const error of errList) {
                    switch (error) {
                        case 'min':
                            output += 'has a minimum length of 8, '
                            break;
                        case 'max':
                            output += 'has a maximum length of 100, '
                            break;
                        case 'uppercase':
                            output += 'has atleast one uppercase letter, '
                            break;
                        case 'lowercase':
                            output += 'has atleast one lowercase letter, '
                            break;
                        case 'digits':
                            output += 'has atleast one digit, '
                            break;
                        case 'spaces':
                            output += 'not has any spaces, '
                            break;
                        case 'oneOf':
                            output += 'not be one of Passw0rd or Password123 or password, '
                            break;
                    }
                }
                output = output.substring(0, output.length - 2) + '.'
                throw new Error(output)
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    },
    address: {
        //optional
        type: String,
        trim: true
    },
    phone: {
        //optional
        type: String,
        trim: true,
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User