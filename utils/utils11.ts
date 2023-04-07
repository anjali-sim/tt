// const inputField = document.getElementById("input") as HTMLInputElement;

// export interface TrigonometryCalculator {
//   input: HTMLInputElement;
//   sine(): void;
//   cosine(): void;
//   tangent(): void;
//   cotangent(): void;
//   secant(): void;
//   cosecant(): void;
// }
// export class TrigonometryCalculatorImplement implements TrigonometryCalculator {
//   public degree: number = 0;
//   public input: HTMLInputElement;

//   constructor(input: HTMLInputElement) {
//     this.input = input;
//   }

//   /**
//    * @function  sine
//    * @description   evaluates the sine of a number in degrees or radians
//    * @params  none
//    * @returns void
//    * Examples:
//    * - sin(90 radian) to 0.8939966636005579
//    * - sin(90 degree) to 1
//    */
//   public sine(): void {
//     if (this.degree === 0) {
//       this.input.value = Math.sin(
//         (Math.PI / 180) * parseFloat(this.input.value)
//       ).toString();
//     } else {
//       this.input.value = Math.sin(parseFloat(this.input.value)).toString();
//     }
//   }

//   /**
//    * @function  cosine
//    * @description  evaluates the cosine of a number in degrees or radians
//    * @params  none
//    * @returns void
//    * Examples:
//    * - cos(45 radian) to 0.5253219888177297
//    * - cos(45 degree) to 0.7071067811865476
//    */
//   public cosine(): void {
//     if (this.degree === 0) {
//       this.input.value = Math.cos(
//         (Math.PI / 180) * parseFloat(this.input.value)
//       ).toString();
//     } else {
//       this.input.value = Math.cos(parseFloat(this.input.value)).toString();
//     }
//   }

//   /**
//    * @function  tangent
//    * @description  evaluates the tangent of a number in degrees or radians
//    * @params  none
//    * @returns void
//    * Examples:
//    * - tan(60 radian) to 0.320040389379563
//    * - tan(60 degree) to 1.7320508075688767
//    */
//   public tangent(): void {
//     if (this.degree === 0) {
//       this.input.value = Math.tan(
//         (Math.PI / 180) * parseFloat(this.input.value)
//       ).toString();
//     } else {
//       this.input.value = Math.tan(parseFloat(this.input.value)).toString();
//     }
//   }

//   /**
//    * @function  cotangent
//    * @description  evaluates the cotangent of a number in degrees or radians
//    * @params  none
//    * @returns void
//    * Examples:
//    * - cot(30 radian) to -0.15611995216165922
//    * - cot(30 degree) to 1.7320508075688774
//    */
//   public cotangent(): void {
//     if (this.degree === 0) {
//       this.input.value = (
//         1 / Math.tan((Math.PI / 180) * parseFloat(this.input.value))
//       ).toString();
//     } else {
//       this.input.value = (
//         1 / Math.tan(parseFloat(this.input.value))
//       ).toString();
//     }
//   }

//   /**
//    * @function  secant
//    * @description  evaluates the secant of a number in degrees or radians
//    * @params  none
//    * @returns void
//    * Examples:
//    * - sec(45 radian) to 1.9035944074044246
//    * - sec(45 degree) to 1.414213562373095
//    */
//   public secant(): void {
//     if (this.degree === 0) {
//       this.input.value = (
//         1 / Math.cos((Math.PI / 180) * parseFloat(this.input.value))
//       ).toString();
//     } else {
//       this.input.value = (
//         1 / Math.cos(parseFloat(this.input.value))
//       ).toString();
//     }
//   }

//   /**
//    * @function  cosecant
//    * @description  evaluates the cosecant of a number in degrees or radians
//    * @params  none
//    * @returns void
//    * Examples:
//    * - cosec(60 radian) to -3.280725574403968
//    * - cosec(60 degree) to 1.1547005383792517
//    */
//   public cosecant(): void {
//     if (this.degree === 0) {
//       this.input.value = (
//         1 / Math.sin((Math.PI / 180) * parseFloat(this.input.value))
//       ).toString();
//     } else {
//       this.input.value = (
//         1 / Math.sin(parseFloat(this.input.value))
//       ).toString();
//     }
//   }
// }
// // export const obj = new TrigonometryCalculatorImplement(inputField);

// export interface FunctionCalculator {
//   input: HTMLInputElement;
//   floor(): void;
//   ceil(): void;
//   random(): void;
//   modulus(): void;
// }

// export class FunctionCalculatorImplement implements FunctionCalculator {
//   public input: HTMLInputElement;

