function main(){
  var numm = document.getElementById('boton_num');
  var trace = document.getElementById('boton_trace');
}

var num1 = 0;
var num2 = 0;
var symbol = 0;

function num(number) {
  let id = number.id;
  if (symbol == 0){
    if(num1==0 && num1 !== '0.'){
      if (id=='.'){
        num1 = '0.';
      }else{
        num1 = id;
        console.log("1");
      }
    }else{
      num1 += id;
    }
    print_number(num1)
  }else if(symbol == AC){
    print_number("");
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
    print_number(num1+symbol+num2)
  }
}

function operation(opera) {
  let id = opera.id;
  symbol = id;
  if(symbol == 'AC'){
    print_number("");
  }else{
    print_number(num1+symbol);
  }
}

function result(){
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (symbol){
    case '+':
        num1 += num2;
    break;
    case '-':
        num1 = num1 - num2;
    break;
    case 'x':
        num1 *= num2;
    break;
    case '/':
        num1 = num1 / num2;
    break;
    case '^':
        num1 = Math.pow(num1, num2);
    break;
    case '':
        num1 = "";
    break;
    }
    print_number(num1)
    num1 = 0;
    num2 = 0;
    symbol = 0;
  }

function print_number(cadena){
    document.getElementById("valor_numero").value = cadena;
}
