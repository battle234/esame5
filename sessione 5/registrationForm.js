"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationForm = void 0;
var formErrors_1 = require("./formErrors");
// Definizione della classe RegistrationForm
var RegistrationForm = /** @class */ (function () {
    function RegistrationForm() {
        this.userData = {
            name: '',
            postalCode: '',
            address: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
        this.status = 'IDLE';
    }
    RegistrationForm.prototype.updateData = function (field, value) {
        if (value === "") {
            console.error("".concat(field, " is required and cannot be empty."));
            return; // Interrompe l'esecuzione se il campo è vuoto
        }
        this.userData[field] = value;
        this.printData();
    };
    RegistrationForm.prototype.submit = function () {
        try {
            this.validateData();
            this.printStatus();
        }
        catch (error) {
            console.error(error.message);
        }
    };
    RegistrationForm.prototype.validateData = function () {
        if (!this.userData.name) {
            throw new formErrors_1.RequiredFieldError('Name');
        }
        if (!this.userData.postalCode) {
            throw new formErrors_1.RequiredFieldError('Postal Code');
        }
        else if (!this.isValidPostalCode(this.userData.postalCode)) {
            throw new formErrors_1.PostalCodeFormatError();
        }
        if (!this.userData.address) {
            throw new formErrors_1.RequiredFieldError('Address');
        }
        if (!this.userData.email) {
            throw new formErrors_1.RequiredFieldError('Email');
        }
        else if (!this.isValidEmail(this.userData.email)) {
            throw new formErrors_1.EmailFormatError();
        }
        if (!this.userData.password) {
            throw new formErrors_1.RequiredFieldError('Password');
        }
        if (this.userData.password !== this.userData.confirmPassword) {
            throw new formErrors_1.PasswordMismatchError();
        }
        this.status = 'SUCCESS';
    };
    RegistrationForm.prototype.isValidEmail = function (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    RegistrationForm.prototype.isValidPostalCode = function (postalCode) {
        return /^\d{5}$/.test(postalCode);
    };
    RegistrationForm.prototype.printData = function () {
        console.log('Current User Data:', JSON.stringify(this.userData, null, 2));
    };
    RegistrationForm.prototype.printStatus = function () {
        console.log('Current Form Status:', this.status);
    };
    return RegistrationForm;
}());
exports.RegistrationForm = RegistrationForm;
// Creazione e utilizzo della classe RegistrationForm
var form = new RegistrationForm();
form.updateData('name', 'Giovanni Rossi');
form.updateData('postalCode', '20123');
form.updateData('address', 'Via Buonarroti 10');
form.updateData('email', 'Giovanni.rossi@example.com');
form.updateData('password', 'password123');
form.updateData('confirmPassword', 'password123');
form.submit();