//   constructor(input: HTMLInputElement) {
//     this.input = input;
//   }

//   /**
//    * @function  floor
//    * @description  to round down and evaluates the largest integer less than or equal to a given number
//    * @params  none
//    * @returns void
//    * Examples:
//    * - 5.85 = 5
//    */
//   public floor(): void {
//     this.input.value = Math.floor(parseFloat(this.input.value)).toString();
//   }

//   /**
//    * @function  ceil
//    * @description  to round up and evaluates the smaller integer greater than or equal to a given number
//    * @params  none
//    * @returns void
//    * Examples:
//    * - 5.23 = 6
//    */
//   public ceil(): void {
//     this.input.value = Math.ceil(parseFloat(this.input.value)).toString();
//   }

//   /**
//    * @function  random
//    * @description  gives a random number from 0 up to but not including 1
//    * @params  none
//    * @returns void
//    * Examples:
//    * - 0.8535283651436478
//    * - 0.6407613844878561
//    * - 0.1827885058635727
//    */
//   public random(): void {
//     this.input.value = Math.random().toString();
//   }

//   /**
//    * @function  modulus
//    * @description  evaluates the absolute value of a number
//    * @params  none
//    * @returns void
//    * Examples:
//    * - -6.235 = 6.235
//    */
//   public modulus(): void {
//     this.input.value = Math.abs(parseFloat(this.input.value)).toString();
//   }
// }

// export interface SecondCalculator {
//   square(): void;
//   squareRoot(): void;
//   xRaiseY(): void;
//   raiseTo10(): void;
//   logarithm(): void;
//   naturalLogarithm(): void;
// }

// export class SecondCalculatorImplement implements SecondCalculator {
//   input: HTMLInputElement;
//   errorDiv: HTMLElement;

//   constructor(input: string, errorDiv: string) {
//     this.input = document.getElementById(input) as HTMLInputElement;
//     this.errorDiv = document.getElementById(errorDiv) as HTMLElement;
//   }

//   /**
//    * @function  square
//    * @description  performs square of a number
//    * @params  none
//    * @returns void
//    * Examples:
//    * - 5^2 to 25
//    * - -6^2 to 36
//    */
//   public square(): void {
//     this.input.value = Math.pow(Number(this.input.value), 2).toString();
//   }

//   /**
//    * @function  squareRoot
//    * @description  performs the square root of a number
//    * @params  none
//    * @returns void
//    * Examples:
//    * - sqaureRoot(25) to 5
//    * - squareRoot(-4) to Error!
//    */
//   public squareRoot(): void {
//     const inputNumber = Number(this.input.value);
//     if (inputNumber < 0) {
//       this.displayError();
//     } else {
//       this.input.value = Math.sqrt(inputNumber).toString();
//     }
//   }

//   /**
//    * @function  xRaiseY
//    * @description  evaluates a number raised to another number
//    * @params  none
//    * @returns void
//    * Examples:
//    * - 6^3 to 216
//    */
//   public xRaiseY(): void {
//     this.input.value += "^";
//   }

//   /**
//    * @function  raiseTo10
//    * @description  gives 10 to the power of a number
//    * @params  none
//    * @returns void
//    * Examples:
//    * - 10^3 to 1000
//    */
//   public raiseTo10(): void {
//     this.input.value = Math.pow(10, Number(this.input.value)).toString();
//   }

//   /**
//    * @function  logarithm
//    * @description  performs logarithm(log base 10) of a number
//    * @params  none
//    * @returns void
//    * Examples:
//    * - log(2) to 0.3010299956639812
//    */
//   public logarithm(): void {
//     const inputNumber = Number(this.input.value);
//     if (inputNumber < 0) {
//       this.displayError();
//     } else {
//       this.input.value = Math.log10(inputNumber).toString();
//     }
//   }

//   /**
//    * @function  naturalLogarithm
//    * @description  performs natural logarithm(ln base e) of a number
//    * @params  none
//    * @returns void
//    * Examples:
//    * - ln(2) to 0.6931471805599453
//    */
//   public naturalLogarithm(): void {
//     const inputNumber = Number(this.input.value);
//     if (inputNumber < 0) {
//       this.displayError();
//     } else {
//       this.input.value = Math.log(inputNumber).toString();
//     }
//   }

//   /**
//    * @function  displayError
//    * @description  to display the error and hide it after 2 seconds
//    * @params  none
//    * @returns void
//    */
//   private displayError(): void {
//     this.errorDiv.textContent = "Error!";
//     setTimeout(() => {
//       this.errorDiv.textContent = "";
//       this.input.value = "";
//     }, 2000);
//   }
// }

