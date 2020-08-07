// for double equal 

const first = 20;
const second = "20";
if(first == second){            
    console.log('condition is true');
}else{
    console.log('condition is false');
}

// answer is true because double equal check only value.


// for triple equal 

const first = 20;
const second = "20";
if(first === second){
    console.log('condition is true');
}else{
    console.log('condition is false');
}

// answer is false because triple equal check value and value type.


const first = 1;
const second = true;
if(first == second){
    console.log('condition is true');
}else{
    console.log('condition is false');
}
// answer is true because javascript 1 mean true and 0 mean false.

const first = 1;
const second = true;
if(first === second){
    console.log('condition is true');
}else{
    console.log('condition is false');
}

// answer is false because triple equal check value type.