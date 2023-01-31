"use strict"

let a = 3;
let b = 4;
let c = 5;

function solveEquation(in_a, in_b, in_c) {
    let discriminant = in_b ** 2 - 4 * in_a * in_c;
    let result_array = [];

    if (discriminant == 0) {
        result_array = - in_b / (2 * in_a);
    } else if (discriminant > 0) {
        result_array = [(- in_b - Math.sqrt(discriminant)) / (2 * in_a), (- in_b + Math.sqrt(discriminant)) / (2 * in_a),];
    }
    return result_array;
}

console.log( solveEquation(a, b, c) );