// Nested Fnction

let v = 1000;
console.log(v);

function outer(){
    let i = 1;
    const y = 30;
    var arr = (q,s) =>{
        console.log(q);
        console.log(s);
        const c = "js";
        console.log(c); 
    };
    arr("arg 1", "arg 2");
    console.log(i,y);

    function f1(){
        console.log("Named Function");
    }
}
outer();