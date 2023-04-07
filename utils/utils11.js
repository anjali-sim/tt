"use strict";
exports.__esModule = true;
exports.TrigonometryCalculatorImplement = void 0;
var TrigonometryCalculatorImplement = /** @class */ (function () {
    function TrigonometryCalculatorImplement(input) {
        this.degree = 0;
        this.input = input;
    }
    TrigonometryCalculatorImplement.prototype.sine = function () {
        if (this.degree === 0) {
            this.input.value = Math.sin((Math.PI / 180) * parseFloat(this.input.value)).toString();
        }
        else {
            this.input.value = Math.sin(parseFloat(this.input.value)).toString();
        }
    };
    TrigonometryCalculatorImplement.prototype.cosine = function () {
        if (this.degree === 0) {
            this.input.value = Math.cos((Math.PI / 180) * parseFloat(this.input.value)).toString();
        }
        else {
            this.input.value = Math.cos(parseFloat(this.input.value)).toString();
        }
    };
    TrigonometryCalculatorImplement.prototype.tangent = function () {
        if (this.degree === 0) {
            this.input.value = Math.tan((Math.PI / 180) * parseFloat(this.input.value)).toString();
        }
        else {
            this.input.value = Math.tan(parseFloat(this.input.value)).toString();
        }
    };
    TrigonometryCalculatorImplement.prototype.cotangent = function () {
        if (this.degree === 0) {
            this.input.value = (1 / Math.tan((Math.PI / 180) * parseFloat(this.input.value))).toString();
        }
        else {
            this.input.value = (1 / Math.tan(parseFloat(this.input.value))).toString();
        }
    };
    TrigonometryCalculatorImplement.prototype.secant = function () {
        if (this.degree === 0) {
            this.input.value = (1 / Math.cos((Math.PI / 180) * parseFloat(this.input.value))).toString();
        }
        else {
            this.input.value = (1 / Math.cos(parseFloat(this.input.value))).toString();
        }
    };
    TrigonometryCalculatorImplement.prototype.cosecant = function () {
        if (this.degree === 0) {
            this.input.value = (1 / Math.sin((Math.PI / 180) * parseFloat(this.input.value))).toString();
        }
        else {
            this.input.value = (1 / Math.sin(parseFloat(this.input.value))).toString();
        }
    };
    return TrigonometryCalculatorImplement;
}());
exports.TrigonometryCalculatorImplement = TrigonometryCalculatorImplement;
