const getNewArray = ([...strings])=>{
    return strings.filter( s => s.length >= 5 && s.includes("a"))
}
console.log(getNewArray(["banana", "Apple", "cat"]));