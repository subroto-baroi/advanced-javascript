// Use break 

const num = [2, 3, 5, 8, 9, 10];
for (let i = 0; i < num.length; i++) {
    if (num[i]> 5){
        break;        // break loop when number is up to 5
    }
    console.log(num[i]);
    
}

 // Use continue

const num = [2, -3, 5, -8, 9, -10];
for (let i = 0; i < num.length; i++) {
    if (num[i] < 0){
        continue;      //  loop ignore all negative numbers
    }
    console.log(num[i]);
    
}
