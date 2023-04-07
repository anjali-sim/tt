// import { TrigonometryCalculatorImplement, FunctionCalculatorImplement, SecondCalculatorImplement, SecondCalculator1Implement, ExtraFunctionImplement } from "../../utils/utils11";
//array to perform the memory operations
var memoryStack = [];
// variable used to toggle between degree and radian buttons
var degree = 0;
// console.log()
// for changing the dropdowns
var dropdownChange = 0;
//to take the input
var inputField = document.getElementById("input");
/**
 * @function displayInputValue
 * @description to take the input from the input field entered by the user and display it on the display bar
 * @param value
 * value : string
 * @returns void
 */
function displayInputValue(value) {
    inputField.value += value;
}
/**
 * @function fixedToExponent
 * @description to display the answer in scientific notation
 * @param none
 * @returns void
 */
function fixedToExponent() {
    var input = document.getElementById("input");
    input.value = Number(input.value).toExponential().toString();
}
/**
 * @function degreeToRadian
 * @description  to toggle the button between degree(DEG) and radian(RAD)
 * @params  none
 * @returns void
 */
function degreeToRadian() {
    var degreeElement = document.querySelector("#degree");
    if (degreeElement) {
        if (degree === 0) {
            degree = 1;
            degreeElement.innerHTML = "RAD";
        }
        else {
            degree = 0;
            degreeElement.innerHTML = "DEG";
        }
    }
    else {
        console.log("Error: `#degree` element not found");
    }
}
// function degreeToRadian(): void {
//   // if the degree variable is set to 0, then display the RAD(radian) button else DEG(degree) button
//   if (degree === 0) {
//     degree = 1;
//     const degreeElement = document.querySelector("#degree") as HTMLDivElement;
//     degreeElement.innerHTML = "RAD";
//     // console.log(degree);
//   } else {
//     degree = 0;
//     const degreeElement = document.querySelector("#degree") as HTMLDivElement;
//     degreeElement.innerHTML = "DEG";
//   }
// }
/**
 * @description  validating to restrict the alphabets and special characters in the input field using event listener based on the ASCII code
 * Examples: if the user enters alphabets or special characters from keyboard, then restrict it from entering into the input field
 * - asfhjk to 0
 * - #&;} to 0
 * - 5869*2 to 5869*2
 */
