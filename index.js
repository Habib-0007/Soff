document.getElementById("getResult").onclick = function (){
    let a;
    let b;
    let c;
    let m;
    let n;
    let x;
    let y;
    
    a = document.getElementById("firstValue").value;
    a = Number(a);
    
    b = document.getElementById("secondValue").value;
    b = Number(b);

    c = document.getElementById("thirdValue").value;
    c = Number(c);
    
    m = Math.sqrt(Math.pow(b,2) - (4 * a * c));
    x = (- b + m) / (2 * a);
    y = (- b - m) / (2 * a);
    document.getElementById("firstResult").innerHTML = "The value of x is: " + x + " or " + y;  
    
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
    
    
    a = document.getElementById("coA").value;
    a = Number(a);
    
    b = document.getElementById("coB").value;
    b = Number(b);
    
    e = document.getElementById("firstConstant").value;
    e = Number(e);

    c = document.getElementById("coC").value;
    c = Number(c);

    d = document.getElementById("coD").value;
    d = Number(d);
    
    f = document.getElementById("secondConstant").value;
    f = Number(f);
    
    g = (b * f) - (d * e);
    h = (c * e) - (a * f);
    i = (b * c) - (a * d);
    
    x = g / i;
    y = h / i;
    
    document.getElementById("oneResult").innerHTML = "x = " + x;

document.getElementById("twoResult").innerHTML = "y = " + y;
    
    
}
