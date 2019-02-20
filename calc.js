function init(){
var numm = document.getElementById('1');
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
    print_number(num1)
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
    print_number(num1+opera+num2)
  }
}

function operation(comp) {
  let id = comp.id;
  opera = id;
  print_number(num1+opera)
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
    print_number(num1)
    num1 = 0;
    num2 = 0;
    opera = 0;
  }

function print_number(cadena){
    document.getElementById("valor_numero").value = cadena;
}
