const outerFunction = () => {
    let count = 0;
    return () => {
        count++;
        console.log(count);
    }
    
}
const outerFunctionIs = outerFunction();
const outerFunctionIsA = outerFunction();
const outerFunctionIsNot = outerFunction();

outerFunctionIs();
outerFunctionIsNot();
outerFunctionIs();
outerFunctionIsA();
outerFunctionIsNot();
outerFunctionIsA();
outerFunctionIsNot();
outerFunctionIsA();
outerFunctionIs();