// export interface SecondCalculator1 {
//   cube(): void;
//   cubeRoot(): void;
//   raiseTo2(): void;
//   logPlus(): void;
//   expMinus(): void;
//   eRaisex(): void;
// }

// export class SecondCalculator1Implement implements SecondCalculator1 {
//   input: HTMLInputElement;
//   errorDiv: HTMLElement;

//   constructor(input: string, errorDiv: string) {
//     this.input = document.getElementById(input) as HTMLInputElement;
//     this.errorDiv = document.getElementById(errorDiv) as HTMLElement;
//   }

//   /**
//    * @function  cube
//    * @description  to calculate the cube of a number
//    * @params  none
//    * @returns void
//    * Examples:
//    * - 2^3 to 8
//    */
//   public cube(): void {
//     this.input.value = Math.pow(Number(this.input.value), 3).toString();
//   }

//   /**
//    * @function  cubeRoot
//    * @description  to calculate the cube root
//    * @params  none
//    * @returns void
//    * Examples:
//    * - cubeRoot(125) to 5
//    * - cubeRoot(-8) to Error!
//    */
//   public cubeRoot(): void {
//     const inputNumber = Number(this.input.value);
//     if (inputNumber < 0) {
//       this.displayError();
//     } else {
//       this.input.value = Math.cbrt(inputNumber).toString();
//     }
//   }

//   /**
//    * @function  raiseTo2
//    * @description  to calculate 2 to power of a number
//    * @params  none
//    * @returns void
//    * Examples:
//    * - 2^5 to 32
//    * - 2^54524 to Infinity
//    */
//   public raiseTo2(): void {
//     this.input.value = Math.pow(2, Number(this.input.value)).toString();
//   }

//   /**
//    * @function  logPlus
//    * @description  to calculate logarithm of 1+p number
//    * @params  none
//    * @returns void
//    * Examples:
//    * - log1p(8) to 2.1972245773362196
//    */
//   public logPlus(): void {
//     const inputNumber = Number(this.input.value);
//     if (inputNumber < 0) {
//       this.displayError();
//     } else {
//       this.input.value = Math.log1p(inputNumber).toString();
//     }
//   }

//   /**
//    * @function  expMinus
//    * @description  to calculate e^x-1 where x is number
//    * @params  none
//    * @returns void
//    * Examples:
//    * - expm1(2) to 6.38905609893065
//    */
//   public expMinus(): void {
//     this.input.value = Math.expm1(Number(this.input.value)).toString();
//   }

//   /**
//    * @function  eRaisex
//    * @description  to calculate e^x where x is number
//    * @params  none
//    * @returns void
//    * Examples:
//    * - e^2 to 7.3890560989306495
//    */
//   public eRaisex(): void {
//     this.input.value = Math.pow(Math.E, Number(this.input.value)).toString();
//   }

//   /**
//    * @function  displayError
//    * @description  to display the error and hide it after 2 seconds
//    * @params  none
//    * @returns void
//    */
//   private displayError(): void {
//     this.errorDiv.textContent = "Error!";
//     setTimeout(() => {
//       this.errorDiv.textContent = "";
//       this.input.value = "";
//     }, 2000);
//   }
// }

// export interface ExtraFunctionInterface {
//   pi(): void;
//   euler(): void;
//   clearAll(): void;
//   removeOneElementFromEnd(): void;
//   byX(): void;
//   modulo(): void;
//   modulus(): void;
//   exponent(): void;
//   factorial(): void;
//   signChange(): void;
// }

// export class ExtraFunctionImplement implements ExtraFunctionInterface {
//   input: HTMLInputElement;
//   errorDiv: HTMLElement;

//   constructor(input: string, errorDiv: string) {
//     this.input = document.getElementById(input) as HTMLInputElement;
//     this.errorDiv = document.getElementById(errorDiv) as HTMLElement;
//   }

//   /**
//    * @function  pi
//    * @description  displays the value of PI
//    * @params  none
//    * @returns void
//    * Examples:
//    * - 3.141592653589793
//    */
//   public pi(): void {
//     this.input.value = Math.PI.toString();
//   }

//   /**
//    * @function  euler
//    * @description  displays the value of Euler's number
//    * @params  none
//    * @returns void
//    * Examples:
//    * - 2.718281828459045
//    */
//   public euler(): void {
//     this.input.value = Math.E.toString();
//   }

//   /**
//    * @function  clearAll
//    * @description  to entirely clear the input field
//    * @params  none
//    * @returns void
//    */
//   public clearAll(): void {
//     this.input.value = "";
//   }

