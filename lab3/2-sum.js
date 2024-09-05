function sum([...nums]){
    return nums.filter(num => num > 20).reduce((acc, num) => acc + num, 0)
}
console.log(sum([22, 1, 21, 14]));

