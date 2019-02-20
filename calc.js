function init(){
var numm = document.getElementById('1');
console.log(numm);
}

var num1 = 0;
var num2 = 0;
var opera = 0;
function num(comp) {
  let id = comp.id;
  if (opera == 0){
    if(num1==0 && num1 !== '0.'){
      if (id=='.'){
        num1 = '0.';
      }else{
        num1 = id;
      }
    }else{
      num1 += id;
    }
  }else{
    if(num2==0 && num2 !== '0.'){
      if (id=='.'){
        num2 = '0.';
      }else{
        num2 = id;
      }
    }else{
      num2 += id;
    }
  }
  console.log(num1);
  console.log(num2);
}

function operation(comp) {
  let id = comp.id;
  opera = id;
    console.log(opera);
}

function result(comp){
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (opera){
    case '+':
        num1 += num2;
    break;
    case '-':
        num1 = num2 - num1;
    break;
    case 'x':
        num1 *= num2;
    break;
    case '/':
        num1 = num1 / num2;
    break;
    case '%':
        num1 = Math.pow(num2, num1);
    break;
}
    console.log(num1);
    num1 = 0;
    num2 = 0;
    opera = 0;

}

function refrescar(){
    document.getElementById("valor_numero").value = num1;
}
