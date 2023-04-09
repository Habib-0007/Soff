document.getElementById("getResult").onclick = function (){
    let a;
    let b;
    let c;
    let m;
    let n;
    let x;
    let y;
    
    a = eval(document.getElementById("firstValue").value);
    a = Number(a);
    
    b = eval(document.getElementById("secondValue").value);
    b = Number(b);

    c = eval(document.getElementById("thirdValue").value);
    c = Number(c);
    
    m = Math.sqrt(Math.pow(b,2) - (4 * a * c));
    x = (- b + m) / (2 * a);
    y = (- b - m) / (2 * a);
    document.getElementById("firstResult").innerText = "The value of x is: " + x + " or " + y;  
    
}


document.getElementById("getEquationResult").onclick = function () {
    let a;
    let b;
    let c;
    let d;
    let e;
    let f;
    let g;
    let h;
    let i;
    let x;
    let y;
    
    
    a = eval(document.getElementById("coA").value);
    a = Number(a);
    
    b = eval(document.getElementById("coB").value);
    b = Number(b);
    
    e = eval(document.getElementById("firstConstant").value);
    e = Number(e);

    c = eval(document.getElementById("coC").value);
    c = Number(c);

    d = eval (document.getElementById("coD").value);
    d = Number(d);
    
    f = eval (document.getElementById("secondConstant").value);
    f = Number(f);
    
    g = (b * f) - (d * e);
    h = (c * e) - (a * f);
    i = (b * c) - (a * d);
    
    x = g / i;
    y = h / i;
    
    document.getElementById("oneResult").innerText = "x = " + x;

document.getElementById("twoResult").innerText = "y = " + y;
    
}


let threeLinear = document.querySelector("#getThreeLinearRes");

threeLinear.addEventListener("click", () => {
    let a = eval(document.querySelector("#valA").value);
    let b = eval(document.querySelector("#valB").value);
    let c = eval(document.querySelector("#valC").value);
    let d = eval(document.querySelector("#valD").value);
    let e = eval(document.querySelector("#valE").value);
    let f = eval(document.querySelector("#valF").value);
    let g = eval(document.querySelector("#valG").value);
    let h = eval(document.querySelector("#valH").value);
    let i = eval(document.querySelector("#valI").value);
    let j = eval(document.querySelector("#valJ").value);
    let k = eval(document.querySelector("#valK").value);
    let l = eval(document.querySelector("#valL").value);
    
    let den =( ( a * (f * k - g * j) ) - ( b * (e * k - g * i) ) + ( c * (e * j - i * f) ) );
    
   let xNum =( ( d * (f * k - g * j) ) - ( b * (h * k - g * l) ) + ( c * (h * j - l * f) ) );
   
   let yNum =( ( a * (h * k - g * l) ) - ( d * (e * k - g * i) ) + ( c * (e * l - i * h) ) );
   
   let zNum =( ( a * (f * l - h * j) ) - ( b * (e * l - h * i) ) + ( d * (e * j - i * f) ) );
     
     let x = (xNum/den);
     let y = (yNum/den);
     let z = (zNum/den);
     
     let xValue = document.querySelector("#valDRes");
     let yValue = document.querySelector("#valHRes");
     let zValue = document.querySelector("#valLRes");
    
     xValue.innerText = `x = ${x}`;
     yValue.innerText = `y = ${y}`;
     zValue.innerText = `z = ${z}`;
     
});
