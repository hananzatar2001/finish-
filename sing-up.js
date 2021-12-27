let button=document.getElementById("b");
let button1=document.getElementById("c");

let name = document.getElementById("name");
var password = document.getElementById("password");
var hanan="hanan";
var pass="hanan";
button.addEventListener("click",validdata);
button1.addEventListener("click",close);

function validdata(){
if(name.value===hanan){
    if (password.value===pass){
        alert("welcome "+name.value);
        window.open('file:///C:/Users/raeq%20zatar/Desktop/h/web1/%D8%AD%D9%86%D8%A7%D9%86%20%D8%B2%D8%B9%D8%AA%D8%B1/web.html')

    }
    else{
        alert("password is not corect");
    }
}
else{
alert("the name is not corect");
}
}
function close()
{

window.open('file:///C:/Users/raeq%20zatar/Desktop/h/web1/%D8%AD%D9%86%D8%A7%D9%86%20%D8%B2%D8%B9%D8%AA%D8%B1/web.html')

}