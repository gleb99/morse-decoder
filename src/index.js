const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let nArr = [];
    let symbArr = [];
        
     for (let i = 0; i <= expr.length; i++) {
        if (i % 10 === 0) {
          let  word = expr.slice(i-10, i);
          arr.push(word);
        }  
      }
      arr.shift()
      for (let i = 0; i <= arr.length-1; i++) {
        let arrIn = arr[i]
        for (let j = 0; j <= arrIn.length-1; j++) {
          if (arrIn[j] ==! 0) {
            let  word = arrIn.slice(j);
            nArr.push(word);
            break;
          } else if (arrIn[j] === '*') {
            nArr.push(arrIn);
            break;
          }
        }
      }
      for (let i = 0; i <= nArr.length-1; i++) {  
        let arrIn = nArr[i];
        
        for (let j = 0; j <= arrIn.length-1;j=j+2) {
        if (arrIn[j] === '1') {
          
          if (arrIn[j]===arrIn[j+1]) {
            symbArr[i]= symbArr[i] + '-';
          } else {
            symbArr[i]= symbArr[i] + '.';
          }
        } else {
          symbArr[i]=symbArr[i] + '*';   
        }
      }
    }
    for (let i = 0; i <= symbArr.length-1; i++) {
      symbArr[i] = symbArr[i].slice(9)
     }
     for (let i = 0; i <= symbArr.length-1; i++) {
      if (symbArr[i] !== "*****") {
        symbArr[i] = MORSE_TABLE[symbArr[i]];
      } else {
        symbArr === symbArr.splice(i, 1,' ');
        
      }
     }
     let str = symbArr.join('')
        return  str;
}

module.exports = {
    decode
}