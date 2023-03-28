let op = document.getElementById("output-screen");

function display(num){
    op.value += num;
}

function Calculate(){
    try{
        op.value = eval(op.value);
    }
    catch(err){
        alert("Invalid Syntax");
    }
}

function Clear(){
    op.value = "";
}

function del(){
    op.value = op.value.slice(0,-1);
}

function sqrt(){
    op.value = Math.sqrt(op.value);
}

function factorial(){
    let i, fact=1;
    for(i=1; i<=op.value; i++)
        fact = fact * i;
    op.value = fact;
}