/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(){
    let result = 0;
  }
  add(num1){
    result = result+num1;
  }
  subtract(num1){
    result = result-num1;
  }
  multiply(num1){
    result = result*num1;
  }
  divide(num1){
    result = result/num1;
  }
  clear(){
    result=0;
  }
  getResult(){
    return result;
  }
  calculate(str){
    str = str.replace(/ +/g, "");
    for(let i=0;i<str.length;i++){
      if(str[i]=='('){
        let j=i+1;
        let count=1;
        while(count>0){
          if(str[j]=='('){
            count++;
          }
          else if(str[j]==')'){
            count--;
          }
          j++;
        }
        let temp=str.slice(i+1,j-1);
        //console.log(temp);
        let ans=eval(temp);
        str=str.slice(0,i)+ans+str.slice(j);
        i=i+ans.length;
        ans=eval(str);
        result = ans;
      }
    }
  }
}

module.exports = Calculator;
