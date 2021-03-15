"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dashPhoneNumber(str, option) {
    if (!option.shape)
        option.shape = 'dash';
    if (!option.space)
        option.space = false;
    var number = str.replace(/[^0-9]/g, '');
    var length = number.length;
    var shape = option.shape === 'dash' ? '-' : '.';
    var shapeWithSpace = option.space
        ? option.shape === 'dash'
            ? " " + shape + " "
            : shape + " "
        : shape;
    if (length < 4)
        return number;
    var phone = '';
    if (number.length < 7) {
        phone += number.substr(0, 3);
        phone += shapeWithSpace;
        phone += number.substr(3);
    }
    else if (number.length < 11) {
        phone += number.substr(0, 3);
        phone += shapeWithSpace;
        phone += number.substr(3, 3);
        phone += shapeWithSpace;
        phone += number.substr(6);
    }
    else {
        phone += number.substr(0, 3);
        phone += shapeWithSpace;
        phone += number.substr(3, 4);
        phone += shapeWithSpace;
        phone += number.substr(7);
    }
    return phone;
}
exports.default = dashPhoneNumber;