inputField.addEventListener("keypress", function (event) {
    var allowedKeyCodes = [
        "33",
        "34",
        "35",
        "36",
        "38",
        "39",
        "58",
        "59",
        "60",
        "61",
        "62",
        "63",
        "64",
        "91",
        "92",
        "93",
        "95",
        "96",
        "123",
        "124",
        "125",
        "126",
    ];
    var i;
    for (i = 65; i <= 90; i++) {
        allowedKeyCodes.push(i.toString());
    }
    for (i = 97; i <= 122; i++) {
        allowedKeyCodes.push(i.toString());
    }
    var keyCode = event.keyCode.toString();
    if (allowedKeyCodes.indexOf(keyCode) > -1) {
        event.preventDefault();
    }
});
var TrigonometryCalculatorImplement = /** @class */ (function () {
    function TrigonometryCalculatorImplement(input) {
        this.degree = 0;
        this.input = input;
    }
    /**
     * @function  sine
     * @description   evaluates the sine of a number in degrees or radians
     * @params  none
     * @returns void
     * Examples:
     * - sin(90 radian) to 0.8939966636005579
     * - sin(90 degree) to 1
     */
    TrigonometryCalculatorImplement.prototype.sine = function () {
        if (this.degree === 0) {
            this.input.value = Math.sin((Math.PI / 180) * parseFloat(this.input.value)).toString();
            // console.log("in degree");
            // const angleInRadians = (Math.PI / 180) * parseFloat(this.input.value);
            // this.input.value = Math.sin(angleInRadians).toString();
            // this.degree = 0;
        }
        else {
            // console.log("in radian");
            this.input.value = Math.sin(parseFloat(this.input.value)).toString();
        }
    };
    /**
     * @function  cosine
     * @description  evaluates the cosine of a number in degrees or radians
     * @params  none
     * @returns void
     * Examples:
     * - cos(45 radian) to 0.5253219888177297
     * - cos(45 degree) to 0.7071067811865476
     */
    TrigonometryCalculatorImplement.prototype.cosine = function () {
        if (this.degree === 0) {
            this.input.value = Math.cos((Math.PI / 180) * parseFloat(this.input.value)).toString();
        }
        else {
            this.input.value = Math.cos(parseFloat(this.input.value)).toString();
        }
    };
    /**
     * @function  tangent
     * @description  evaluates the tangent of a number in degrees or radians
     * @params  none
     * @returns void
     * Examples:
     * - tan(60 radian) to 0.320040389379563
     * - tan(60 degree) to 1.7320508075688767
     */
    TrigonometryCalculatorImplement.prototype.tangent = function () {
        if (this.degree === 0) {
            this.input.value = Math.tan((Math.PI / 180) * parseFloat(this.input.value)).toString();
        }
        else {
            this.input.value = Math.tan(parseFloat(this.input.value)).toString();
        }
    };
    /**
     * @function  cotangent
     * @description  evaluates the cotangent of a number in degrees or radians
     * @params  none
     * @returns void
     * Examples:
     * - cot(30 radian) to -0.15611995216165922
     * - cot(30 degree) to 1.7320508075688774
     */
    TrigonometryCalculatorImplement.prototype.cotangent = function () {
        if (this.degree === 0) {
            this.input.value = (1 / Math.tan((Math.PI / 180) * parseFloat(this.input.value))).toString();
        }
        else {
            this.input.value = (1 / Math.tan(parseFloat(this.input.value))).toString();
        }
    };
    /**
     * @function  secant
     * @description  evaluates the secant of a number in degrees or radians
     * @params  none
     * @returns void
     * Examples:
     * - sec(45 radian) to 1.9035944074044246
     * - sec(45 degree) to 1.414213562373095
     */
    TrigonometryCalculatorImplement.prototype.secant = function () {
        if (this.degree === 0) {
            this.input.value = (1 / Math.cos((Math.PI / 180) * parseFloat(this.input.value))).toString();
        }
        else {
            this.input.value = (1 / Math.cos(parseFloat(this.input.value))).toString();
        }
    };
    /**
     * @function  cosecant
     * @description  evaluates the cosecant of a number in degrees or radians
     * @params  none
     * @returns void
     * Examples:
     * - cosec(60 radian) to -3.280725574403968
     * - cosec(60 degree) to 1.1547005383792517
     */
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
var obj = new TrigonometryCalculatorImplement(inputField);
// import { obj } from "../../utils/utils11";
var sineFunction = function () {
    obj.sine();
};
var cosineFunction = function () {
    obj.cosine();
};
var tangentFunction = function () {
    obj.tangent();
};
var cotangentFunction = function () {
    obj.cotangent();
};
var secantFunction = function () {
    obj.secant();
};
var cosecantFunction = function () {
    obj.cosecant();
};
var FunctionCalculatorImplement = /** @class */ (function () {
    function FunctionCalculatorImplement(input) {
        this.input = input;
    }
    /**
     * @function  floor
     * @description  to round down and evaluates the largest integer less than or equal to a given number
     * @params  none
     * @returns void
     * Examples:
     * - 5.85 = 5
     */
    FunctionCalculatorImplement.prototype.floor = function () {
        this.input.value = Math.floor(parseFloat(this.input.value)).toString();
    };
    /**
     * @function  ceil
     * @description  to round up and evaluates the smaller integer greater than or equal to a given number
     * @params  none
     * @returns void
     * Examples:
     * - 5.23 = 6
     */
    FunctionCalculatorImplement.prototype.ceil = function () {
        this.input.value = Math.ceil(parseFloat(this.input.value)).toString();
    };
    /**
     * @function  random
     * @description  gives a random number from 0 up to but not including 1
     * @params  none
     * @returns void
     * Examples:
     * - 0.8535283651436478
     * - 0.6407613844878561
     * - 0.1827885058635727
     */
    FunctionCalculatorImplement.prototype.random = function () {
        this.input.value = Math.random().toString();
    };
    /**
     * @function  modulus
     * @description  evaluates the absolute value of a number
     * @params  none
     * @returns void
     * Examples:
     * - -6.235 = 6.235
     */
    FunctionCalculatorImplement.prototype.modulus = function () {
        this.input.value = Math.abs(parseFloat(this.input.value)).toString();
    };
    return FunctionCalculatorImplement;
}());
var obj2 = new FunctionCalculatorImplement(inputField);
var floorFunction = function () {
    obj2.floor();
};
var ceilFunction = function () {
    obj2.ceil();
};
var randomFunction = function () {
    obj2.random();
};
var modulusFunction = function () {
    obj2.modulus();
};
/**
 * @function  calculate
 * @description  to evaluate the basic expressions
 * @params  none
 */
function calculate() {
    var input = document.getElementById("input");
    // input.value = input.value.replaceAll("^", "**");
    input.value = input.value;
    var result = input.value;
    // Error handling
    /**
     * this try catch handles the error when user enters invalid input
     * Examples:
     * 9-6+5 = 8
     * 5-6/5* = Invalid Input!
     */
    function cal(user) {
        return new Function("return " + user)();
    }
    try {
        // function cal(user: string) {
        //   return new Function("return " + user)();
        // }
        var output = cal("".concat(result));
        var inputEl = document.getElementById("input");
        inputEl.value = output.toString();
    }
    catch (err) {
        var errDiv_1 = document.getElementById("errorDiv");
        errDiv_1.textContent = "Invalid Input!";
        setTimeout(function () {
            errDiv_1.textContent = "";
            var inputEl = document.getElementById("input");
            inputEl.value = "";
        }, 2000);
    }
}
/**
 * @function  changeDropdown
 * @description  to toggle the buttons
 * @params  none
 * @returns void
 */
function changeDropdown(display1, display2) {
    var dropdownChange = 1;
    if (typeof document !== "undefined") {
        var elements2 = Array.from(document.getElementsByClassName("display2"));
        var elements1 = Array.from(document.getElementsByClassName("display1"));
        if (dropdownChange === 1) {
            elements2.forEach(function (x) {
                x.style.display = "inline-block";
            });
            elements1.forEach(function (x) {
                x.style.display = "none";
            });
            dropdownChange = 0;
        }
        else {
            elements1.forEach(function (x) {
                x.style.display = "inline-block";
            });
            elements2.forEach(function (x) {
                x.style.display = "none";
            });
            dropdownChange = 1;
        }
    }
    else {
        console.log("Error: `document` is not defined");
    }
}
var SecondCalculatorImplement = /** @class */ (function () {
    function SecondCalculatorImplement(input, errorDiv) {
        this.input = document.getElementById(input);
        this.errorDiv = document.getElementById(errorDiv);
    }
    /**
     * @function  square
     * @description  performs square of a number
     * @params  none
     * @returns void
     * Examples:
     * - 5^2 to 25
     * - -6^2 to 36
     */
    SecondCalculatorImplement.prototype.square = function () {
        this.input.value = Math.pow(Number(this.input.value), 2).toString();
    };
    /**
     * @function  squareRoot
     * @description  performs the square root of a number
     * @params  none
     * @returns void
     * Examples:
     * - sqaureRoot(25) to 5
     * - squareRoot(-4) to Error!
     */
    SecondCalculatorImplement.prototype.squareRoot = function () {
        var inputNumber = Number(this.input.value);
        if (inputNumber < 0) {
            this.displayError();
        }
        else {
            this.input.value = Math.sqrt(inputNumber).toString();
        }
    };
    /**
     * @function  xRaiseY
     * @description  evaluates a number raised to another number
     * @params  none
     * @returns void
     * Examples:
     * - 6^3 to 216
     */
    SecondCalculatorImplement.prototype.xRaiseY = function () {
        this.input.value += "^";
    };
    /**
     * @function  raiseTo10
     * @description  gives 10 to the power of a number
     * @params  none
     * @returns void
     * Examples:
     * - 10^3 to 1000
     */
    SecondCalculatorImplement.prototype.raiseTo10 = function () {
        this.input.value = Math.pow(10, Number(this.input.value)).toString();
    };
    /**
     * @function  logarithm
     * @description  performs logarithm(log base 10) of a number
     * @params  none
     * @returns void
     * Examples:
     * - log(2) to 0.3010299956639812
     */
    SecondCalculatorImplement.prototype.logarithm = function () {
        var inputNumber = Number(this.input.value);
        if (inputNumber < 0) {
            this.displayError();
        }
        else {
            this.input.value = Math.log10(inputNumber).toString();
        }
    };
    /**
     * @function  naturalLogarithm
     * @description  performs natural logarithm(ln base e) of a number
     * @params  none
     * @returns void
     * Examples:
     * - ln(2) to 0.6931471805599453
     */
    SecondCalculatorImplement.prototype.naturalLogarithm = function () {
        var inputNumber = Number(this.input.value);
        if (inputNumber < 0) {
            this.displayError();
        }
        else {
            this.input.value = Math.log(inputNumber).toString();
        }
    };
    /**
     * @function  displayError
     * @description  to display the error and hide it after 2 seconds
     * @params  none
     * @returns void
     */
    SecondCalculatorImplement.prototype.displayError = function () {
        var _this = this;
        this.errorDiv.textContent = "Error!";
        setTimeout(function () {
            _this.errorDiv.textContent = "";
            _this.input.value = "";
        }, 2000);
    };
    return SecondCalculatorImplement;
}());
var obj3 = new SecondCalculatorImplement("input", "errorDiv");
var squareFunction = function () {
    obj3.square();
};
var squareRootFunction = function () {
    obj3.squareRoot();
};
var xRaiseYFunction = function () {
    obj3.xRaiseY();
};
var raiseTo10Function = function () {
    obj3.raiseTo10();
};
var logarithmFunction = function () {
    obj3.logarithm();
};
var naturalLogarithmFunction = function () {
    obj3.naturalLogarithm();
};
var SecondCalculator1Implement = /** @class */ (function () {
    function SecondCalculator1Implement(input, errorDiv) {
        this.input = document.getElementById(input);
        this.errorDiv = document.getElementById(errorDiv);
    }
    /**
     * @function  cube
     * @description  to calculate the cube of a number
     * @params  none
     * @returns void
     * Examples:
     * - 2^3 to 8
     */
    SecondCalculator1Implement.prototype.cube = function () {
        this.input.value = Math.pow(Number(this.input.value), 3).toString();
    };
    /**
     * @function  cubeRoot
     * @description  to calculate the cube root
     * @params  none
     * @returns void
     * Examples:
     * - cubeRoot(125) to 5
     * - cubeRoot(-8) to Error!
     */
    SecondCalculator1Implement.prototype.cubeRoot = function () {
        var inputNumber = Number(this.input.value);
        if (inputNumber < 0) {
            this.displayError();
        }
        else {
            this.input.value = Math.cbrt(inputNumber).toString();
        }
    };
    /**
     * @function  raiseTo2
     * @description  to calculate 2 to power of a number
     * @params  none
     * @returns void
     * Examples:
     * - 2^5 to 32
     * - 2^54524 to Infinity
     */
    SecondCalculator1Implement.prototype.raiseTo2 = function () {
        this.input.value = Math.pow(2, Number(this.input.value)).toString();
    };
    /**
     * @function  logPlus
     * @description  to calculate logarithm of 1+p number
     * @params  none
     * @returns void
     * Examples:
     * - log1p(8) to 2.1972245773362196
     */
    SecondCalculator1Implement.prototype.logPlus = function () {
        var inputNumber = Number(this.input.value);
        if (inputNumber < 0) {
            this.displayError();
        }
        else {
            this.input.value = Math.log1p(inputNumber).toString();
        }
    };
    /**
     * @function  expMinus
     * @description  to calculate e^x-1 where x is number
     * @params  none
     * @returns void
     * Examples:
     * - expm1(2) to 6.38905609893065
     */
    SecondCalculator1Implement.prototype.expMinus = function () {
        this.input.value = Math.expm1(Number(this.input.value)).toString();
    };
    /**
     * @function  eRaisex
     * @description  to calculate e^x where x is number
     * @params  none
     * @returns void
     * Examples:
     * - e^2 to 7.3890560989306495
     */
    SecondCalculator1Implement.prototype.eRaisex = function () {
        this.input.value = Math.pow(Math.E, Number(this.input.value)).toString();
    };
    /**
     * @function  displayError
     * @description  to display the error and hide it after 2 seconds
     * @params  none
     * @returns void
     */
    SecondCalculator1Implement.prototype.displayError = function () {
        var _this = this;
        this.errorDiv.textContent = "Error!";
        setTimeout(function () {
            _this.errorDiv.textContent = "";
            _this.input.value = "";
        }, 2000);
    };
    return SecondCalculator1Implement;
}());
var obj4 = new SecondCalculator1Implement("input", "errorDiv");
var cubeFunction = function () {
    obj4.cube();
};
var cubeRootFunction = function () {
    obj4.cubeRoot();
};
var raiseTo2Function = function () {
    obj4.raiseTo2();
};
var logPlusFunction = function () {
    obj4.logPlus();
};
var expMinusFunction = function () {
    obj4.expMinus();
};
var eRaisexFunction = function () {
    obj4.eRaisex();
};
var ExtraFunctionImplement = /** @class */ (function () {
    function ExtraFunctionImplement(input, errorDiv) {
        this.input = document.getElementById(input);
        this.errorDiv = document.getElementById(errorDiv);
    }
    /**
     * @function  pi
     * @description  displays the value of PI
     * @params  none
     * @returns void
     * Examples:
     * - 3.141592653589793
     */
    ExtraFunctionImplement.prototype.pi = function () {
        this.input.value = Math.PI.toString();
    };
    /**
     * @function  euler
     * @description  displays the value of Euler's number
     * @params  none
     * @returns void
     * Examples:
     * - 2.718281828459045
     */
    ExtraFunctionImplement.prototype.euler = function () {
        this.input.value = Math.E.toString();
    };
    /**
     * @function  clearAll
     * @description  to entirely clear the input field
     * @params  none
     * @returns void
     */
    ExtraFunctionImplement.prototype.clearAll = function () {
        this.input.value = "";
    };
    /**
     * @function  removeOneElementFromEnd
     * @description  to remove one number from the right side end once clicking on it
     * @params  none
     * @returns void
     * Examples:
     * - 5.2893 to 5.289
     */
    ExtraFunctionImplement.prototype.removeOneElementFromEnd = function () {
        this.input.value = this.input.value.slice(0, -1);
    };
    /**
     * @function  byX
     * @description  performs inverse of a number
     * @params  none
     * @returns void
     * Examples:
     * - 1/2 to 0.5
     */
    ExtraFunctionImplement.prototype.byX = function () {
        var x = Number(this.input.value);
        this.input.value = (1 / x).toString();
    };
    /**
     * @function modulo
     * @description evaluates the remainder after dividing one number by another.
     * @params  none
     * @returns void
     * Examples:
     * - 9%7 to 2
     * - 2%2 to 0
     */
    ExtraFunctionImplement.prototype.modulo = function () {
        this.input.value += "%";
    };
    /**
     * @function  modulus
     * @description  evaluates the absolute value of a number
     * @params  none
     * @returns void
     * Examples:
     * - -6.235 = 6.235
     */
    ExtraFunctionImplement.prototype.modulus = function () {
        this.input.value = Math.abs(parseFloat(this.input.value)).toString();
    };
    /**
     * @function  exponent
     * @description  evaluates the value of E^x, where E is Euler's number
     * @params  none
     * @returns void
     * Examples:
     * - E^5 to 148.4131591025766
     */
    ExtraFunctionImplement.prototype.exponent = function () {
        var x = Number(this.input.value);
        this.input.value = Math.exp(x).toString();
    };
    /**
     * @function  factorial
     * @description  performs the factorial of a number
     * @params  none
     * @returns void
     * Examples:
     * - 5! to 120
     */
    ExtraFunctionImplement.prototype.factorial = function () {
        var _this = this;
        var number = Number(this.input.value);
        if (number < 0) {
            var errDiv = document.getElementById("errorDiv");
            this.errorDiv.textContent = "Error!";
            setTimeout(function () {
                _this.errorDiv.textContent = "";
                _this.input.value = "";
            }, 2000);
        }
        else if (number == 0 || number == 1) {
            this.input.value = "1";
        }
        else if (number > 1) {
            for (var i = number - 1; i > 1; i--) {
                number = number * i;
            }
            this.input.value = number.toString();
        }
    };
    /**
     * @function  signChange
     * @description  gives a number with its opposite sign
     * @params  none
     * @returns void
     * Examples:
     * - 7 to -7
     */
    ExtraFunctionImplement.prototype.signChange = function () {
        var x = Number(this.input.value);
        this.input.value = (-x).toString();
    };
    return ExtraFunctionImplement;
}());
var obj5 = new ExtraFunctionImplement("input", "errorDiv");
var piFunction = function () {
    obj5.pi();
};
var eulerFunction = function () {
    obj5.euler();
};
var clearAllFunction = function () {
    obj5.clearAll();
};
var removeOneElementFromEndFunction = function () {
    obj5.removeOneElementFromEnd();
};
var byXFunction = function () {
    obj5.byX();
};
var moduloFunction = function () {
    obj5.modulo();
};
var modulusFunction1 = function () {
    obj5.modulus();
};
var exponentFunction = function () {
    obj5.exponent();
};
var factorialFunction = function () {
    obj5.factorial();
};
var signChangeFunction = function () {
    obj5.signChange();
};
var MemoryImplement = /** @class */ (function () {
    function MemoryImplement() {
        this.memoryStack = [];
        this.input = document.createElement("input");
    }
    MemoryImplement.prototype.buttonDisableToAble = function () {
        document.getElementById("mc").disabled = false;
        document.getElementById("mr").disabled = false;
    };
    MemoryImplement.prototype.memoryClear = function () {
        this.memoryStack = [];
    };
    MemoryImplement.prototype.memoryRecall = function () {
        this.input.value = this.memoryStack[this.memoryStack.length - 1].toString();
    };
    MemoryImplement.prototype.memoryAdd = function () {
        this.buttonDisableToAble();
        if (this.memoryStack.length === 1) {
            this.memoryStack.push(parseInt(this.input.value));
        }
        else {
            this.memoryStack[this.memoryStack.length - 1] += parseInt(this.input.value);
        }
    };
    MemoryImplement.prototype.memorySubtract = function () {
        this.buttonDisableToAble();
        if (this.memoryStack.length === 0) {
            this.memoryStack.push(-1 * parseInt(this.input.value));
        }
        else {
            this.memoryStack[this.memoryStack.length - 1] -= parseInt(this.input.value);
        }
    };
    MemoryImplement.prototype.memorySave = function () {
        this.buttonDisableToAble();
        if (this.memoryStack.length === 0) {
            this.memoryStack.push(parseFloat(this.input.value));
        }
        else {
            this.memoryStack.push(parseFloat(this.input.value));
        }
    };
    return MemoryImplement;
}());
var obj6 = new MemoryImplement();
var memoryClearFunction = function () {
    obj6.memoryClear();
};
var memoryRecallFunction = function () {
    obj6.memoryRecall();
};
var memoryAddFunction = function () {
    obj6.memoryAdd();
};
var memorySubtractFunction = function () {
    obj6.memorySubtract();
};
var memorySaveFunction = function () {
    obj6.memorySave();
};
