"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dashPhoneNumber(str, option) {
    if (option === void 0) { option = {}; }
    if (!option.separator)
        option.separator = '-';
    var length = str.length;
    if (length < 4)
        return str;
    var phone = '';
    if (str.length < 7) {
        phone += str.substr(0, 3);
        phone += option.separator;
        phone += str.substr(3);
    }
    else if (str.length < 11) {
        phone += str.substr(0, 3);
        phone += option.separator;
        phone += str.substr(3, 3);
        phone += option.separator;
        phone += str.substr(6);
    }
    else {
        phone += str.substr(0, 3);
        phone += option.separator;
        phone += str.substr(3, 4);
        phone += option.separator;
        phone += str.substr(7);
    }
    return phone;
}
exports.default = dashPhoneNumber;
