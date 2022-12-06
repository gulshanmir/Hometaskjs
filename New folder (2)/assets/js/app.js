let arr = [1,2,3,4,5,6,7,8,9,10]

// function myfunction(num) {
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index] == num) {
//             return index;  
//         }
//     }
// }

// console.log(myfunction(9));

newArrOdd =[]
newArrEven=[]
for (let index = 0; index < arr.length; index++) {
    if(arr[index]%2==0){
        newArrEven.push(arr[index])
    }else{
        newArrOdd.push(arr[index])
    }
    
}console.log(newArrEven)
console.log(newArrOdd)