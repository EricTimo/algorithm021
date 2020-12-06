/**
 * 加一
 * @date 2020.12.02 23:50
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    var len = digits.length;
    for (let i = len - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if (digits[i] != 0) {
            return digits;
        }
    }
    digits = new Array(len + 1).fill(0);
    digits[0] = 1;
    console.log(digits)
    return digits;
};
plusOne([8, 9, 9, 9]);