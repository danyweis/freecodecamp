console.clear();
function convertToRoman(num) {
let result = []
let off = ''
for (let i = num ; i > 0 ; i = i - off){
  console.log(i);
  if (i <= 0){
result.push('Sorry that number is to small')
break;
    }else if (i === 1){
      result.push('I')
      off = 1

    } else if(i === 2){
      result.push('II')
      off = 2
    } else if(i === 3){
      result.push('III')
      off = 3
    } else if(i === 4){
      result.push('IV')
      off = 4
    } else if(i === 5){
      result.push('V')
      off = 5
    } else if(i === 6){
      result.push('VI')
      off = 6
    } else if(i === 7){
      result.push('VII')
      off = 7
    } else if(i === 8){
      result.push('VIII')
      off = 8
    } else if(i === 9){
      result.push('IX')
      off = 9
    }
    else if(i >= 10 && i < 20){
      result.push('X')
      off = 10
    }
    else if(i >= 20 && i < 30){
      result.push('XX')
      off = 20
    }
    else if(i >= 30 && i < 40){
      result.push('XXX')
      off = 30
    }
    else if(i >= 40 && i < 50){
      result.push('XL')
      off = 40
    }
    else if(i >= 50 && i < 60){
      result.push('L')
      off = 50
    }
    else if(i >= 60 && i < 70){
      result.push('LX')
      off = 60
    }
    else if(i >= 70 && i < 80){
      result.push('LXX')
      off = 70
    }
    else if(i >= 80 && i < 90){
      result.push('LXXX')
      off = 80
    }
    else if(i >= 90 && i < 100){
      result.push('XC')
      off = 90
    }
    else if(i >= 100 && i < 200){
      result.push('C')
      off = 100
    }
    else if(i >= 200 && i < 300){
      result.push('CC')
      off = 200
    }
    else if(i >= 300 && i < 400){
      result.push('CCC')
      off = 300
    }
    else if(i >= 400 && i < 500){
      result.push('CD')
      off = 400
    }
    else if(i >= 500 && i < 600){
      result.push('D')
      off = 500
    }
    else if(i >= 600 && i < 700){
      result.push('DC')
      off = 600
    }
    else if(i >= 700 && i < 800){
      result.push('DCC')
      off = 700
    }
    else if(i >= 800 && i < 900){
      result.push('DCCC')
      off = 800
    }
    else if(i >= 900 && i < 1000){
      result.push('CM')
      off = 900
    }
    else if(i >= 1000 && i < 2000){
      result.push('M')
      off = 1000
    }
    else if(i >= 2000 && i < 3000){
      result.push('MM')
      off = 2000
    }
    else if(i >= 3000 && i < 4000){
      result.push('MMM')
      off = 3000
    }
    else {
      result.push('Sorry that number is to big')
      break;
    }
   
    
}
console.log(result.join(''));
  return result.join('');
}

convertToRoman(574);
