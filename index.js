function sumOfMinimums(arr) {
let sum = 0;
for(let a of arr){
sum += Math.min.apply(Math, a);
}
return sum;



}


sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])