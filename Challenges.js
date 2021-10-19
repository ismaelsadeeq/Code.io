/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
  // Write your code here
  let lonelyInteger;
  for(let i=0; i<a.length;i++){
      if(a.indexOf(a[i])  == a.lastIndexOf(a[i]) ){
          lonelyInteger=a[i]
      }
  }
  return lonelyInteger

}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  let negatives=0,positives =0,zeros =0;
  let length = arr.length; 
  for(let i=0;i<length;i++){
      if(arr[i] == 0){
          zeros+=1;
      }
      if(arr[i] < 0){
          negatives+=1;
      }
      if(arr[i] > 0){
          positives+=1;
      }
  }
  let nagativeRatio = negatives/length;
  let postiveRatio = positives/length;
  let zeroRatio = zeros/length;
  console.log(postiveRatio.toFixed(6));
  console.log(nagativeRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));

}
/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here
  let length = arr.length;
  let minSum=0,maxSum=0,sum=0;
  for(let i=0;i<length;i++){
      sum+=arr[i]
  }
  minSum = sum - Math.min(...arr);
  maxSum = sum - Math.max(...arr)
  console.log(`${maxSum} ${minSum}`);

}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here]
  let formart = s.slice(8);
  let hour = parseInt(s.slice(0,2))
  if(formart =='PM'){
      if(hour<12){
          hour = hour+12
      }
  }
  if(formart == 'AM'){
      if(hour ==12){
         hour = hour = '00'
      }else{
          hour=`0${hour}`
      }
  }
  let time = `${hour}${s.slice(2,8)}`
  return time

}
function diagonalDifference(arr) {
  // Write your code here
  let sum = 0;
  let sum2 = 0;
  let n = arr.length;
  for(let i = 0; i<arr.length ;i++){
      let increment = 0
      for(let j =0;j <arr[i].length; j++){
           // an element from the main diagonal
          if(i === j) { 
              
              sum += arr[i][j];
          }
          // an element from the counterdiagonal
          if(i + j === n - 1){
              sum2 += arr[i][j];
          }
          
      }
  }
  console.log(sum - sum2)
  return (Math.abs(sum - sum2))
}


