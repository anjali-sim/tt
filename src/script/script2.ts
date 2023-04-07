// import { TrigonometryCalculatorImplement, FunctionCalculatorImplement, SecondCalculatorImplement, SecondCalculator1Implement, ExtraFunctionImplement } from "../../utils/utils11";

//array to perform the memory operations
let memoryStack: number[] = [];

// variable used to toggle between degree and radian buttons
let degree: number = 0;
// console.log()
// for changing the dropdowns
let dropdownChange: number = 0;

//to take the input
const inputField = document.getElementById("input") as HTMLInputElement;

/**
 * @function displayInputValue
 * @description to take the input from the input field entered by the user and display it on the display bar
 * @param value
 * value : string
 * @returns void
 */
function displayInputValue(value: string): void {
  inputField.value += value;
}

/**
 * @function fixedToExponent
 * @description to display the answer in scientific notation
 * @param none
 * @returns void
 */
function fixedToExponent(): void {
  const input = document.getElementById("input") as HTMLInputElement;
  input.value = Number(input.value).toExponential().toString();
}

/**
 * @function degreeToRadian
 * @description  to toggle the button between degree(DEG) and radian(RAD)
 * @params  none
 * @returns void
 */

function degreeToRadian(): void {
  const degreeElement: HTMLDivElement | null = document.querySelector("#degree");

  if (degreeElement) {
    if (degree === 0) {
      degree = 1;
      degreeElement.innerHTML = "RAD";
    } else {
      degree = 0;
      degreeElement.innerHTML = "DEG";
    }
  } else {
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
inputField.addEventListener("keypress", function (event: KeyboardEvent) {
  const allowedKeyCodes: string[] = [
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
  let i: number;
  for (i = 65; i <= 90; i++) {
    allowedKeyCodes.push(i.toString());
  }

  for (i = 97; i <= 122; i++) {
    allowedKeyCodes.push(i.toString());
  }

  const keyCode = event.keyCode.toString();
  if (allowedKeyCodes.indexOf(keyCode) > -1) {
    event.preventDefault();
  }
});

interface TrigonometryCalculator {
  input: HTMLInputElement;
  sine(): void;
  cosine(): void;
  tangent(): void;
  cotangent(): void;
  secant(): void;
  cosecant(): void;
}
class TrigonometryCalculatorImplement implements TrigonometryCalculator {
  public degree: number = 0;
  public input: HTMLInputElement;

  constructor(input: HTMLInputElement) {
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
  public sine(): void {
    if (this.degree === 0) {
      this.input.value = Math.sin(
        (Math.PI / 180) * parseFloat(this.input.value)
      ).toString();
      // console.log("in degree");
      // const angleInRadians = (Math.PI / 180) * parseFloat(this.input.value);
      // this.input.value = Math.sin(angleInRadians).toString();
      // this.degree = 0;
    } else {
      // console.log("in radian");
      this.input.value = Math.sin(parseFloat(this.input.value)).toString();
    }
  }

  /**
   * @function  cosine
   * @description  evaluates the cosine of a number in degrees or radians
   * @params  none
   * @returns void
   * Examples:
   * - cos(45 radian) to 0.5253219888177297
   * - cos(45 degree) to 0.7071067811865476
   */
  public cosine(): void {
    if (this.degree === 0) {
      this.input.value = Math.cos(
        (Math.PI / 180) * parseFloat(this.input.value)
      ).toString();
    } else {
      this.input.value = Math.cos(parseFloat(this.input.value)).toString();
    }
  }

  /**
   * @function  tangent
   * @description  evaluates the tangent of a number in degrees or radians
   * @params  none
   * @returns void
   * Examples:
   * - tan(60 radian) to 0.320040389379563
   * - tan(60 degree) to 1.7320508075688767
   */
  public tangent(): void {
    if (this.degree === 0) {
      this.input.value = Math.tan(
        (Math.PI / 180) * parseFloat(this.input.value)
      ).toString();
    } else {
      this.input.value = Math.tan(parseFloat(this.input.value)).toString();
    }
  }

  /**
   * @function  cotangent
   * @description  evaluates the cotangent of a number in degrees or radians
   * @params  none
   * @returns void
   * Examples:
   * - cot(30 radian) to -0.15611995216165922
   * - cot(30 degree) to 1.7320508075688774
   */
  public cotangent(): void {
    if (this.degree === 0) {
      this.input.value = (
        1 / Math.tan((Math.PI / 180) * parseFloat(this.input.value))
      ).toString();
    } else {
      this.input.value = (
        1 / Math.tan(parseFloat(this.input.value))
      ).toString();
    }
  }

  /**
   * @function  secant
   * @description  evaluates the secant of a number in degrees or radians
   * @params  none
   * @returns void
   * Examples:
   * - sec(45 radian) to 1.9035944074044246
   * - sec(45 degree) to 1.414213562373095
   */
  public secant(): void {
    if (this.degree === 0) {
      this.input.value = (
        1 / Math.cos((Math.PI / 180) * parseFloat(this.input.value))
      ).toString();
    } else {
      this.input.value = (
        1 / Math.cos(parseFloat(this.input.value))
      ).toString();
    }
  }

  /**
   * @function  cosecant
   * @description  evaluates the cosecant of a number in degrees or radians
   * @params  none
   * @returns void
   * Examples:
   * - cosec(60 radian) to -3.280725574403968
   * - cosec(60 degree) to 1.1547005383792517
   */
  public cosecant(): void {
    if (this.degree === 0) {
      this.input.value = (
        1 / Math.sin((Math.PI / 180) * parseFloat(this.input.value))
      ).toString();
    } else {
      this.input.value = (
        1 / Math.sin(parseFloat(this.input.value))
      ).toString();
    }
  }
}
const obj = new TrigonometryCalculatorImplement(inputField);
// import { obj } from "../../utils/utils11";

const sineFunction = () => {
  obj.sine();
};
const cosineFunction = () => {
  obj.cosine();
};
const tangentFunction = () => {
  obj.tangent();
};
const cotangentFunction = () => {
  obj.cotangent();
};
const secantFunction = () => {
  obj.secant();
};
const cosecantFunction = () => {
  obj.cosecant();
};

interface FunctionCalculator {
  input: HTMLInputElement;
  floor(): void;
  ceil(): void;
  random(): void;
  modulus(): void;
}

class FunctionCalculatorImplement implements FunctionCalculator {
  public input: HTMLInputElement;

  constructor(input: HTMLInputElement) {
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
  public floor(): void {
    this.input.value = Math.floor(parseFloat(this.input.value)).toString();
  }

  /**
   * @function  ceil
   * @description  to round up and evaluates the smaller integer greater than or equal to a given number
   * @params  none
   * @returns void
   * Examples:
   * - 5.23 = 6
   */
  public ceil(): void {
    this.input.value = Math.ceil(parseFloat(this.input.value)).toString();
  }

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
  public random(): void {
    this.input.value = Math.random().toString();
  }

  /**
   * @function  modulus
   * @description  evaluates the absolute value of a number
   * @params  none
   * @returns void
   * Examples:
   * - -6.235 = 6.235
   */
  public modulus(): void {
    this.input.value = Math.abs(parseFloat(this.input.value)).toString();
  }
}

const obj2 = new FunctionCalculatorImplement(inputField);

const floorFunction = () => {
  obj2.floor();
};
const ceilFunction = () => {
  obj2.ceil();
};
const randomFunction = () => {
  obj2.random();
};
const modulusFunction = () => {
  obj2.modulus();
};

/**
 * @function  calculate
 * @description  to evaluate the basic expressions
 * @params  none
 */
function calculate() {
  const input = document.getElementById("input") as HTMLInputElement;
  // input.value = input.value.replaceAll("^", "**");
  input.value = input.value;
  const result = input.value;
  // Error handling
  /**
   * this try catch handles the error when user enters invalid input
   * Examples:
   * 9-6+5 = 8
   * 5-6/5* = Invalid Input!
   */
  function cal(user: string) {
    return new Function("return " + user)();
  }
  try {
    // function cal(user: string) {
    //   return new Function("return " + user)();
    // }
    const output = cal(`${result}`);
    const inputEl = document.getElementById("input") as HTMLInputElement;
    inputEl.value = output.toString();
  } catch (err) {
    const errDiv = document.getElementById("errorDiv") as HTMLDivElement;
    errDiv.textContent = "Invalid Input!";
    setTimeout(() => {
      errDiv.textContent = "";
      const inputEl = document.getElementById("input") as HTMLInputElement;
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
function changeDropdown(display1: string, display2: string): void {
  let dropdownChange: number = 1;

  if (typeof document !== "undefined") {
    const elements2: HTMLElement[] = Array.from(
      document.getElementsByClassName("display2")
    ) as HTMLElement[];
    const elements1: HTMLElement[] = Array.from(
      document.getElementsByClassName("display1")
    ) as HTMLElement[];

    if (dropdownChange === 1) {
      elements2.forEach((x: HTMLElement) => {
        x.style.display = "inline-block";
      });

      elements1.forEach((x: HTMLElement) => {
        x.style.display = "none";
      });

      dropdownChange = 0;
    } else {
      elements1.forEach((x: HTMLElement) => {
        x.style.display = "inline-block";
      });

      elements2.forEach((x: HTMLElement) => {
        x.style.display = "none";
      });

      dropdownChange = 1;
    }
  } else {
    console.log("Error: `document` is not defined");
  }
}

interface SecondCalculator {
  square(): void;
  squareRoot(): void;
  xRaiseY(): void;
  raiseTo10(): void;
  logarithm(): void;
  naturalLogarithm(): void;
}

class SecondCalculatorImplement implements SecondCalculator {
  input: HTMLInputElement;
  errorDiv: HTMLElement;

  constructor(input: string, errorDiv: string) {
    this.input = document.getElementById(input) as HTMLInputElement;
    this.errorDiv = document.getElementById(errorDiv) as HTMLElement;
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
  public square(): void {
    this.input.value = Math.pow(Number(this.input.value), 2).toString();
  }

  /**
   * @function  squareRoot
   * @description  performs the square root of a number
   * @params  none
   * @returns void
   * Examples:
   * - sqaureRoot(25) to 5
   * - squareRoot(-4) to Error!
   */
  public squareRoot(): void {
    const inputNumber = Number(this.input.value);
    if (inputNumber < 0) {
      this.displayError();
    } else {
      this.input.value = Math.sqrt(inputNumber).toString();
    }
  }

  /**
   * @function  xRaiseY
   * @description  evaluates a number raised to another number
   * @params  none
   * @returns void
   * Examples:
   * - 6^3 to 216
   */
  public xRaiseY(): void {
    this.input.value += "^";
  }

  /**
   * @function  raiseTo10
   * @description  gives 10 to the power of a number
   * @params  none
   * @returns void
   * Examples:
   * - 10^3 to 1000
   */
  public raiseTo10(): void {
    this.input.value = Math.pow(10, Number(this.input.value)).toString();
  }

  /**
   * @function  logarithm
   * @description  performs logarithm(log base 10) of a number
   * @params  none
   * @returns void
   * Examples:
   * - log(2) to 0.3010299956639812
   */
  public logarithm(): void {
    const inputNumber = Number(this.input.value);
    if (inputNumber < 0) {
      this.displayError();
    } else {
      this.input.value = Math.log10(inputNumber).toString();
    }
  }

  /**
   * @function  naturalLogarithm
   * @description  performs natural logarithm(ln base e) of a number
   * @params  none
   * @returns void
   * Examples:
   * - ln(2) to 0.6931471805599453
   */
  public naturalLogarithm(): void {
    const inputNumber = Number(this.input.value);
    if (inputNumber < 0) {
      this.displayError();
    } else {
      this.input.value = Math.log(inputNumber).toString();
    }
  }

  /**
   * @function  displayError
   * @description  to display the error and hide it after 2 seconds
   * @params  none
   * @returns void
   */
  private displayError(): void {
    this.errorDiv.textContent = "Error!";
    setTimeout(() => {
      this.errorDiv.textContent = "";
      this.input.value = "";
    }, 2000);
  }
}
const obj3 = new SecondCalculatorImplement("input", "errorDiv");

const squareFunction = () => {
  obj3.square();
};
const squareRootFunction = () => {
  obj3.squareRoot();
};
const xRaiseYFunction = () => {
  obj3.xRaiseY();
};
const raiseTo10Function = () => {
  obj3.raiseTo10();
};
const logarithmFunction = () => {
  obj3.logarithm();
};
const naturalLogarithmFunction = () => {
  obj3.naturalLogarithm();
};

interface SecondCalculator1 {
  cube(): void;
  cubeRoot(): void;
  raiseTo2(): void;
  logPlus(): void;
  expMinus(): void;
  eRaisex(): void;
}

class SecondCalculator1Implement implements SecondCalculator1 {
  input: HTMLInputElement;
  errorDiv: HTMLElement;

  constructor(input: string, errorDiv: string) {
    this.input = document.getElementById(input) as HTMLInputElement;
    this.errorDiv = document.getElementById(errorDiv) as HTMLElement;
  }

  /**
   * @function  cube
   * @description  to calculate the cube of a number
   * @params  none
   * @returns void
   * Examples:
   * - 2^3 to 8
   */
  public cube(): void {
    this.input.value = Math.pow(Number(this.input.value), 3).toString();
  }

  /**
   * @function  cubeRoot
   * @description  to calculate the cube root
   * @params  none
   * @returns void
   * Examples:
   * - cubeRoot(125) to 5
   * - cubeRoot(-8) to Error!
   */
  public cubeRoot(): void {
    const inputNumber = Number(this.input.value);
    if (inputNumber < 0) {
      this.displayError();
    } else {
      this.input.value = Math.cbrt(inputNumber).toString();
    }
  }

  /**
   * @function  raiseTo2
   * @description  to calculate 2 to power of a number
   * @params  none
   * @returns void
   * Examples:
   * - 2^5 to 32
   * - 2^54524 to Infinity
   */
  public raiseTo2(): void {
    this.input.value = Math.pow(2, Number(this.input.value)).toString();
  }

  /**
   * @function  logPlus
   * @description  to calculate logarithm of 1+p number
   * @params  none
   * @returns void
   * Examples:
   * - log1p(8) to 2.1972245773362196
   */
  public logPlus(): void {
    const inputNumber = Number(this.input.value);
    if (inputNumber < 0) {
      this.displayError();
    } else {
      this.input.value = Math.log1p(inputNumber).toString();
    }
  }

  /**
   * @function  expMinus
   * @description  to calculate e^x-1 where x is number
   * @params  none
   * @returns void
   * Examples:
   * - expm1(2) to 6.38905609893065
   */
  public expMinus(): void {
    this.input.value = Math.expm1(Number(this.input.value)).toString();
  }

  /**
   * @function  eRaisex
   * @description  to calculate e^x where x is number
   * @params  none
   * @returns void
   * Examples:
   * - e^2 to 7.3890560989306495
   */
  public eRaisex(): void {
    this.input.value = Math.pow(Math.E, Number(this.input.value)).toString();
  }

  /**
   * @function  displayError
   * @description  to display the error and hide it after 2 seconds
   * @params  none
   * @returns void
   */
  private displayError(): void {
    this.errorDiv.textContent = "Error!";
    setTimeout(() => {
      this.errorDiv.textContent = "";
      this.input.value = "";
    }, 2000);
  }
}
const obj4 = new SecondCalculator1Implement("input", "errorDiv");
const cubeFunction = () => {
  obj4.cube();
};
const cubeRootFunction = () => {
  obj4.cubeRoot();
};
const raiseTo2Function = () => {
  obj4.raiseTo2();
};
const logPlusFunction = () => {
  obj4.logPlus();
};
const expMinusFunction = () => {
  obj4.expMinus();
};
const eRaisexFunction = () => {
  obj4.eRaisex();
};

interface ExtraFunctionInterface {
  pi(): void;
  euler(): void;
  clearAll(): void;
  removeOneElementFromEnd(): void;
  byX(): void;
  modulo(): void;
  modulus(): void;
  exponent(): void;
  factorial(): void;
  signChange(): void;
}

class ExtraFunctionImplement implements ExtraFunctionInterface {
  input: HTMLInputElement;
  errorDiv: HTMLElement;

  constructor(input: string, errorDiv: string) {
    this.input = document.getElementById(input) as HTMLInputElement;
    this.errorDiv = document.getElementById(errorDiv) as HTMLElement;
  }

  /**
   * @function  pi
   * @description  displays the value of PI
   * @params  none
   * @returns void
   * Examples:
   * - 3.141592653589793
   */
  public pi(): void {
    this.input.value = Math.PI.toString();
  }

  /**
   * @function  euler
   * @description  displays the value of Euler's number
   * @params  none
   * @returns void
   * Examples:
   * - 2.718281828459045
   */
  public euler(): void {
    this.input.value = Math.E.toString();
  }

  /**
   * @function  clearAll
   * @description  to entirely clear the input field
   * @params  none
   * @returns void
   */
  public clearAll(): void {
    this.input.value = "";
  }

  /**
   * @function  removeOneElementFromEnd
   * @description  to remove one number from the right side end once clicking on it
   * @params  none
   * @returns void
   * Examples:
   * - 5.2893 to 5.289
   */
  public removeOneElementFromEnd(): void {
    this.input.value = this.input.value.slice(0, -1);
  }

  /**
   * @function  byX
   * @description  performs inverse of a number
   * @params  none
   * @returns void
   * Examples:
   * - 1/2 to 0.5
   */
  public byX(): void {
    const x = Number(this.input.value);
    this.input.value = (1 / x).toString();
  }

  /**
   * @function modulo
   * @description evaluates the remainder after dividing one number by another.
   * @params  none
   * @returns void
   * Examples:
   * - 9%7 to 2
   * - 2%2 to 0
   */
  public modulo(): void {
    this.input.value += "%";
  }

  /**
   * @function  modulus
   * @description  evaluates the absolute value of a number
   * @params  none
   * @returns void
   * Examples:
   * - -6.235 = 6.235
   */
  public modulus(): void {
    this.input.value = Math.abs(parseFloat(this.input.value)).toString();
  }

  /**
   * @function  exponent
   * @description  evaluates the value of E^x, where E is Euler's number
   * @params  none
   * @returns void
   * Examples:
   * - E^5 to 148.4131591025766
   */
  public exponent(): void {
    const x = Number(this.input.value);
    this.input.value = Math.exp(x).toString();
  }

  /**
   * @function  factorial
   * @description  performs the factorial of a number
   * @params  none
   * @returns void
   * Examples:
   * - 5! to 120
   */
  public factorial(): void {
    let number = Number(this.input.value);
    if (number < 0) {
      const errDiv = document.getElementById("errorDiv");
      this.errorDiv.textContent = "Error!";
      setTimeout(() => {
        this.errorDiv.textContent = "";
        this.input.value = "";
      }, 2000);
    } else if (number == 0 || number == 1) {
      this.input.value = "1";
    } else if (number > 1) {
      for (let i = number - 1; i > 1; i--) {
        number = number * i;
      }
      this.input.value = number.toString();
    }
  }

  /**
   * @function  signChange
   * @description  gives a number with its opposite sign
   * @params  none
   * @returns void
   * Examples:
   * - 7 to -7
   */
  public signChange(): void {
    const x = Number(this.input.value);
    this.input.value = (-x).toString();
  }
}
const obj5 = new ExtraFunctionImplement("input", "errorDiv");
const piFunction = () => {
  obj5.pi();
};
const eulerFunction = () => {
  obj5.euler();
};
const clearAllFunction = () => {
  obj5.clearAll();
};
const removeOneElementFromEndFunction = () => {
  obj5.removeOneElementFromEnd();
};
const byXFunction = () => {
  obj5.byX();
};
const moduloFunction = () => {
  obj5.modulo();
};
const modulusFunction1 = () => {
  obj5.modulus();
};
const exponentFunction = () => {
  obj5.exponent();
};
const factorialFunction = () => {
  obj5.factorial();
};
const signChangeFunction = () => {
  obj5.signChange();
};

// import { MemoryImplement } from "../../utils/utils11";

interface Memory {
  memoryStack: number[];
  input: HTMLInputElement;
  buttonDisableToAble(): void;
  memoryClear(): void;
  memoryRecall(): void;
  memoryAdd(): void;
  memorySubtract(): void;
  memorySave(): void;
}

class MemoryImplement implements Memory {
  memoryStack: number[] = [];
  input: HTMLInputElement = document.createElement("input");

  buttonDisableToAble(): void {
    (document.getElementById("mc") as HTMLButtonElement).disabled = false;
    (document.getElementById("mr") as HTMLButtonElement).disabled = false;
  }

  memoryClear(): void {
    this.memoryStack = [];
  }

  memoryRecall(): void {
    this.input.value = this.memoryStack[this.memoryStack.length - 1].toString();
  }

  memoryAdd(): void {
    this.buttonDisableToAble();
    if (this.memoryStack.length === 1) {
      this.memoryStack.push(parseInt(this.input.value));
    } else {
      this.memoryStack[this.memoryStack.length - 1] += parseInt(
        this.input.value
      );
    }
  }

  memorySubtract(): void {
    this.buttonDisableToAble();
    if (this.memoryStack.length === 0) {
      this.memoryStack.push(-1 * parseInt(this.input.value));
    } else {
      this.memoryStack[this.memoryStack.length - 1] -= parseInt(
        this.input.value
      );
    }
  }

  memorySave(): void {
    this.buttonDisableToAble();
    if (this.memoryStack.length === 0) {
      this.memoryStack.push(parseFloat(this.input.value));
    } else {
      this.memoryStack.push(parseFloat(this.input.value));
    }
  }
}

const obj6 = new MemoryImplement();
const memoryClearFunction = () => {
  obj6.memoryClear();
};
const memoryRecallFunction = () => {
  obj6.memoryRecall();
};
const memoryAddFunction = () => {
  obj6.memoryAdd();
};
const memorySubtractFunction = () => {
  obj6.memorySubtract();
};
const memorySaveFunction = () => {
  obj6.memorySave();
};
