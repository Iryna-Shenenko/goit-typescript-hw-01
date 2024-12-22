function showMessage(message: string): void {
    console.log(message);
  };



 type addCalc = (num1: number, num2: number) => number;
 let calc: addCalc;

 calc = ( num1: number, num2: number ) => {
    return num1 + num2;
 };

 function customError(): never{
    throw new Error('Error');
  }
