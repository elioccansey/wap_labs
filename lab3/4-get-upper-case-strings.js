function getUpperCaseStrings(strings){
    return strings.reduce((acc, s) =>{
        if(s.toUpperCase() === s){
            acc.push(s)
        }
        return acc;
    }, [])
}

console.log(getUpperCaseStrings(["to", "AAA", "aaa"]))