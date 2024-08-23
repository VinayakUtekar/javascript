/* Non primitive datatype
   With array we can store multiple value/data
   Array size/length is not fixed
   it is index data structure and index positioning starts from 0
   var a = [a, true, 100n, null, undefined, [100,200,300], NAN]
            0,  1,   2,     3,      4,          5,          6
    Length defines totalnumber of vales are present
    length = last index+1 -> 6+1 = 7 
*/

var arr = [
  10,
  false,
  [20, 30],
  100n,
  null,
  undefined,
  () => {
    console.log("Arrow Function");
  },
];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[arr.length - 2]);
console.log(arr[2]); //Display complete array
console.log(arr[2][1]); //display internal emelent of array
console.log(arr[6]());

arr[7] = 1000;
arr[12] = true;
console.log(arr);
console.log(arr[9]); //if elemnt not assigned it will display default i.e undefined
console.log(arr[200]);
