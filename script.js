// generate random number to .shift()
let rando = Math.floor(Math.random() * 10);

// prompt for string to be cipher'd
let chars = []
let message = prompt("Input a message you would like encoded.").toLowerCase;
console.log(message);
let encryptedMessage = " ";


// construct array of aphabet 
let alphabet = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];

// loop through message to put all chars in to array
for (var i = 0; i < message.length; i++){
    console.log(i);

    // break string down in to single chars and put in to an array
    chars.push(i);

    console.log(chars);

    return chars;
}

// .indexOf() each char and + along the array index with .shift()
for (var i = 0; i < chars.length; i++){
    let position = alphabet.indexOf(i)
    let newPosition = position + rando;
    let pulledLettter = alphabet[newPosition];
    encryptedMessage.append(pulledLetter);
    return encryptedMessage;
}

console.log(rando);
// recombine string


// output string