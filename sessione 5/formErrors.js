"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostalCodeFormatError = exports.PasswordMismatchError = exports.EmailFormatError = exports.RequiredFieldError = exports.FormError = void 0;
var FormError = /** @class */ (function (_super) {
    __extends(FormError, _super);
    function FormError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'FormError';
        return _this;
    }
    return FormError;
}(Error));
exports.FormError = FormError;
var RequiredFieldError = /** @class */ (function (_super) {
    __extends(RequiredFieldError, _super);
    function RequiredFieldError(field) {
        var _this = _super.call(this, "".concat(field, " is required.")) || this;
        _this.name = 'RequiredFieldError';
        return _this;
    }
    return RequiredFieldError;
}(FormError));
exports.RequiredFieldError = RequiredFieldError;
var EmailFormatError = /** @class */ (function (_super) {
    __extends(EmailFormatError, _super);
    function EmailFormatError() {
        var _this = _super.call(this, 'Invalid email format.') || this;
        _this.name = 'EmailFormatError';
        return _this;
    }
    return EmailFormatError;
}(FormError));
exports.EmailFormatError = EmailFormatError;
var PasswordMismatchError = /** @class */ (function (_super) {
    __extends(PasswordMismatchError, _super);
    function PasswordMismatchError() {
        var _this = _super.call(this, 'Passwords do not match.') || this;
        _this.name = 'PasswordMismatchError';
        return _this;
    }
    return PasswordMismatchError;
}(FormError));
exports.PasswordMismatchError = PasswordMismatchError;
var PostalCodeFormatError = /** @class */ (function (_super) {
    __extends(PostalCodeFormatError, _super);
    function PostalCodeFormatError() {
        var _this = _super.call(this, 'Invalid postal code format.') || this;
        _this.name = 'PostalCodeFormatError';
        return _this;
    }
    return PostalCodeFormatError;
}(FormError));
exports.PostalCodeFormatError = PostalCodeFormatError;