//   /**
//    * @function  removeOneElementFromEnd
//    * @description  to remove one number from the right side end once clicking on it
//    * @params  none
//    * @returns void
//    * Examples:
//    * - 5.2893 to 5.289
//    */
//   public removeOneElementFromEnd(): void {
//     this.input.value = this.input.value.slice(0, -1);
//   }

//   /**
//    * @function  byX
//    * @description  performs inverse of a number
//    * @params  none
//    * @returns void
//    * Examples:
//    * - 1/2 to 0.5
//    */
//   public byX(): void {
//     const x = Number(this.input.value);
//     this.input.value = (1 / x).toString();
//   }

//   /**
//    * @function modulo
//    * @description evaluates the remainder after dividing one number by another.
//    * @params  none
//    * @returns void
//    * Examples:
//    * - 9%7 to 2
//    * - 2%2 to 0
//    */
//   public modulo(): void {
//     this.input.value += "%";
//   }

//   /**
//    * @function  modulus
//    * @description  evaluates the absolute value of a number
//    * @params  none
//    * @returns void
//    * Examples:
//    * - -6.235 = 6.235
//    */
//   public modulus(): void {
//     this.input.value = Math.abs(parseFloat(this.input.value)).toString();
//   }

//   /**
//    * @function  exponent
//    * @description  evaluates the value of E^x, where E is Euler's number
//    * @params  none
//    * @returns void
//    * Examples:
//    * - E^5 to 148.4131591025766
//    */
//   public exponent(): void {
//     const x = Number(this.input.value);
//     this.input.value = Math.exp(x).toString();
//   }

//   /**
//    * @function  factorial
//    * @description  performs the factorial of a number
//    * @params  none
//    * @returns void
//    * Examples:
//    * - 5! to 120
//    */
//   public factorial(): void {
//     let number = Number(this.input.value);
//     if (number < 0) {
//       const errDiv = document.getElementById("errorDiv");
//       this.errorDiv.textContent = "Error!";
//       setTimeout(() => {
//         this.errorDiv.textContent = "";
//         this.input.value = "";
//       }, 2000);
//     } else if (number == 0 || number == 1) {
//       this.input.value = "1";
//     } else if (number > 1) {
//       for (let i = number - 1; i > 1; i--) {
//         number = number * i;
//       }
//       this.input.value = number.toString();
//     }
//   }

//   /**
//    * @function  signChange
//    * @description  gives a number with its opposite sign
//    * @params  none
//    * @returns void
//    * Examples:
//    * - 7 to -7
//    */
//   public signChange(): void {
//     const x = Number(this.input.value);
//     this.input.value = (-x).toString();
//   }
// }
// let object = new TrigonometryCalculatorImplement(inputField);
// console.log(object.sine());
// export interface Memory {
//   memoryStack: number[];
//   input: HTMLInputElement;
//   buttonDisableToAble(): void;
//   memoryClear(): void;
//   memoryRecall(): void;
//   memoryAdd(): void;
//   memorySubtract(): void;
//   memorySave(): void;
// }

// export class MemoryImplement implements Memory {
//   memoryStack: number[] = [];
//   input: HTMLInputElement = document.createElement("input");

//   buttonDisableToAble(): void {
//     (document.getElementById("mc") as HTMLButtonElement).disabled = false;
//     (document.getElementById("mr") as HTMLButtonElement).disabled = false;
//   }

//   memoryClear(): void {
//     this.memoryStack = [];
//   }

//   memoryRecall(): void {
//     this.input.value = this.memoryStack[this.memoryStack.length - 1].toString();
//   }

//   memoryAdd(): void {
//     this.buttonDisableToAble();
//     if (this.memoryStack.length === 1) {
//       this.memoryStack.push(parseInt(this.input.value));
//     } else {
//       this.memoryStack[this.memoryStack.length - 1] += parseInt(
//         this.input.value
//       );
//     }
//   }

//   memorySubtract(): void {
//     this.buttonDisableToAble();
//     if (this.memoryStack.length === 0) {
//       this.memoryStack.push(-1 * parseInt(this.input.value));
//     } else {
//       this.memoryStack[this.memoryStack.length - 1] -= parseInt(
//         this.input.value
//       );
//     }
//   }

//   memorySave(): void {
//     this.buttonDisableToAble();
//     if (this.memoryStack.length === 0) {
//       this.memoryStack.push(parseFloat(this.input.value));
//     } else {
//       this.memoryStack.push(parseFloat(this.input.value));
//     }
//   }
// }
