const function1 = (callback, a) => {
    console.log(typeof callback);
    const b = 10;
    callback(a, b);
}

const callback = (x, y) => {
    console.log("sum is: " ,x + y);
    // console.log("I am a callback function");
    return ;
}

function1(callback, 20);
